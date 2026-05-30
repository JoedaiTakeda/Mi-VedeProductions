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
