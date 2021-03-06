import nav from '../nav';
import { gsap } from 'gsap';
import {
  hoverOnSocialIcons,
  hoverAnimationPlay,
  hoverAnimationReverse,
} from '../socialIconsAnimation';
import * as icons from '../icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

library.add(icons);

dom.watch();

import '@fortawesome/fontawesome-free/css/fontawesome.css';

const tl = gsap.timeline({ defaults: { duration: 1 } });

const hasAnimationPlayed = sessionStorage.getItem('isHeroAnimated'),
  isIconsRevealed = sessionStorage.getItem('isIconsRevealed'),
  socialIcons = document.querySelectorAll('.social-icons__icon');

if (!hasAnimationPlayed) {
  tl.add('start').from('.animated', {
    y: -50,
    stagger: 0.6,
    autoAlpha: 0,
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
  tl.to(
    '.container-right__icon',
    {
      duration: 2,
      ease: 'none',
      stagger: 0.2,
      autoAlpha: 1,
      opacity: 1,
      onComplete: () => {
        sessionStorage.setItem('isIconsRevealed', true);
      },
    },
    'start'
  );
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
    scale: 1.01,
    duration: 0.1,
  });

  hoverAnimationPlay(cta, hover);
  hoverAnimationReverse(cta, hover);
}

function animationEnded() {
  hoverOnCta();
  hoverOnSocialIcons(socialIcons);
  const animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach((animatedElement) => {
    animatedElement.style.visibility = 'visible';
  });
}
