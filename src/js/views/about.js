import nav from '../nav';
import Typed from 'typed.js';
import { aboutHeadingOptions } from '../typedOptions';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const isTypedAbout = sessionStorage.getItem('isTypedAbout');

if (!isTypedAbout) {
  const aboutHeadingTyped = new Typed('.about-typed', aboutHeadingOptions);
} else {
  document.querySelector('.about-typed').innerText = 'About Me';
}

const imgBefore = CSSRulePlugin.getRule('.img-container::before');
const imgAfter = CSSRulePlugin.getRule('.img-container::after');

gsap.to(imgBefore, {
  duration: 3,
  cssRule: {
    y: -10,
    x: 10,
    opacity: 0.9,
  },
  yoyo: true,
  repeat: -1,
});

gsap.to(imgAfter, {
  duration: 3,
  cssRule: {
    x: -10,
    y: 10,
    opacity: 0.4,
  },
  yoyo: true,
  repeat: -1,
});
