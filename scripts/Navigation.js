const menu = document.querySelector('.mobile');
const navigationItems = document.querySelector('.hero__nav-items');

menu.addEventListener('click', () => {
  console.log('clicked');
  navigationItems.classList.toggle('nav__active');
})
