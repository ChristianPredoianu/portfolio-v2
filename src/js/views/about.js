import nav from '../nav';
import Typed from 'typed.js';
import { aboutHeadingOptions } from '../typedOptions';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import * as icons from '../icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

library.add(icons);

dom.watch();
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const isTypedAbout = sessionStorage.getItem('isTypedAbout');

//If heading is not typed, type the heading. Else just show the heading
if (!isTypedAbout) {
  const aboutHeadingTyped = new Typed('.about-typed', aboutHeadingOptions);
} else {
  document.querySelector('.about-typed').innerText = 'About Me';
}

gsap.registerPlugin(CSSRulePlugin);
const imgBefore = CSSRulePlugin.getRule('.img-container::before'),
  imgAfter = CSSRulePlugin.getRule('.img-container::after');

gsap.to(imgBefore, {
  duration: 3,
  cssRule: {
    y: 0,
    x: -10,
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
