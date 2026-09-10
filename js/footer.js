async function loadFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  // Guardar referencia ANTES del await
  const scriptSrc = document.currentScript ? document.currentScript.src : window.location.href;
  const footerUrl = new URL('../html/footer.html', scriptSrc).href;

  try {
    const response = await fetch(footerUrl);
    if (!response.ok) throw new Error('Error en HTTP');
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const content = doc.querySelector('body') ? doc.querySelector('body').innerHTML : html;

    container.innerHTML = content;
  } catch (error) {
    console.error('No se pudo cargar el footer:', error);
  }
}

loadFooter();