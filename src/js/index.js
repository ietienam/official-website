import '../sass/style.scss';

const overlay = document.querySelector('.overlay');
const overlayLinks = document.querySelectorAll('.overlay a');
const closeBtn = document.querySelector('.closeBtn');
const mobileMenu = document.querySelector('.mobile_nav');

mobileMenu.addEventListener('click', () => {
  overlay.style.width = '100%';
  setTimeout(() => {
    overlayLinks.forEach(link => {
      link.style.visibility = 'visible';
    });
  }, 500);
});

closeBtn.addEventListener('click', () => {
  overlayLinks.forEach(link => {
    link.style.visibility = 'hidden';
  });
  overlay.style.width = '0';
});
