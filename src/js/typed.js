import Typed from 'typed.js';

const headingOptions = {
  strings: ['Projects'],
  typeSpeed: 100,
};

const swiperHeadingOneOptions = {
  strings: ['JavaScript Projects'],
  typeSpeed: 50,
  startDelay: 1000,
};

const swiperHeadingTwoOptions = {
  strings: ['Html/Css Projects'],
  typeSpeed: 50,
  startDelay: 1000,

  //run removeCursor() when typing completes.
  onComplete: removeCursor,
};

const headingTyped = new Typed('.typed', headingOptions);
const swiperHeadingOneTyped = new Typed(
  '.typed-swiper-heading-one',
  swiperHeadingOneOptions
);
const swiperHeadingTwoTyped = new Typed(
  '.typed-swiper-heading-two',
  swiperHeadingTwoOptions
);

//Remove all cursors after 1500ms
function removeCursor() {
  const typedCursors = document.querySelectorAll('.typed-cursor');
  typedCursors.forEach((cursor) => {
    setTimeout(() => {
      cursor.style.display = 'none';
    }, 1500);
  });
}
