document.querySelector('.year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}
