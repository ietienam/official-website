import '../sass/style.scss';
import myImage from '../assets/images/ini.jpg';
import sasuke from '../assets/images/sasuke.jpg';

const overlay = document.querySelector('.overlay');
const overlayLinks = document.querySelectorAll('.overlay a');
const closeBtn = document.querySelector('.closeBtn');
const mobileMenu = document.querySelector('.mobile_nav');
const onLoad = document.querySelector('.onLoad');
const onLoadText = document.querySelector('.onLoad h1');
const contactLinks = document.querySelectorAll('.contact');
const workLinks = document.querySelectorAll('.work');
const homeLinks = document.querySelectorAll('.home');
const sasukeImg = document.querySelector('.sasuke');

sasukeImg.src = sasuke;
sasukeImg.style.width = '100%';
sasukeImg.style.opacity = '.3';
sasukeImg.style.height = '70%';
sasukeImg.style.overflow = 'hidden';

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

window.addEventListener('load', () => {
  if (document.title.startsWith('C')) {
    contactLinks.forEach(link => {
      link.style.color = '#5edfff';
    });
    workLinks.forEach(link => {
      link.style.color = '#ffffff';
    });
    homeLinks.forEach(link => {
      link.style.color = '#ffffff';
    });
  } 
  else if (document.title.startsWith('P')) {
    workLinks.forEach(link => {
      link.style.color = '#5edfff';
    });
    contactLinks.forEach(link => {
      link.style.color = '#ffffff';
    });
    homeLinks.forEach(link => {
      link.style.color = '#ffffff';
    });
  }
  else {
    homeLinks.forEach(link => {
      link.style.color = '#5edfff';
    });
    workLinks.forEach(link => {
      link.style.color = '#ffffff';
    });
    contactLinks.forEach(link => {
      link.style.color = '#ffffff';
    });
  }
})
