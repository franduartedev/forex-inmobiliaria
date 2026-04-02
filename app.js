const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menu-links');

hamburger.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});