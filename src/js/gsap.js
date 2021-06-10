import { gsap } from 'gsap';
import Typed from 'typed.js';

const tl = gsap.timeline();

function initPortfolio() {
  tl.from('.introduction', {
    rotate: 50,
    x: 700,
    y: 50,
    duration: 3,
    scale: 0,
    opacity: 0,
    ease: 'back',
    onComplete: introductionLeave,
  });
}

function introductionLeave() {
  tl.to('.introduction', {
    rotate: -100,
    x: 700,
    y: 50,
    stagger: 0,
    duration: 2,
    stagger: 0,
    scale: 0,
    opacity: 0,
    onComplete: showHeadingPrimary,
  });
}

function showHeadingPrimary() {
  document.querySelector('.welcome-section__heading-primary').style.visibility =
    'visible';
  tl.from('.welcome-section__heading-primary', {
    x: 0,
    y: 0,
    stagger: 0,
    duration: 2,
    scale: 2,
    ease: 'back',
    opacity: 0,
    onComplete: showRemainingElements,
  });
}

//Show the remaining element in welcome section (index.html)
function showRemainingElements() {
  document.querySelector('.animated').style.visibility = 'visible';
  tl.from('.animated', {
    x: 0,
    y: 0,
    ease: 'back',
    opacity: 0,
    onComplete: initIcons,
  });
}

function initIcons() {
  tl.to('.icons__icon', {
    x: 'random(-20, 20)', //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
    y: 'random(-20, 10)',
    duration: 4,
    ease: 'back',
    repeat: -1,
    opacity: 1,
    repeatRefresh: true, // gets a new random x and y value on each repeat
  });
}

initPortfolio();
