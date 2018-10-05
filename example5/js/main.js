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

  // Functions
  function slideInStory(pageNumber) {
    document.querySelectorAll(`.story[data-page="${pageNumber}"]`)
      .forEach(story => story.classList.add('story--slide-in'));
  }

  async function slideOutStory(pageNumber) {
    return new Promise(resolve => {
      document.querySelectorAll(`.story.story--slide-in:not([data-page="${pageNumber}"])`)
        .forEach(async story => {
          classList(story)
            .remove('story--slide-in')
            .add('story--slide-out');

          await delay(250);

          classList(story).remove('story--slide-out');
          resolve();
        });
      });
  }

  async function slideStories(pageNumber) {
    await slideOutStory(pageNumber);
    slideInStory(pageNumber);
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

  function classList(ele) {
    const classes = ele.classList;
    return {
        toggle: function(c) { classes.toggle(c); return this; },
        add:    function(c) { classes.add   (c); return this; },
        remove: function(c) { classes.remove(c); return this; }
    };
  }
});


