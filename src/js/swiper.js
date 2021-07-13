import Swiper from 'swiper';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCube,
  Lazy,
} from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectCube, Lazy]);

const swiper = new Swiper('.mySwiper', {
  effect: 'cube',
  speed: 1500,
  preloadImages: false,
  lazy: true,
  watchSlidesVisibility: true,

  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
