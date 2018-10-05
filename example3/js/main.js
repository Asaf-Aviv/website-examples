document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const body          = document.querySelector('body');
  const signupButton  = document.querySelector('.nav__signup');
  const menuContainer = document.querySelector('.menu__container');
  const navTogglers   = document.querySelectorAll('.nav--toggler, .nav__menu__fill');

  // Event Listeners
  navTogglers.forEach(toggler => toggler
    .addEventListener('click', toggleNav));

  signupButton.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('nav__signup--active');
  });

  // Functions
  function toggleNav() {
    body.style.overflow = menuContainer.classList.contains('menu__container--open') ?
      'visible' : 'hidden';

    menuContainer.classList.toggle('menu__container--open');
  }
});


