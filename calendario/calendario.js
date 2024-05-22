function printCalendar() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    console.log(`\n${new Date(year, month).toLocaleString('default', {month: 'long'})} ${year}`);

    // Preenchendo os dias vazios antes do primeiro dia do mês
    for (let i = 0; i < firstDayOfMonth; i++) {
        console.log("   ");
    }

    // Preenchendo os dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
        console.log(`${i.toString().padStart(4)}  `); // padStart garante que todos os dias tenham 4 caracteres
    }
}

printCalendar();