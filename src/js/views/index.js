import nav from '../nav';
import { gsap } from 'gsap';

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const tl = gsap.timeline({ defaults: { duration: 1 } });

const hasAnimationPlayed = sessionStorage.getItem('hasAnimationPlayed');

if (!hasAnimationPlayed) {
  tl.from('.animated', {
    y: -50,
    stagger: 0.6,
    opacity: 0,
    onComplete: () => {
      sessionStorage.setItem('hasAnimationPlayed', true);
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
}).to('.container-right__icon', {
  x: 'random(-5, 5)', //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
  y: 'random(-5, 5)',
  duration: 2,
  ease: 'none',
  stagger: 0.2,
  repeat: -1,
  opacity: 1,
  repeatRefresh: true, // gets a new random x and y value on each repeat
});

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

//Hover effect on github - linkedin icons on homepage
function hoverOnSocialIcons() {
  const socialIcons = document.querySelectorAll('.social-icons__icon');
  socialIcons.forEach((socialIcon) => {
    const hover = gsap.to(socialIcon, {
      scale: 1.2,
      duration: 0.2,
      paused: true,
    });
    hoverAnimationPlay(socialIcon, hover);
    hoverAnimationReverse(socialIcon, hover);
  });
}

function hoverAnimationPlay(element, animation) {
  element.addEventListener('mouseenter', () => animation.play());
}

function hoverAnimationReverse(element, animation) {
  element.addEventListener('mouseleave', () => animation.reverse());
}

function animationEnded() {
  hoverOnCta();
  hoverOnSocialIcons();
}
