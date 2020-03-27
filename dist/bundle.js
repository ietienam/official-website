/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/ini.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/ini.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/fc840b44066abe566594ddd25b28bd42.jpg");

/***/ }),

/***/ "./src/assets/images/sasuke.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/sasuke.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/b74c93d42ac53d70a5c28aa5486de140.jpg");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_ini_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/ini.jpg */ "./src/assets/images/ini.jpg");
/* harmony import */ var _assets_images_sasuke_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/sasuke.jpg */ "./src/assets/images/sasuke.jpg");



var overlay = document.querySelector('.overlay');
var overlayLinks = document.querySelectorAll('.overlay a');
var closeBtn = document.querySelector('.closeBtn');
var mobileMenu = document.querySelector('.mobile_nav');
var onLoad = document.querySelector('.onLoad');
var onLoadText = document.querySelector('.onLoad h1');
var contactLinks = document.querySelectorAll('.contact');
var workLinks = document.querySelectorAll('.work');
var homeLinks = document.querySelectorAll('.home');
var sasukeImg = document.querySelector('.sasuke');
sasukeImg.src = _assets_images_sasuke_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
sasukeImg.style.width = '100%';
sasukeImg.style.opacity = '.9';
sasukeImg.style.height = '55%';
sasukeImg.style.overflow = 'hidden';
mobileMenu.addEventListener('click', function () {
  overlay.style.width = '100%'; // set width to draw out overlay
  // waith half a second after overlay comes out and display contents

  setTimeout(function () {
    overlayLinks.forEach(function (link) {
      link.style.visibility = 'visible';
    });
  }, 500);
});
closeBtn.addEventListener('click', function () {
  // hide overlay content then close overlay
  overlayLinks.forEach(function (link) {
    link.style.visibility = 'hidden';
  });
  overlay.style.width = '0';
});

if (window.performance.navigation.type === 1 || document.title.startsWith('I')) {
  // checks if the page was refreshed
  window.addEventListener('DOMContentLoaded', function () {
    onLoad.style.visibility = 'visible'; //make load page appear
    //then display text after 3ms

    setTimeout(function () {
      onLoadText.style.opacity = '.9';
    }, 300); // wait 1700s after page loads then remove text content from onload hover page

    setTimeout(function () {
      onLoadText.style.opacity = '0';
    }, 1700); // wait 2 seconds after page loads then remove onload hover page

    setTimeout(function () {
      onLoad.style.width = '0';
    }, 2000);
  });
} else {
  window.addEventListener('DOMContentLoaded', function () {
    onLoad.style.visibility = 'visible'; //make load page appear
    // wait less than half a second after page loads then remove onload hover page

    setTimeout(function () {
      onLoad.style.width = '0';
    }, 400);
  });
}

