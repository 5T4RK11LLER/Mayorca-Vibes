// Idioma español para Flatpickr
flatpickr.localize(flatpickr.l10ns.es);

flatpickr("#fecha", {
  dateFormat: "d/m/Y",
  minDate: "today",
  monthSelectorType: "static", 

  onChange: function (selectedDates) {
    const fechaElegida = selectedDates[0];
    if (!fechaElegida) return;

    const ahora = new Date();
    const esHoy = fechaElegida.toDateString() === ahora.toDateString();

    if (esHoy) {
      let horas = ahora.getHours();
      let minutos = ahora.getMinutes() <= 30 ? 30 : 0;
      if (minutos === 0) horas += 1;

      const minTimeHoy = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
      horaPicker.set("minTime", minTimeHoy);

      const horaSeleccionada = horaPicker.selectedDates[0];
      if (horaSeleccionada) {
        const horaComoMinutos = horaSeleccionada.getHours() * 60 + horaSeleccionada.getMinutes();
        const minTimeComoMinutos = horas * 60 + minutos;
        if (horaComoMinutos < minTimeComoMinutos) {
          horaPicker.clear();
        }
      }
    } else {
      horaPicker.set("minTime", HORA_APERTURA);
    }
  }
});