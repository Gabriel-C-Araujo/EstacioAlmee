const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentDate = new Date();

function renderCalendar(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  console.log(`\n${date.toLocaleString('pt-BR', { month: 'long' })} ${year}`);
  daysOfWeek.forEach(day => {
    process.stdout.write(`${day} `);
  });
  console.log('');

  for (let i = 0; i < firstDayOfMonth; i++) {
    process.stdout.write('    ');
  }

  for (let day = 1; day <= daysInMonth; day++) {
    process.stdout.write(day.toString().padStart(3, ' ') + ' ');
    if ((firstDayOfMonth + day) % 7 === 0) {
      console.log('');
    }
  }
  console.log('\n');
}

function askForNextAction() {
  rl.question('Digite "a" para mês anterior, "p" para próximo mês, ou "s" para sair: ', (answer) => {
    if (answer.toLowerCase() === 'a') {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
      askForNextAction();
    } else if (answer.toLowerCase() === 'p') {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
      askForNextAction();
    } else if (answer.toLowerCase() === 's') {
      rl.close();
    } else {
      console.log('Opção inválida, tente novamente.');
      askForNextAction();
    }
  });
}

renderCalendar(currentDate);
askForNextAction();