;
window.addEventListener('load', function () {
  if (document.title.startsWith('C')) {
    contactLinks.forEach(function (link) {
      link.style.color = '#5edfff';
    });
    workLinks.forEach(function (link) {
      link.style.color = '#ffffff';
    });
    homeLinks.forEach(function (link) {
      link.style.color = '#ffffff';
    });
  } else if (document.title.startsWith('P')) {
    workLinks.forEach(function (link) {
      link.style.color = '#5edfff';
    });
    contactLinks.forEach(function (link) {
      link.style.color = '#ffffff';
    });
    homeLinks.forEach(function (link) {
      link.style.color = '#ffffff';
    });
  } else {
    homeLinks.forEach(function (link) {
      link.style.color = '#5edfff';
    });
    workLinks.forEach(function (link) {
      link.style.color = '#ffffff';
    });
    contactLinks.forEach(function (link) {
      link.style.color = '#ffffff';
    });
  }
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaW5pLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zYXN1a2UuanBnIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzQwOWMiXSwibmFtZXMiOlsib3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXlMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUJ0biIsIm1vYmlsZU1lbnUiLCJvbkxvYWQiLCJvbkxvYWRUZXh0IiwiY29udGFjdExpbmtzIiwid29ya0xpbmtzIiwiaG9tZUxpbmtzIiwic2FzdWtlSW1nIiwic3JjIiwic2FzdWtlIiwic3R5bGUiLCJ3aWR0aCIsIm9wYWNpdHkiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsImxpbmsiLCJ2aXNpYmlsaXR5Iiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJuYXZpZ2F0aW9uIiwidHlwZSIsInRpdGxlIiwic3RhcnRzV2l0aCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUNXLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2dCLEtBQVgsR0FBbUIsU0FBbkI7QUFDRCxLQUZEO0FBR0QsR0FWRCxNQVdLLElBQUk5QixRQUFRLENBQUM0QixLQUFULENBQWVDLFVBQWYsQ0FBMEIsR0FBMUIsQ0FBSixFQUFvQztBQUN2Q3BCLGFBQVMsQ0FBQ1ksT0FBVixDQUFrQixVQUFBQyxJQUFJLEVBQUk7QUFDeEJBLFVBQUksQ0FBQ1IsS0FBTCxDQUFXZ0IsS0FBWCxHQUFtQixTQUFuQjtBQUNELEtBRkQ7QUFHQXRCLGdCQUFZLENBQUNhLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQzNCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2dCLEtBQVgsR0FBbUIsU0FBbkI7QUFDRCxLQUZEO0FBR0FwQixhQUFTLENBQUNXLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2dCLEtBQVgsR0FBbUIsU0FBbkI7QUFDRCxLQUZEO0FBR0QsR0FWSSxNQVdBO0FBQ0hwQixhQUFTLENBQUNXLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2dCLEtBQVgsR0FBbUIsU0FBbkI7QUFDRCxLQUZEO0FBR0FyQixhQUFTLENBQUNZLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2dCLEtBQVgsR0FBbUIsU0FBbkI7QUFDRCxLQUZEO0FBR0F0QixnQkFBWSxDQUFDYSxPQUFiLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUMzQkEsVUFBSSxDQUFDUixLQUFMLENBQVdnQixLQUFYLEdBQW1CLFNBQW5CO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQ0FsQ0QsRTs7Ozs7Ozs7Ozs7QUNqRUEsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ZjODQwYjQ0MDY2YWJlNTY2NTk0ZGRkMjViMjhiZDQyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYjc0YzkzZDQyYWM1M2Q3MGE1YzI4YWE1NDg2ZGUxNDAuanBnXCI7IiwiaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgbXlJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2luaS5qcGcnO1xyXG5pbXBvcnQgc2FzdWtlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc2FzdWtlLmpwZyc7XHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuY29uc3Qgb3ZlcmxheUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm92ZXJsYXkgYScpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ0bicpO1xyXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZV9uYXYnKTtcclxuY29uc3Qgb25Mb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uTG9hZCcpO1xyXG5jb25zdCBvbkxvYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uTG9hZCBoMScpO1xyXG5jb25zdCBjb250YWN0TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdCcpO1xyXG5jb25zdCB3b3JrTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud29yaycpO1xyXG5jb25zdCBob21lTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZScpO1xyXG5jb25zdCBzYXN1a2VJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2FzdWtlJyk7XHJcblxyXG5zYXN1a2VJbWcuc3JjID0gc2FzdWtlO1xyXG5zYXN1a2VJbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbnNhc3VrZUltZy5zdHlsZS5vcGFjaXR5ID0gJy45Jztcclxuc2FzdWtlSW1nLnN0eWxlLmhlaWdodCA9ICc1NSUnO1xyXG5zYXN1a2VJbWcuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbm1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgb3ZlcmxheS5zdHlsZS53aWR0aCA9ICcxMDAlJzsgLy8gc2V0IHdpZHRoIHRvIGRyYXcgb3V0IG92ZXJsYXlcclxuICAvLyB3YWl0aCBoYWxmIGEgc2Vjb25kIGFmdGVyIG92ZXJsYXkgY29tZXMgb3V0IGFuZCBkaXNwbGF5IGNvbnRlbnRzXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBvdmVybGF5TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfSk7XHJcbiAgfSwgNTAwKTtcclxufSk7XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBoaWRlIG92ZXJsYXkgY29udGVudCB0aGVuIGNsb3NlIG92ZXJsYXlcclxuICBvdmVybGF5TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gIH0pO1xyXG4gIG92ZXJsYXkuc3R5bGUud2lkdGggPSAnMCc7XHJcbn0pO1xyXG5cclxuaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5uYXZpZ2F0aW9uLnR5cGUgPT09IDEgfHwgZG9jdW1lbnQudGl0bGUuc3RhcnRzV2l0aCgnSScpKSB7Ly8gY2hlY2tzIGlmIHRoZSBwYWdlIHdhcyByZWZyZXNoZWRcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIG9uTG9hZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnOyAvL21ha2UgbG9hZCBwYWdlIGFwcGVhclxyXG4gICAgLy90aGVuIGRpc3BsYXkgdGV4dCBhZnRlciAzbXNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWRUZXh0LnN0eWxlLm9wYWNpdHkgPSAnLjknO1xyXG4gICAgfSwgMzAwKTtcclxuICAgIC8vIHdhaXQgMTcwMHMgYWZ0ZXIgcGFnZSBsb2FkcyB0aGVuIHJlbW92ZSB0ZXh0IGNvbnRlbnQgZnJvbSBvbmxvYWQgaG92ZXIgcGFnZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG9uTG9hZFRleHQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIH0sIDE3MDApO1xyXG4gICAgLy8gd2FpdCAyIHNlY29uZHMgYWZ0ZXIgcGFnZSBsb2FkcyB0aGVuIHJlbW92ZSBvbmxvYWQgaG92ZXIgcGFnZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG9uTG9hZC5zdHlsZS53aWR0aCA9ICcwJztcclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG59IGVsc2Uge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgb25Mb2FkLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7IC8vbWFrZSBsb2FkIHBhZ2UgYXBwZWFyXHJcbiAgICAvLyB3YWl0IGxlc3MgdGhhbiBoYWxmIGEgc2Vjb25kIGFmdGVyIHBhZ2UgbG9hZHMgdGhlbiByZW1vdmUgb25sb2FkIGhvdmVyIHBhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWQuc3R5bGUud2lkdGggPSAnMCc7XHJcbiAgICB9LCA0MDApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LnRpdGxlLnN0YXJ0c1dpdGgoJ0MnKSkge1xyXG4gICAgY29udGFjdExpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSAnIzVlZGZmZic7XHJcbiAgICB9KTtcclxuICAgIHdvcmtMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgfSk7XHJcbiAgICBob21lTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNlIGlmIChkb2N1bWVudC50aXRsZS5zdGFydHNXaXRoKCdQJykpIHtcclxuICAgIHdvcmtMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnN0eWxlLmNvbG9yID0gJyM1ZWRmZmYnO1xyXG4gICAgfSk7XHJcbiAgICBjb250YWN0TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgIH0pO1xyXG4gICAgaG9tZUxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBob21lTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS5jb2xvciA9ICcjNWVkZmZmJztcclxuICAgIH0pO1xyXG4gICAgd29ya0xpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9