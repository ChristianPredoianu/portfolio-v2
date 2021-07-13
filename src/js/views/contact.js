import nav from '../nav';
import Typed from 'typed.js';
import gsap from 'gsap';
import { contactHeadingOptions } from '../typedOptions';
import { hoverOnSocialIcons } from '../socialIconsAnimation';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faGithub, faLinkedinIn, faEnvelope);
dom.watch();

const isTypedContact = sessionStorage.getItem('isTypedContact');

//////////////////////////Typed.js//////////////////////////
if (!isTypedContact) {
  const headingTyped = new Typed('.contact-typed', contactHeadingOptions);
} else {
  document.querySelector('.contact-typed').innerText = 'Contact Me';
}
///////////////////////////////////////////////////////////

//////////////////////GSAP/////////////////////////////////

const tl = gsap.timeline({ defaults: { duration: 1 } });

const socialIconsContact = document.querySelectorAll('.contact-info__icon');

tl.add('start').from(
  '.contact-info__icon',
  {
    opacity: 0,
    stagger: 0.3,
    x: -10,
    autoAlpha: 0,
  },
  'start'
);

tl.from(
  '.contact-info-img',
  {
    y: -40,
    autoAlpha: 0,
    onComplete: animationEnded,
  },
  'start'
);

function animationEnded() {
  hoverOnSocialIcons(socialIconsContact);
}
//////////////////////////////////
