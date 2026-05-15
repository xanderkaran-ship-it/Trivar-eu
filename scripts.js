/* TRIVAR — shared interactions */

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Mouse-follow glow on glass cards
document.querySelectorAll('.glass-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', mx + '%');
    card.style.setProperty('--my', my + '%');
  });
});

// Mobile burger menu
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a:not(.nav-cta)').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}
