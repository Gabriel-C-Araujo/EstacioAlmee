document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendarBody');
    const monthYear = document.getElementById('monthYear');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");
    const closeModal = document.getElementsByClassName("close")[0];
    const modalButton = document.getElementById("modalButton");

    let currentDate = new Date();

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
                    const cellDay = day; // Capture the current value of day
                    cell.innerText = cellDay;
                    cell.setAttribute('data-day', cellDay);
                    cell.setAttribute('data-month', month);
                    cell.setAttribute('data-year', year);
                    cell.addEventListener('click', function() {
                        openModal(cellDay, month, year);
                    });
                    if (cellDay === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
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
        modalMessage.innerText = `Você clicou no dia ${day} de ${new Date(year, month).toLocaleString('default', { month: 'long' })}, ${year}`;
        modal.style.display = "flex";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    modalButton.onclick = function() {
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
