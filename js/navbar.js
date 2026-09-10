async function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  // Guardar referencia ANTES del await
  const scriptSrc = document.currentScript ? document.currentScript.src : window.location.href;
  const navbarUrl = new URL('../html/navbar.html', scriptSrc).href;

  try {
    const response = await fetch(navbarUrl);
    if (!response.ok) throw new Error('Error en HTTP');
    const html = await response.text();
    
    // Extraer solo el contenido de <body> si el template tiene estructura HTML completa
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const content = doc.querySelector('body') ? doc.querySelector('body').innerHTML : html;
    
    container.innerHTML = content;
  } catch (error) {
    console.error('No se pudo cargar el navbar:', error);
  }
}

loadNavbar();