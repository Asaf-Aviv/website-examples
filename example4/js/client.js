document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const navMenu = document.querySelector('.nav__menu');

  // Event Listeners
  document.querySelector('.nav__toggler')
    .addEventListener('click', () => navMenu.classList.toggle('nav__menu--open'));
});
