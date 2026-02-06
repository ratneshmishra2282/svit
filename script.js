// Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Scroll-based micro animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.hero-content, .cta').forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      el.classList.add('animate');
    }
  });
});
