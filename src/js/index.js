import '../sass/style.scss';
import sasuke from '../assets/images/sasuke.jpg';

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
};

import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
  new RegExp('\\.(?:js|css)$'),
  new StaleWhileRevalidate()
);

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
sasukeImg.style.opacity = '.9';
sasukeImg.style.height = '55%';
sasukeImg.style.overflow = 'hidden';

mobileMenu.addEventListener('click', () => {
  overlay.style.width = '100%'; // set width to draw out overlay
  // waith half a second after overlay comes out and display contents
  setTimeout(() => {
    overlayLinks.forEach(link => {
      link.style.opacity = '.9';
    });
  }, 400);
});

closeBtn.addEventListener('click', () => {
  // hide overlay content then close overlay
  overlayLinks.forEach(link => {
    link.style.opacity = '0';
  });
  overlay.style.width = '0';
});

if (window.performance.navigation.type === 1 || document.title.startsWith('I')) {// checks if the page was refreshed
  window.addEventListener('DOMContentLoaded', () => {
    onLoad.style.opacity = '1'; //make load page appear
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
      setTimeout(() => {
        onLoad.style.opacity = '0';
      }, 300);
    }, 2000);
  });
} else {
  window.addEventListener('DOMContentLoaded', () => {
    onLoad.style.opacity = '1'; //make load page appear
    // wait less than half a second after page loads then remove onload hover page
    setTimeout(() => {
      onLoad.style.width = '0';
      setTimeout(() => {
        onLoad.style.opacity = '0';
      }, 300);
    }, 400);
  });
};

window.addEventListener('load', () => {
  if (document.title.startsWith('C')) {
    contactLinks.forEach(link => {
      link.style.color = '#5edfff';
      link.style.borderBottom = '3px solid #fb3569';
    });
  }
  else if (document.title.startsWith('P')) {
    workLinks.forEach(link => {
      link.style.color = '#5edfff';
      link.style.borderBottom = '3px solid #fb3569';
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
