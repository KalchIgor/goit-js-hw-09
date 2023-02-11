


 // поиск элемента
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.disabled = true; // начальное состояние кнопки: выключена
let colorInterval = null; // таймер для смены цвета

// функция генерации случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// додаем слушателя для кнопки СТАРТ
btnStart.addEventListener('click', () => {
  btnStart.disabled = true; // деактивация кнопки СТАРТ
  btnStop.disabled = false; // активация кнопки СТОП

  // таймер для смены цвкта
  colorInterval = setInterval(() => {

    // покраска фона в случайный цвет
    document.body.style.background = getRandomHexColor();
  }, 1000); // смена цвета раз в секунду
});

// додаем слушателя кнопки СТОП
btnStop.addEventListener('click', () => {

  // очистка таймера смены цвета
  clearInterval(colorInterval);

  btnStart.disabled = false; // активация кнопки СТАРТ
  btnStop.disabled = true; // деактивация кнопки СТОП

});