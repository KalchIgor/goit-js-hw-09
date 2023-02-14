import flatpickr from 'flatpickr'; // Описаний в документації
import 'flatpickr/dist/flatpickr.min.css';// Додатковий імпорт стилів
import Notiflix from 'notiflix';
// npm i notiflix  подключение через терминал

const text = document.querySelector("#datetime-picker");
const timerEl = document.querySelector(".timer");
const btnStart = document.querySelector("button[data-start]")
const days = document.querySelector("span[data-days]");
const dataSt = document.querySelector("button[data-start]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const second = document.querySelector("span[data-second]");

btnStart.disabled = true; // начальное значение кнопки: выключена







