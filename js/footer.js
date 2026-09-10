async function loadFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  // Resuelve footer.html relativo a la ubicación real de este script (js/)
  const footerUrl = new URL('../html/footer.html', document.currentScript.src).href;

  const response = await fetch(footerUrl);
  if (!response.ok) {
    console.error('No se pudo cargar el footer');
    return;
  }

  const html = await response.text();
  container.innerHTML = html;
}

loadFooter();