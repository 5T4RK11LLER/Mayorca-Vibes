async function loadFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  const response = await fetch('footer.html');
  if (!response.ok) {
    console.error('No se pudo cargar el footer');
    return;
  }

  const html = await response.text();
  container.innerHTML = html;
}

loadFooter();