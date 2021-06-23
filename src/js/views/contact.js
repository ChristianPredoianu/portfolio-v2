import nav from '../nav';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

import { hoverOnSocialIcons } from '../socialIconsAnimation';

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const tl = gsap.timeline({ defaults: { duration: 1 } });
const borderBefore = CSSRulePlugin.getRule('.section-contact::before');
const socialIconsContact = document.querySelectorAll('.contact-info__icon');

tl.add('start').to(
  borderBefore,
  {
    duration: 0.8,
    cssRule: {
      width: '30%',
    },
  },
  'start'
);

tl.from(
  '.contact-info__icon',
  {
    opacity: 0,
    stagger: 0.3,
    x: -10,
  },
  'start'
);

tl.from(
  '.contact-info-img',
  {
    duration: 2,
    y: -40,
    opacity: 0,
    onComplete: animationEnded,
  },
  'start'
);

function animationEnded() {
  hoverOnSocialIcons(socialIconsContact);
}
