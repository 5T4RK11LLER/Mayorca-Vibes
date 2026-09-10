function mostrarAviso(mensaje, tipo = "danger") {
  const toastEl = document.getElementById("toastAviso");
  const toastBody = document.getElementById("toastAvisoBody");

  toastEl.classList.remove("text-bg-danger", "text-bg-success", "text-bg-warning");
  toastEl.classList.add(`text-bg-${tipo}`);

  toastBody.textContent = mensaje;

  const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
  toast.show();
}