const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const compare = document.querySelector('.compare-range');
const before = document.querySelector('.before');
const line = document.querySelector('.compare-line');
compare.addEventListener('input', event => {
  const value = event.target.value;
  before.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  line.style.left = `${value}%`;
});

const serviceSelect = document.querySelector('select');
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  serviceSelect.value = button.dataset.service;
  document.querySelector('#marcacao').scrollIntoView({ behavior: 'smooth' });
}));
document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = event.currentTarget.querySelector('input').value.trim().split(' ')[0];
  event.currentTarget.querySelector('.form-message').textContent = `Obrigada, ${name}! Recebemos o seu pedido e entraremos em contacto em breve.`;
  event.currentTarget.reset();
});
document.querySelector('#year').textContent = new Date().getFullYear();
