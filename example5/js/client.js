document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const cardsMenu = document.querySelectorAll('.card__menu');
  const bulletMenu = document.querySelector('.bullet__menu');
  const bullets = document.querySelectorAll('.bullet');
  const stories = document.querySelectorAll('.story');

  cardsMenu.forEach(menu => {
    menu.addEventListener('click', (e) => {
      if ([...e.target.classList].some(c => c.startsWith('fa-'))) {
        e.target.classList.toggle('far');
        e.target.classList.toggle('fas');
      }
    })
  })

  // Event Listeners
  bulletMenu.addEventListener('click', throttle((e) => {
    const pageNumber = e.target.getAttribute('data-page');
    if (pageNumber) {
      clearBullets();
      e.target.children[0].classList.add('bullet--active');
      slideStories(pageNumber);
    }
  }, 250));

  function clearBullets() {
    bullets.forEach(bullet => bullet.classList.remove('bullet--active'));
  }

   function slideStories(pageNumber) {
    stories.forEach(async story => {
      if (story.getAttribute('data-page') != pageNumber) {
        if (story.classList.contains('story--slide-in')) {
          story.classList.remove('story--slide-in');
          story.classList.add('story--slide-out');
          await delay(250);
          story.classList.remove('story--slide-out')
        }
        return;
      }
      setTimeout(() => story.classList.add('story--slide-in'), 250);
    });
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }
});


