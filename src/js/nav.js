import darkmode from './darkmode';

document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
});
