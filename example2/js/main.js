document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const body                = document.querySelector('body');
  const nav                 = document.querySelector('.nav');
  const navTogglers         = document.querySelectorAll('.hamburger, .nav__menu__fill');
  const navLinks            = nav.querySelectorAll('.nav__link');
  const pageSections        = document.querySelectorAll('.page__header, .page__header__img, .main__guide, .contact__section');
  const pageSectionsOffsets = [...pageSections].map(sec => sec.offsetTop);

  // OnLoad
  activeMenuSwitcher();

  // Event Listeners
  document.onscroll = activeMenuSwitcher;

  navTogglers.forEach(toggler => toggler
    .addEventListener('click', toggleNav));

  navLinks.forEach((link, linkIndex) => link
    .addEventListener('click', () => {
      isNavOpen() && toggleNav();
      smoothScroll(pageSectionsOffsets[linkIndex]);
  }));

  document.querySelector('.page__header__btn')
    .addEventListener('click', () => smoothScroll(pageSectionsOffsets[2]));

  // Functions
  const isNavOpen = () => nav.classList.contains('nav--open');

  function toggleNav() {
    body.style.overflow = nav.classList.contains('nav--open')
      ? 'visible'
      : 'hidden';

    nav.classList.toggle('nav--open');
  }

  function smoothScroll(top, behavior = 'smooth') {
    window.scrollTo({ top: top + 2, behavior });
  }

  function activeMenuSwitcher() {
    const currPos = window.pageYOffset;

    pageSectionsOffsets.forEach((secOffset, secIndex) => {
      if (currPos >= secOffset) {
        navLinks.forEach((link, linkIndex) => {
          secIndex === linkIndex
            ? link.classList.add('nav__link--active')
            : link.classList.remove('nav__link--active');
        });
      }
    });
  }
});
