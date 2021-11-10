const darkmodeToggler = document.querySelector('.theme-switch__input'),
  body = document.querySelector('body');
let darkmode = localStorage.getItem('darkmode');

window.addEventListener('load', () => {
  darkmode = localStorage.getItem('darkmode');
  if (darkmode === 'true') {
    darkmodeToggler.checked = true;
    enableDarkMode();
  } else {
    darkmodeToggler.checked = false;
  }
});

function enableDarkMode() {
  body.classList.add('darkmode');
}

function disableDarkMode() {
  body.classList.remove('darkmode');
}

darkmodeToggler.addEventListener('click', () => {
  darkmodeToggler.checked
    ? localStorage.setItem('darkmode', true)
    : localStorage.setItem('darkmode', false);

  darkmode = localStorage.getItem('darkmode');
  darkmode === 'true' ? enableDarkMode() : disableDarkMode();
});
