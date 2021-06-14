import { gsap } from 'gsap';

const tl = gsap.timeline({ defaults: { duration: 1 } });

const hasAnimationPlayed = sessionStorage.getItem('hasAnimationPlayed');

if (!hasAnimationPlayed) {
  tl.from('.introduction', {
    x: -1500,
    y: 0,
    scale: 0,
    opacity: 0,
    duration: 1.5,
    /* ease: 'back', */
  })
    .to('.introduction', {
      x: 900,
      y: 50,
      scale: 0,
      opacity: 0,
    })
    .from('.animated', {
      y: -50,
      stagger: 0.4,
      opacity: 0,
      onComplete: () => {
        sessionStorage.setItem('hasAnimationPlayed', true);
      },
    });
} else {
  document.querySelector('.introduction').style.display = 'none';
}

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
const cta = document.querySelector('.welcome-section__cta');

const hover = gsap.to('.welcome-section__cta', {
  y: 2,
  scale: 1.01,
  duration: 0.1,
  paused: true,
  ease: 'power1.inOut',
});

cta.addEventListener('mouseenter', () => hover.play());
cta.addEventListener('mouseleave', () => hover.reverse());
