(() => {
  const jump = document.querySelector('#jump');
  const pos = document.querySelector('#pos');
  const bar = document.querySelector('#bar');
  const book = document.querySelector('.book');
  const sections = [...document.querySelectorAll('.chapter')];
  const total = String(sections.length).padStart(2, '0');

  jump.onchange = () => { location.hash = jump.value; };

  let queued = false;

  function update() {
    queued = false;

    // Which chapter is under the sticky bar?
    let n = 0;
    sections.forEach((s, i) => {
      if (s.getBoundingClientRect().top <= 110) n = i;
    });
    jump.value = sections[n].id;
    pos.textContent = String(n + 1).padStart(2, '0') + ' / ' + total;

    // How far through the story is the reader?
    const r = book.getBoundingClientRect();
    const span = r.height - innerHeight;
    const done = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    bar.style.width = (done * 100).toFixed(1) + '%';
  }

  function schedule() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  update();
})();
