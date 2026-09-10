async function loadFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  const isInSubfolder = window.location.pathname.includes('/html/');
  const footerPath = isInSubfolder ? 'footer.html' : 'html/footer.html';

  try {
    const response = await fetch(footerPath);
    if (!response.ok) throw new Error('No se pudo cargar el footer');

    const html = await response.text();
    container.innerHTML = html;

    adjustFooterPaths(container, isInSubfolder);
  } catch (error) {
    console.error('Error:', error);
  }
}

function adjustFooterPaths(container, isInSubfolder) {
  const imgs = container.querySelectorAll('img');
  imgs.forEach(img => {
    let src = img.getAttribute('src');
    if (!src) return;
    if (!isInSubfolder && src.startsWith('../')) {
      img.setAttribute('src', src.replace('../', ''));
    }
  });
}

loadFooter();