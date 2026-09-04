// Horario normal del restaurante — ajusta estos valores según corresponda
const HORA_APERTURA = "12:00";
const HORA_CIERRE = "23:00";

// Guardamos la instancia en una variable global (sin "const"/"let" en el
// primer script que la usa) para que selectDate.js pueda leerla y modificarla.
const horaPicker = flatpickr("#hora", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
  minuteIncrement: 30,
  minTime: HORA_APERTURA,
  maxTime: HORA_CIERRE
});