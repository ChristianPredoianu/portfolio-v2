const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  changeHamburgerColor();
});

function changeHamburgerColor() {
  const hamburgerLines = document.querySelectorAll('.hamburger__line');
  hamburgerLines.forEach((hamburgerLine) => {
    if (navLinks.classList.contains('open')) {
      hamburgerLine.style.background = 'white';
    } else {
      hamburgerLine.style.background = '#0b16a8';
    }
  });
}
