document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendarBody');
    const monthYear = document.getElementById('monthYear');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalDate");
    const descriptionInput = document.getElementById("descriptionInput");
    const saveDescriptionButton = document.getElementById("saveDescription");
    const closeModal = document.getElementsByClassName("close")[0];
    const emojiPicker = document.querySelectorAll('.emoji-picker .emoji');
    const colorPicker = document.querySelectorAll('.color-picker span');

    let currentDate = new Date();
    let selectedDate = {};
    let selectedEmoji = '';
    let selectedColor = '';

    const descriptions = {};

    function renderCalendar(date) {
        calendarBody.innerHTML = '';
        calendarBody.style.transform = 'scale(0.9)';
        setTimeout(() => calendarBody.style.transform = 'scale(1)', 100);

        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        monthYear.innerText = date.toLocaleString('default', { month: 'long', year: 'numeric' });

        let day = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.innerText = '';
                } else if (day > lastDate) {
                    break;
                } else {
                    const cellKey = `${day}-${month}-${year}`;
                    cell.innerText = day;
                    if (descriptions[cellKey]) {
                        cell.innerText += ` ${descriptions[cellKey].emoji}`;
                        cell.classList.add('has-description');
                        cell.classList.add(descriptions[cellKey].color);
                    }
                    cell.setAttribute('data-day', day);
                    cell.setAttribute('data-month', month);
                    cell.setAttribute('data-year', year);
                    cell.addEventListener('click', function() {
                        openModal(cell.getAttribute('data-day'), cell.getAttribute('data-month'), cell.getAttribute('data-year'));
                    });
                    if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                        cell.classList.add('today');
                    }
                    day++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function openModal(day, month, year) {
        selectedDate = { day, month, year };
        const cellKey = `${day}-${month}-${year}`;
        modal.style.display = "block";
        modalContent.innerText = `Você selecionou o dia ${day} de ${new Date(year, month).toLocaleString('default', { month: 'long' })}, ${year}`;
        descriptionInput.value = descriptions[cellKey] ? descriptions[cellKey].description : '';
        selectedEmoji = descriptions[cellKey] ? descriptions[cellKey].emoji : '';
        selectedColor = descriptions[cellKey] ? descriptions[cellKey].color : '';
        emojiPicker.forEach(emoji => emoji.style.border = (descriptions[cellKey] && descriptions[cellKey].emoji === emoji.getAttribute('data-emoji')) ? '2px solid #2196F3' : 'none');
        colorPicker.forEach(color => color.style.border = (descriptions[cellKey] && descriptions[cellKey].color === color.getAttribute('data-color')) ? '2px solid #2196F3' : 'none');
    }

    emojiPicker.forEach(emoji => {
        emoji.addEventListener('click', function() {
            emojiPicker.forEach(e => e.style.border = 'none');
            emoji.style.border = '2px solid #2196F3';
            selectedEmoji = emoji.getAttribute('data-emoji');
        });
    });

    colorPicker.forEach(color => {
        color.addEventListener('click', function() {
            colorPicker.forEach(c => c.style.border = 'none');
            color.style.border = '2px solid #2196F3';
            selectedColor = color.getAttribute('data-color');
        });
    });

    saveDescriptionButton.addEventListener('click', function() {
        const { day, month, year } = selectedDate;
        const cellKey = `${day}-${month}-${year}`;
        descriptions[cellKey] = {
            description: descriptionInput.value,
            emoji: selectedEmoji,
            color: selectedColor
        };
        modal.style.display = "none";
        renderCalendar(currentDate);
        alert('Descrição salva com sucesso!');
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    prevButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
