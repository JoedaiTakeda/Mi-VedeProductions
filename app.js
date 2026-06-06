const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// 2. Close the menu when any link inside the navbar__menu is clicked
const navMenu = document.querySelector('.navbar__menu');

const closeMobileMenu = () => {
    // We check if the menu is open (on mobile) before removing the class
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
};

navMenu.addEventListener('click', closeMobileMenu);

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target); // animate once only
    }
  });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll(
  '.navbar__container, .main__container, .solutions__content, .projects__card, .biography__card, .biography__content, .solutions h1, .projects h1, .biography h1'
).forEach(el => observer.observe(el));