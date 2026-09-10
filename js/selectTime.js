// Horario de cocina (Septiembre)
const SERVICIOS = [
  { inicio: "12:30", fin: "15:00" }, // Comida
  { inicio: "18:00", fin: "22:00" }  // Cena
];

function horaATotalMinutos(horaTexto) {
  const [h, m] = horaTexto.split(":").map(Number);
  return h * 60 + m;
}

function totalMinutosAHora(totalMinutos) {
  const h = Math.floor(totalMinutos / 60);
  const m = totalMinutos % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Genera todos los horarios cada 30 min dentro de comida + cena (el hueco entre servicios queda excluido)
function generarHorariosCompletos() {
  const horarios = [];
  SERVICIOS.forEach(({ inicio, fin }) => {
    let actual = horaATotalMinutos(inicio);
    const finMin = horaATotalMinutos(fin);
    while (actual <= finMin) {
      horarios.push(totalMinutosAHora(actual));
      actual += 30;
    }
  });
  return horarios;
}

const TODOS_LOS_HORARIOS = generarHorariosCompletos();

const inputHora = document.getElementById("hora");
const btnHoraMenos = document.getElementById("btnHoraMenos");
const btnHoraMas = document.getElementById("btnHoraMas");

let horariosDisponibles = [];
let indiceHora = -1;

function actualizarInputHora() {
  inputHora.value = indiceHora === -1 ? "" : horariosDisponibles[indiceHora];
}

function activarBotones(activo) {
  btnHoraMenos.disabled = !activo;
  btnHoraMas.disabled = !activo;
}

// Se llama desde selectDate.js cada vez que el usuario elige una fecha
function actualizarHorariosDisponibles(fechaElegida) {
  const ahora = new Date();
  const esHoy = fechaElegida.toDateString() === ahora.toDateString();

  if (!esHoy) {
    horariosDisponibles = [...TODOS_LOS_HORARIOS];
  } else {
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes() <= 30 ? 30 : 0;
    if (minutos === 0) horas += 1;
    const minutosAhora = horas * 60 + minutos;

    horariosDisponibles = TODOS_LOS_HORARIOS.filter(
      (h) => horaATotalMinutos(h) >= minutosAhora
    );
  }

  if (horariosDisponibles.length === 0) {
    indiceHora = -1;
    activarBotones(false);
    mostrarAviso("Ya no quedan horarios disponibles para hoy. Por favor elige otra fecha.");
  } else {
    indiceHora = 0;
    activarBotones(true);
  }

  actualizarInputHora();
}

btnHoraMas.addEventListener("click", () => {
  if (horariosDisponibles.length === 0) return;
  indiceHora = (indiceHora + 1) % horariosDisponibles.length;
  actualizarInputHora();
});

btnHoraMenos.addEventListener("click", () => {
  if (horariosDisponibles.length === 0) return;
  indiceHora = (indiceHora - 1 + horariosDisponibles.length) % horariosDisponibles.length;
  actualizarInputHora();
});

// Estado inicial: sin fecha elegida todavía, botones deshabilitados
activarBotones(false);