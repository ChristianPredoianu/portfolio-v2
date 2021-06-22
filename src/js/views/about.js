import nav from '../nav';

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

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
