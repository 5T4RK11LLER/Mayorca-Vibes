const numeroRestaurante = "5356530630";

const formReservacion = document.getElementById("formReservacion");

formReservacion.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nombre = document.getElementById("inputName").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const personas = document.getElementById("numPersonas").value;

  if (!nombre || !fecha || !hora) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const mensaje =
    `Nueva reserva:\n` +
    `Nombre: ${nombre}\n` +
    `Fecha: ${fecha}\n` +
    `Hora: ${hora}\n` +
    `Personas: ${personas}`;

  const mensajeCodificado = encodeURIComponent(mensaje);

  const urlWhatsApp = `https://wa.me/${numeroRestaurante}?text=${mensajeCodificado}`;

  window.open(urlWhatsApp, "_blank");
});