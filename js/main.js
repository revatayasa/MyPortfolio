/* ─────────────────────────────────────────────
   main.js  —  Profil Landing Page
   ───────────────────────────────────────────── */

// ── Scroll-reveal animation ──────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


// ── Contact form validation & submit ─────────
const btnSend    = document.getElementById('btn-send');
const formName   = document.getElementById('form-name');
const formEmail  = document.getElementById('form-email');
const formMsg    = document.getElementById('form-message');
const fields     = [formName, formEmail, formMsg];

function setFieldError(field, isError) {
  field.style.borderColor = isError ? '#8a4a40' : '';
}

function resetForm() {
  fields.forEach((f) => {
    f.value = '';
    setFieldError(f, false);
  });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

btnSend.addEventListener('click', () => {
  let valid = true;

  fields.forEach((f) => setFieldError(f, false));

  if (!formName.value.trim()) {
    setFieldError(formName, true);
    valid = false;
  }

  if (!formEmail.value.trim() || !isValidEmail(formEmail.value.trim())) {
    setFieldError(formEmail, true);
    valid = false;
  }

  if (!formMsg.value.trim()) {
    setFieldError(formMsg, true);
    valid = false;
  }

  if (!valid) return;

  // ── Success state ────────────────────────
  btnSend.textContent = 'Terkirim ✓';
  btnSend.style.background = '#4a7a5a';
  btnSend.disabled = true;

  setTimeout(() => {
    btnSend.textContent = 'Kirim Pesan';
    btnSend.style.background = '';
    btnSend.disabled = false;
    resetForm();
  }, 2500);
});


// ── Active nav link on scroll ─────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--gold)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((sec) => navObserver.observe(sec));