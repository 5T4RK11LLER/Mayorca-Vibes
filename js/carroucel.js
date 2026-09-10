 const track = document.getElementById('track');
  const items = track.children;
  let index = 0;

  function visibleCount(){
    if(window.innerWidth <= 560) return 1;
    if(window.innerWidth <= 900) return 2;
    return 4;
  }

  function update(){
    const perItem = items[0].getBoundingClientRect().width;
    const gap = 24;
    track.style.transform = `translateX(-${index * (perItem + gap)}px)`;
  }

  document.getElementById('btnNext').addEventListener('click', () => {
    const maxIndex = items.length - visibleCount();
    index = Math.min(index + 1, maxIndex);
    update();
  });

  document.getElementById('btnPrev').addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    update();
  });

  window.addEventListener('resize', () => {
    index = 0;
    update();
  });

  update();