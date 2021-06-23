import gsap from 'gsap';

//Hover effect on social icons
export function hoverOnSocialIcons(icons) {
  icons.forEach((socialIcon) => {
    const hover = gsap.to(socialIcon, {
      scale: 1.2,
      duration: 0.2,
      paused: true,
    });
    hoverAnimationPlay(socialIcon, hover);
    hoverAnimationReverse(socialIcon, hover);
  });
}

export function hoverAnimationPlay(element, animation) {
  element.addEventListener('mouseenter', () => animation.play());
}

export function hoverAnimationReverse(element, animation) {
  element.addEventListener('mouseleave', () => animation.reverse());
}
