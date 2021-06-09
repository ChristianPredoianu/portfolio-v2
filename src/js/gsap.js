import { gsap } from 'gsap';
import Typed from 'typed.js';

const tl = gsap.timeline();

function initPortfolio() {
  tl.from('.introduction', {
    rotate: 50,
    x: 600,
    y: 100,
    duration: 4,
    stagger: 1,
    scale: 0,
    opacity: 0,
    ease: 'circ',
    onComplete: introductionLeave,
  });
}

function introductionLeave() {
  tl.to('.introduction', {
    rotate: -100,
    x: 600,
    y: 50,
    duration: 4,
    stagger: 1,
    scale: 0,
    opacity: 0,
    ease: 'back',
  });
}

initPortfolio();
