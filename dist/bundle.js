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

var overlay = document.querySelector('.overlay');
var overlayLinks = document.querySelectorAll('.overlay a');
var closeBtn = document.querySelector('.closeBtn');
var mobileMenu = document.querySelector('.mobile_nav');
var onLoad = document.querySelector('.onLoad');
var onLoadText = document.querySelector('.onLoad h1');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsib3ZlcmxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXlMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUJ0biIsIm1vYmlsZU1lbnUiLCJvbkxvYWQiLCJvbkxvYWRUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwid2lkdGgiLCJzZXRUaW1lb3V0IiwiZm9yRWFjaCIsImxpbmsiLCJ2aXNpYmlsaXR5Iiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJuYXZpZ2F0aW9uIiwidHlwZSIsInRpdGxlIiwic3RhcnRzV2l0aCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixZQUExQixDQUFyQjtBQUNBLElBQU1DLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0EsSUFBTUksVUFBVSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxJQUFNSyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTU0sVUFBVSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbkI7QUFFQUksVUFBVSxDQUFDRyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDVCxTQUFPLENBQUNVLEtBQVIsQ0FBY0MsS0FBZCxHQUFzQixNQUF0QixDQUR5QyxDQUNYO0FBQzlCOztBQUNBQyxZQUFVLENBQUMsWUFBTTtBQUNmVCxnQkFBWSxDQUFDVSxPQUFiLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUMzQkEsVUFBSSxDQUFDSixLQUFMLENBQVdLLFVBQVgsR0FBd0IsU0FBeEI7QUFDRCxLQUZEO0FBR0QsR0FKUyxFQUlQLEdBSk8sQ0FBVjtBQUtELENBUkQ7QUFVQVYsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3ZDO0FBQ0FOLGNBQVksQ0FBQ1UsT0FBYixDQUFxQixVQUFBQyxJQUFJLEVBQUk7QUFDM0JBLFFBQUksQ0FBQ0osS0FBTCxDQUFXSyxVQUFYLEdBQXdCLFFBQXhCO0FBQ0QsR0FGRDtBQUdBZixTQUFPLENBQUNVLEtBQVIsQ0FBY0MsS0FBZCxHQUFzQixHQUF0QjtBQUNELENBTkQ7O0FBUUEsSUFBSUssTUFBTSxDQUFDQyxXQUFQLENBQW1CQyxVQUFuQixDQUE4QkMsSUFBOUIsS0FBdUMsQ0FBdkMsSUFBNENsQixRQUFRLENBQUNtQixLQUFULENBQWVDLFVBQWYsQ0FBMEIsR0FBMUIsQ0FBaEQsRUFBZ0Y7QUFBQztBQUMvRUwsUUFBTSxDQUFDUCxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoREYsVUFBTSxDQUFDRyxLQUFQLENBQWFLLFVBQWIsR0FBMEIsU0FBMUIsQ0FEZ0QsQ0FDWDtBQUNyQzs7QUFDQUgsY0FBVSxDQUFDLFlBQU07QUFDZkosZ0JBQVUsQ0FBQ0UsS0FBWCxDQUFpQlksT0FBakIsR0FBMkIsSUFBM0I7QUFDRCxLQUZTLEVBRVAsR0FGTyxDQUFWLENBSGdELENBTWhEOztBQUNBVixjQUFVLENBQUMsWUFBTTtBQUNmSixnQkFBVSxDQUFDRSxLQUFYLENBQWlCWSxPQUFqQixHQUEyQixHQUEzQjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVYsQ0FQZ0QsQ0FVaEQ7O0FBQ0FWLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZMLFlBQU0sQ0FBQ0csS0FBUCxDQUFhQyxLQUFiLEdBQXFCLEdBQXJCO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBZEQ7QUFlRCxDQWhCRCxNQWdCTztBQUNMSyxRQUFNLENBQUNQLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hERixVQUFNLENBQUNHLEtBQVAsQ0FBYUssVUFBYixHQUEwQixTQUExQixDQURnRCxDQUNYO0FBRXJDOztBQUNBSCxjQUFVLENBQUMsWUFBTTtBQUNmTCxZQUFNLENBQUNHLEtBQVAsQ0FBYUMsS0FBYixHQUFxQixHQUFyQjtBQUNELEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxHQVBEO0FBUUQ7O0FBQUEsQzs7Ozs7Ozs7Ozs7QUNwREQsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuY29uc3Qgb3ZlcmxheUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm92ZXJsYXkgYScpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ0bicpO1xyXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZV9uYXYnKTtcclxuY29uc3Qgb25Mb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uTG9hZCcpO1xyXG5jb25zdCBvbkxvYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uTG9hZCBoMScpO1xyXG5cclxubW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBvdmVybGF5LnN0eWxlLndpZHRoID0gJzEwMCUnOyAvLyBzZXQgd2lkdGggdG8gZHJhdyBvdXQgb3ZlcmxheVxyXG4gIC8vIHdhaXRoIGhhbGYgYSBzZWNvbmQgYWZ0ZXIgb3ZlcmxheSBjb21lcyBvdXQgYW5kIGRpc3BsYXkgY29udGVudHNcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG92ZXJsYXlMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB9KTtcclxuICB9LCA1MDApO1xyXG59KTtcclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIC8vIGhpZGUgb3ZlcmxheSBjb250ZW50IHRoZW4gY2xvc2Ugb3ZlcmxheVxyXG4gIG92ZXJsYXlMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgfSk7XHJcbiAgb3ZlcmxheS5zdHlsZS53aWR0aCA9ICcwJztcclxufSk7XHJcblxyXG5pZiAod2luZG93LnBlcmZvcm1hbmNlLm5hdmlnYXRpb24udHlwZSA9PT0gMSB8fCBkb2N1bWVudC50aXRsZS5zdGFydHNXaXRoKCdJJykpIHsvLyBjaGVja3MgaWYgdGhlIHBhZ2Ugd2FzIHJlZnJlc2hlZFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgb25Mb2FkLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7IC8vbWFrZSBsb2FkIHBhZ2UgYXBwZWFyXHJcbiAgICAvL3RoZW4gZGlzcGxheSB0ZXh0IGFmdGVyIDNtc1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG9uTG9hZFRleHQuc3R5bGUub3BhY2l0eSA9ICcuOSc7XHJcbiAgICB9LCAzMDApO1xyXG4gICAgLy8gd2FpdCAxNzAwcyBhZnRlciBwYWdlIGxvYWRzIHRoZW4gcmVtb3ZlIHRleHQgY29udGVudCBmcm9tIG9ubG9hZCBob3ZlciBwYWdlXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgb25Mb2FkVGV4dC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgfSwgMTcwMCk7XHJcbiAgICAvLyB3YWl0IDIgc2Vjb25kcyBhZnRlciBwYWdlIGxvYWRzIHRoZW4gcmVtb3ZlIG9ubG9hZCBob3ZlciBwYWdlXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgb25Mb2FkLnN0eWxlLndpZHRoID0gJzAnO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfSk7XHJcbn0gZWxzZSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBvbkxvYWQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJzsgLy9tYWtlIGxvYWQgcGFnZSBhcHBlYXJcclxuXHJcbiAgICAvLyB3YWl0IGxlc3MgdGhhbiBoYWxmIGEgc2Vjb25kIGFmdGVyIHBhZ2UgbG9hZHMgdGhlbiByZW1vdmUgb25sb2FkIGhvdmVyIHBhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWQuc3R5bGUud2lkdGggPSAnMCc7XHJcbiAgICB9LCA0MDApO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==