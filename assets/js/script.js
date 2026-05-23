const bookingModal = document.querySelector('[data-booking-modal]');
const mobile = document.querySelector('[data-mobile-menu]');
const toggle = document.querySelector('[data-mobile-toggle]');

function closeBooking() {
  bookingModal?.classList.remove('open');
  bookingModal?.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-booking-open]').forEach((btn) => {
  btn.addEventListener('click', () => {
    bookingModal?.classList.add('open');
    bookingModal?.setAttribute('aria-hidden', 'false');
  });
});

document.querySelectorAll('[data-booking-close]').forEach((btn) => {
  btn.addEventListener('click', closeBooking);
});

bookingModal?.addEventListener('click', (event) => {
  if (event.target === bookingModal) closeBooking();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeBooking();
});

toggle?.addEventListener('click', () => {
  const open = mobile.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

const video = document.querySelector('[data-hero-video]');
const videoBtn = document.querySelector('[data-video-toggle]');
videoBtn?.addEventListener('click', () => {
  if (!video) return;
  if (video.paused) {
    video.play();
    videoBtn.textContent = 'Video pausieren';
  } else {
    video.pause();
    videoBtn.textContent = 'Video abspielen';
  }
});

const cards = [...document.querySelectorAll('[data-service-card]')];
const search = document.querySelector('[data-service-search]');
let active = 'all';

function applyFilters() {
  const query = (search?.value || '').toLowerCase();
  cards.forEach((card) => {
    const category = card.dataset.category;
    const text = card.dataset.title.toLowerCase();
    const visible = (active === 'all' || category === active) && text.includes(query);
    card.style.display = visible ? 'block' : 'none';
  });
}

document.querySelectorAll('[data-filter]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
    btn.classList.add('active');
    active = btn.dataset.filter;
    applyFilters();
  });
});

search?.addEventListener('input', applyFilters);

const form = document.querySelector('[data-contact-form]');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('[data-form-status]');
  let ok = true;

  form.querySelectorAll('[required]').forEach((el) => {
    const valid = el.type === 'checkbox' ? el.checked : el.checkValidity();
    el.classList.toggle('invalid', !valid);
    if (!valid) ok = false;
  });

  if (!ok) {
    status.textContent = 'Bitte füllen Sie die markierten Felder aus.';
    status.style.color = '#b42318';
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent('Kontaktanfrage über notar-martin.de');
  const body = encodeURIComponent([
    `Name: ${data.get('name')}`,
    `E-Mail: ${data.get('email')}`,
    `Telefon: ${data.get('phone') || ''}`,
    '',
    'Anliegen:',
    data.get('message'),
  ].join('\n'));

  window.location.href = `mailto:kanzlei@notar-martin.de?subject=${subject}&body=${body}`;
  status.textContent = 'Ihr E-Mail-Programm wird geöffnet.';
  status.style.color = '#003087';
});

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll('.card,.service-card,.split,.cta,.contact-card,.contact-form').forEach((el) => {
  el.classList.add('fade-in');
  observer?.observe(el);
  if (!observer) el.classList.add('visible');
});

document.querySelectorAll('[data-jump-service]').forEach((button) => {
  button.addEventListener('click', () => {
    const label = button.dataset.jumpService.toLowerCase();
    const match = [...document.querySelectorAll('[data-service-card]')]
      .find((card) => card.dataset.title.toLowerCase().includes(label));
    match?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    match?.classList.add('pulse-focus');
    window.setTimeout(() => match?.classList.remove('pulse-focus'), 900);
  });
});
