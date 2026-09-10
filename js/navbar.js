async function loadNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  // Detecta si la página actual está en la carpeta /html/ o en la raíz
  const isInSubfolder = window.location.pathname.includes('/html/');
  const navbarPath = isInSubfolder ? 'navbar.html' : 'html/navbar.html';

  try {
    const response = await fetch(navbarPath);
    if (!response.ok) throw new Error('No se pudo cargar el navbar');
    
    const html = await response.text();
    container.innerHTML = html;

    // Corrige los enlaces y rutas de imágenes según desde dónde se cargó
    adjustNavbarPaths(container, isInSubfolder);
  } catch (error) {
    console.error('Error:', error);
  }
}

function adjustNavbarPaths(container, isInSubfolder) {
  const links = container.querySelectorAll('a');
  const imgs = container.querySelectorAll('img');

  links.forEach(a => {
    let href = a.getAttribute('href');
    if (!href) return;
    if (!isInSubfolder && href.startsWith('../')) {
      a.setAttribute('href', href.replace('../', ''));
    }
  });

  imgs.forEach(img => {
    let src = img.getAttribute('src');
    if (!src) return;
    if (!isInSubfolder && src.startsWith('../')) {
      img.setAttribute('src', src.replace('../', ''));
    }
  });
}

loadNavbar();