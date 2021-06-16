import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, EffectCube } from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectCube]);

const swiper = new Swiper('.mySwiper', {
  effect: 'cube',
  speed: 1500,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
