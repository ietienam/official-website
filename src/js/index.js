import '../sass/style.scss';

const overlay = document.querySelector('.overlay');
const overlayLinks = document.querySelectorAll('.overlay a');
const closeBtn = document.querySelector('.closeBtn');
const mobileMenu = document.querySelector('.mobile_nav');
const onLoad = document.querySelector('.onLoad');
const onLoadText = document.querySelector('.onLoad h1');

mobileMenu.addEventListener('click', () => {
  overlay.style.width = '100%'; // set width to draw out overlay
  // waith half a second after overlay comes out and display contents
  setTimeout(() => {
    overlayLinks.forEach(link => {
      link.style.visibility = 'visible';
    });
  }, 500);
});

closeBtn.addEventListener('click', () => {
  // hide overlay content then close overlay
  overlayLinks.forEach(link => {
    link.style.visibility = 'hidden';
  });
  overlay.style.width = '0';
});

if (window.performance.navigation.type === 1 || document.title.startsWith('I')) {// checks if the page was refreshed
  window.addEventListener('DOMContentLoaded', () => {
    onLoad.style.visibility = 'visible'; //make load page appear
    //then display text after 3ms
    setTimeout(() => {
      onLoadText.style.opacity = '.9';
    }, 300);
    // wait 1700s after page loads then remove text content from onload hover page
    setTimeout(() => {
      onLoadText.style.opacity = '0';
    }, 1700);
    // wait 2 seconds after page loads then remove onload hover page
    setTimeout(() => {
      onLoad.style.width = '0';
    }, 2000);
  });
} else {
  window.addEventListener('DOMContentLoaded', () => {
    onLoad.style.visibility = 'visible'; //make load page appear

    // wait less than half a second after page loads then remove onload hover page
    setTimeout(() => {
      onLoad.style.width = '0';
    }, 400);
  });
};

