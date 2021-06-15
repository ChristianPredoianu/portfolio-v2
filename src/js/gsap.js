import { gsap } from 'gsap';

const tl = gsap.timeline({ defaults: { duration: 1 } });

const hasAnimationPlayed = sessionStorage.getItem('hasAnimationPlayed');

tl.from('.animated', {
  y: -50,

  stagger: 0.6,
  opacity: 0,
  onComplete: animationEnded,
});

tl.to('.icons__icon', {
  x: 'random(-20, 20)', //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
  y: 'random(-20, 10)',
  duration: 4,
  ease: 'ease',
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

  cta.addEventListener('mouseenter', () => hover.play());
  cta.addEventListener('mouseleave', () => hover.reverse());
}

function animationEnded() {
  hoverOnCta();
  sessionStorage.setItem('hasAnimationPlayed', true);
}
