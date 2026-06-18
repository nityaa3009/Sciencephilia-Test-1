/* =============================================
   SCIENCEPHILIA — shared.js
   ============================================= */

// ── Hamburger ─────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// ── Navbar scroll shadow ──────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
}

// ── Scroll reveal ─────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = Array.from(entry.target.parentElement.children);
      const idx = siblings.filter(s => s.classList.contains('reveal')).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('in'), idx * 80);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));
}

// ── Smooth scroll for anchor links ───────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    }
  });
});

// ── Set active nav link by page ───────────────
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ── Contact form handler ───────────────────────
    
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxDrV48tOtl3YgDbxyCpSxi79taDVNPjzyuiLZWNkv-qjJkhs85dG7CG58PtXt9f8z1/exec'; // Replace with your Web App URL
        const form = document.forms['google-sheet'];

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form),
                mode: 'no-cors', // Add this to avoid CORS errors
            })
                .then(() => {
                    alert('Thanks for Contacting us! We will get back to you soon.');
                    form .reset();
                })
                .catch((error) => {
                    alert('Error!', error.message);
                });
        });
      
//     fetch(scriptURL, { method: 'POST', body: new FormData(this) })
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message));
//     const btn     = this.querySelector('.btn-full');
//     const success = document.getElementById('formSuccess');
//     btn.textContent = 'Sending…';
//     btn.disabled = true;
//     setTimeout(() => {
//       btn.textContent = 'Send Message';
//       btn.disabled = false;
//       if (success) { success.style.display = 'block'; setTimeout(() => success.style.display='none', 5000); }
//       this.reset();
//     }, 1200);
//   });
// }
