const HORA_APERTURA = "12:00";
const HORA_CIERRE = "23:00";

const horaPicker = flatpickr("#hora", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
  minuteIncrement: 30,
  minTime: HORA_APERTURA,
  maxTime: HORA_CIERRE
});