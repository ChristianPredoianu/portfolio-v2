import nav from '../nav';
import Typed from 'typed.js';

import {
  headingProjectsOptions,
  swiperHeadingOneOptions,
  swiperHeadingTwoOptions,
} from '../typedOptions';

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const isTypedProjects = sessionStorage.getItem('isTypedProjects');

// If headings are not typed type them out
if (!isTypedProjects) {
  const headingProjectsTyped = new Typed('.typed', headingProjectsOptions);
  const swiperHeadingOneTyped = new Typed(
    '.typed-swiper-heading-one',
    swiperHeadingOneOptions
  );
  const swiperHeadingTwoTyped = new Typed(
    '.typed-swiper-heading-two',
    swiperHeadingTwoOptions
  );
} else {
  document.querySelector('.typed').innerText = 'Projects';
  document.querySelector('.typed-swiper-heading-one').innerText =
    'JavaScript Projects';
  document.querySelector('.typed-swiper-heading-two').innerText =
    'Html/Css Projects';
}
