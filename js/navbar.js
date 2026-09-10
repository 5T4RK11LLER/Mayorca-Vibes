async function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  // Resuelve navbar.html relativo a la ubicación real de este script (js/)
  const navbarUrl = new URL('../html/navbar.html', document.currentScript.src).href;

  const response = await fetch(navbarUrl);
  if (!response.ok) {
    console.error('No se pudo cargar el navbar');
    return;
  }

  const html = await response.text();
  container.innerHTML = html;
}

loadNavbar();