// script.js (corrected & defensive)

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// NAV TOGGLE
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('primaryNav');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });
}

// close mobile nav on link click (safe even if no links)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (navList) navList.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active link highlight on scroll (same as your original)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector('.nav__link[href="#' + id + '"]');
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav__link').forEach(a => a.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
}, { root: null, rootMargin: '0px 0px -70% 0px', threshold: .2 });

document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));

// Typed.js init — only if library loaded
if (typeof Typed !== 'undefined') {
  try {
    new Typed("#autoType", {
      strings: [`
        <p>  I would describe myself as curious, hardworking, and adaptable. 
  I love exploring stories and technology with equal passion. My 
  adventurous and problem-solving mindset helps me tackle 
  challenges, while my social involvement and helping nature 
  make me a good team player. I believe these qualities align
  well with a career in IT, where continuous learning, 
  collaboration, and innovation are key.</p>
      `],
      typeSpeed: 25,
      backSpeed: 0,
      smartBackspace: false,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      contentType: 'html'
    });
  } catch (err) {
    console.error('Typed.js initialization failed:', err);
  }
} else {
  console.warn('Typed.js library not found. Make sure typed.js is loaded before script.js.');
}
