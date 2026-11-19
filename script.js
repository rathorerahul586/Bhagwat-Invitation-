const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));

const formUrl = window.EVENT_CONFIG?.GOOGLE_FORM_URL?.trim();
const rsvpContent = document.getElementById('rsvp-content');
if (formUrl && rsvpContent) {
  const frame = document.createElement('iframe');
  frame.className = 'rsvp-frame';
  frame.title = 'श्रीमद्भागवत कथा आगमन सूचना फॉर्म';
  frame.src = formUrl.includes('?') ? `${formUrl}&embedded=true` : `${formUrl}?embedded=true`;
  frame.loading = 'lazy';
  frame.setAttribute('allow', 'camera; microphone; geolocation');
  rsvpContent.replaceChildren(frame);
}
