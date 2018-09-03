document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const signupButton = document.querySelector('.nav__signup');
  const nav = document.querySelector('.nav');
  const navTogglers = document.querySelectorAll('.hamburger, .nav__menu__fill');

  // OnLoad

  // Event Listeners
  signupButton
    .addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('nav__signup--active')
    });
});


