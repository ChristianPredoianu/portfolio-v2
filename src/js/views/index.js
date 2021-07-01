import nav from '../nav';
import { gsap } from 'gsap';
import {
  hoverOnSocialIcons,
  hoverAnimationPlay,
  hoverAnimationReverse,
} from '../socialIconsAnimation';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedinIn,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faVuejs,
  faSass,
  faFigma,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import {
  faTerminal,
  faTools,
  faMobile,
  faCode,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithub,
  faLinkedinIn,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faVuejs,
  faSass,
  faFigma,
  faBootstrap,
  faTerminal,
  faTools,
  faMobile,
  faCode,
  faWind
);

dom.watch();

import '@fortawesome/fontawesome-free/css/fontawesome.css';

const tl = gsap.timeline({ defaults: { duration: 1 } });

const hasAnimationPlayed = sessionStorage.getItem('isHeroAnimated');
const isIconsRevealed = sessionStorage.getItem('isIconsRevealed');
const socialIcons = document.querySelectorAll('.social-icons__icon');

if (!hasAnimationPlayed) {
  tl.from('.animated', {
    y: -50,
    stagger: 0.6,
    opacity: 0,
    onComplete: () => {
      sessionStorage.setItem('isHeroAnimated', true);
      animationEnded();
    },
  });
} else {
  animationEnded();
}

tl.to('.icons__icon', {
  x: 'random(-20, 20)', //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
  y: 'random(-20, 10)',
  duration: 2,
  ease: 'none',
  repeat: -1,
  opacity: 1,
  repeatRefresh: true, // gets a new random x and y value on each repeat
});

if (!isIconsRevealed) {
  tl.to('.container-right__icon', {
    duration: 2,
    ease: 'none',
    stagger: 0.2,
    opacity: 1,
    onComplete: () => {
      sessionStorage.setItem('isIconsRevealed', true);
    },
  });
} else {
  const icons = document.querySelectorAll('.container-right__icon');
  icons.forEach((icon) => {
    icon.style.opacity = 1;
  });
}

//Hover effect on CTA (Projects-btn)
function hoverOnCta() {
  const cta = document.querySelector('.welcome-section__cta');
  const hover = gsap.to('.welcome-section__cta', {
    y: -3,
    scale: 1.01,
    duration: 0.2,
    paused: true,
  });

  hoverAnimationPlay(cta, hover);
  hoverAnimationReverse(cta, hover);
}

function animationEnded() {
  hoverOnCta();
  hoverOnSocialIcons(socialIcons);
}
