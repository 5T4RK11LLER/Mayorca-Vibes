// Idioma español para Flatpickr
flatpickr.localize(flatpickr.l10ns.es);

flatpickr("#fecha", {
  dateFormat: "d/m/Y",
  minDate: "today",
  monthSelectorType: "static",
  disableMobile: true,

  onChange: function (selectedDates) {
    const fechaElegida = selectedDates[0];
    if (!fechaElegida) return;

    actualizarHorariosDisponibles(fechaElegida);
  }
});