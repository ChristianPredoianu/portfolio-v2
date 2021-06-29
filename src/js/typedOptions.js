export const headingProjectsOptions = {
  strings: ['Projects'],
  typeSpeed: 100,
};

export const swiperHeadingOneOptions = {
  strings: ['JavaScript Projects'],
  typeSpeed: 50,
  startDelay: 1000,
};

export const swiperHeadingTwoOptions = {
  strings: ['Html/Css Projects'],
  typeSpeed: 50,
  startDelay: 1000,

  //run typedEnded() when typing completes.
  onComplete: () => {
    typedEnded('isTypedProjects');
  },
};

export const aboutHeadingOptions = {
  strings: ['About Me'],
  typeSpeed: 100,
  onComplete: () => {
    typedEnded('isTypedAbout');
  },
};

export const contactHeadingOptions = {
  strings: ['Contact Me'],
  typeSpeed: 100,
  onComplete: () => {
    typedEnded('isTypedContact');
  },
};

//Remove all cursors after 1500ms
function removeCursor() {
  const typedCursors = document.querySelectorAll('.typed-cursor');
  typedCursors.forEach((cursor) => {
    setTimeout(() => {
      cursor.style.display = 'none';
    }, 1500);
  });
}

function typedEnded(sessionItem) {
  removeCursor();
  sessionStorage.setItem(sessionItem, true);
}
