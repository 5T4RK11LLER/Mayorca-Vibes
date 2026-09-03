async function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const response = await fetch('navbar.html');
  if (!response.ok) {
    console.error('No se pudo cargar el navbar');
    return;
  }

  const html = await response.text();
  container.innerHTML = html;
}

loadNavbar();