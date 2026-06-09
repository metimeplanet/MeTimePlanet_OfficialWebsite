/* ============================================
   MAIN JS — Me-Time Planet
   Interactions, scroll effects, mobile nav
============================================ */

// ─── Sticky Nav Shadow ───────────────────────
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ─── Mobile Nav Toggle ───────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const toggle = document.querySelector('.nav-toggle');
  const isOpen = nav.classList.toggle('open');

  // Animate hamburger to X
  const spans = toggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
}

// Close mobile nav on outside click
document.addEventListener('click', (e) => {
  const nav    = document.getElementById('mobile-nav');
  const header = document.getElementById('site-header');
  if (nav.classList.contains('open') && !header.contains(e.target)) {
    toggleMobileNav();
  }
});

// ─── Scroll-triggered Fade-In ────────────────
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and sections after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.feature-card, .journal-card, .workshops-banner__text, .workshops-banner__img, .community'
  );

  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.7s ease ${i * 0.08}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`;
    observer.observe(el);
  });
});

// CSS class for when element becomes visible
const style = document.createElement('style');
style.textContent = `
  .is-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
