document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const body        = document.querySelector('body');
  const nav         = document.querySelector('.nav');
  const navSignup   = document.querySelector('.nav__signup');
  const navTogglers = document.querySelectorAll('.hamburger, .nav__menu__fill');
  const mainCards   = document.querySelectorAll('.card');

  // Event Listeners
  navTogglers.forEach(toggler => toggler
    .addEventListener('click', toggleNav));

  document.querySelector('.nav__menu .nav__item:last-of-type')
    .addEventListener('click', toggleSignup);

  try {
    mainCards.forEach((card, i) => observer((i + 1) * 100).observe(card));
  } catch(e) {
    mainCards.forEach(card => card.style.opacity = '1');
  }

  // Functions
  function observer(ms) {
    return new IntersectionObserver(function(entries) {
      const threshold = this.thresholds[0];

      if (entries[0].intersectionRatio >= threshold) {
        entries[0].target.classList.add('slide-in', `delay-${ms}`);
        this.unobserve(entry.target);
      }
    }, { threshold: 0.4 });
  }

  function toggleNav() {
    body.style.overflow = nav.classList.contains('nav--open') ?
    'visible' : 'hidden';

    nav.classList.toggle('nav--open');
  }

  function toggleSignup(e) {
    const classes = e.target.classList;

    if (classes.contains('btn--bordered-base') || classes.contains('nav--toggler')) {
      const navDisplay = navSignup.style.display;
      navSignup.style.display = !navDisplay || navDisplay === 'none' ? 'block' :'none';
    }
  }
});
