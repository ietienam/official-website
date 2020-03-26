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
var contactLinks = document.querySelectorAll('.contact');
var workLinks = document.querySelectorAll('.work');
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
      link.style.opacity = '.9';
    });
  } else if (document.title.startsWith('P')) {
    workLinks.forEach(function (link) {
      link.style.color = '#5edfff';
    });
    contactLinks.forEach(function (link) {
      link.style.color = '#ffffff';
      link.style.opacity = '.9';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NDA5YyJdLCJuYW1lcyI6WyJvdmVybGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib3ZlcmxheUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImNsb3NlQnRuIiwibW9iaWxlTWVudSIsIm9uTG9hZCIsIm9uTG9hZFRleHQiLCJjb250YWN0TGlua3MiLCJ3b3JrTGlua3MiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJ3aWR0aCIsInNldFRpbWVvdXQiLCJmb3JFYWNoIiwibGluayIsInZpc2liaWxpdHkiLCJ3aW5kb3ciLCJwZXJmb3JtYW5jZSIsIm5hdmlnYXRpb24iLCJ0eXBlIiwidGl0bGUiLCJzdGFydHNXaXRoIiwib3BhY2l0eSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0Qs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QUNQLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcEMsTUFBSVYsUUFBUSxDQUFDcUIsS0FBVCxDQUFlQyxVQUFmLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDbENkLGdCQUFZLENBQUNNLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQzNCQSxVQUFJLENBQUNKLEtBQUwsQ0FBV2EsS0FBWCxHQUFtQixTQUFuQjtBQUNELEtBRkQ7QUFHQWYsYUFBUyxDQUFDSyxPQUFWLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN4QkEsVUFBSSxDQUFDSixLQUFMLENBQVdhLEtBQVgsR0FBbUIsU0FBbkI7QUFDQVQsVUFBSSxDQUFDSixLQUFMLENBQVdZLE9BQVgsR0FBcUIsSUFBckI7QUFDRCxLQUhEO0FBSUQsR0FSRCxNQVFPLElBQUl2QixRQUFRLENBQUNxQixLQUFULENBQWVDLFVBQWYsQ0FBMEIsR0FBMUIsQ0FBSixFQUFvQztBQUN6Q2IsYUFBUyxDQUFDSyxPQUFWLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN4QkEsVUFBSSxDQUFDSixLQUFMLENBQVdhLEtBQVgsR0FBbUIsU0FBbkI7QUFDRCxLQUZEO0FBR0FoQixnQkFBWSxDQUFDTSxPQUFiLENBQXFCLFVBQUFDLElBQUksRUFBSTtBQUMzQkEsVUFBSSxDQUFDSixLQUFMLENBQVdhLEtBQVgsR0FBbUIsU0FBbkI7QUFDQVQsVUFBSSxDQUFDSixLQUFMLENBQVdZLE9BQVgsR0FBcUIsSUFBckI7QUFDRCxLQUhEO0FBSUQ7QUFDRixDQWxCRCxFOzs7Ozs7Ozs7OztBQ3ZEQSx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zY3NzJztcclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5jb25zdCBvdmVybGF5TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3ZlcmxheSBhJyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnRuJyk7XHJcbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlX25hdicpO1xyXG5jb25zdCBvbkxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25Mb2FkJyk7XHJcbmNvbnN0IG9uTG9hZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25Mb2FkIGgxJyk7XHJcbmNvbnN0IGNvbnRhY3RMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0Jyk7XHJcbmNvbnN0IHdvcmtMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrJyk7XHJcblxyXG5tb2JpbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG92ZXJsYXkuc3R5bGUud2lkdGggPSAnMTAwJSc7IC8vIHNldCB3aWR0aCB0byBkcmF3IG91dCBvdmVybGF5XHJcbiAgLy8gd2FpdGggaGFsZiBhIHNlY29uZCBhZnRlciBvdmVybGF5IGNvbWVzIG91dCBhbmQgZGlzcGxheSBjb250ZW50c1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgb3ZlcmxheUxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIH0pO1xyXG4gIH0sIDUwMCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgLy8gaGlkZSBvdmVybGF5IGNvbnRlbnQgdGhlbiBjbG9zZSBvdmVybGF5XHJcbiAgb3ZlcmxheUxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICB9KTtcclxuICBvdmVybGF5LnN0eWxlLndpZHRoID0gJzAnO1xyXG59KTtcclxuXHJcbmlmICh3aW5kb3cucGVyZm9ybWFuY2UubmF2aWdhdGlvbi50eXBlID09PSAxIHx8IGRvY3VtZW50LnRpdGxlLnN0YXJ0c1dpdGgoJ0knKSkgey8vIGNoZWNrcyBpZiB0aGUgcGFnZSB3YXMgcmVmcmVzaGVkXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBvbkxvYWQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJzsgLy9tYWtlIGxvYWQgcGFnZSBhcHBlYXJcclxuICAgIC8vdGhlbiBkaXNwbGF5IHRleHQgYWZ0ZXIgM21zXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgb25Mb2FkVGV4dC5zdHlsZS5vcGFjaXR5ID0gJy45JztcclxuICAgIH0sIDMwMCk7XHJcbiAgICAvLyB3YWl0IDE3MDBzIGFmdGVyIHBhZ2UgbG9hZHMgdGhlbiByZW1vdmUgdGV4dCBjb250ZW50IGZyb20gb25sb2FkIGhvdmVyIHBhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWRUZXh0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICB9LCAxNzAwKTtcclxuICAgIC8vIHdhaXQgMiBzZWNvbmRzIGFmdGVyIHBhZ2UgbG9hZHMgdGhlbiByZW1vdmUgb25sb2FkIGhvdmVyIHBhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWQuc3R5bGUud2lkdGggPSAnMCc7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9KTtcclxufSBlbHNlIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIG9uTG9hZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnOyAvL21ha2UgbG9hZCBwYWdlIGFwcGVhclxyXG4gICAgLy8gd2FpdCBsZXNzIHRoYW4gaGFsZiBhIHNlY29uZCBhZnRlciBwYWdlIGxvYWRzIHRoZW4gcmVtb3ZlIG9ubG9hZCBob3ZlciBwYWdlXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgb25Mb2FkLnN0eWxlLndpZHRoID0gJzAnO1xyXG4gICAgfSwgNDAwKTtcclxuICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC50aXRsZS5zdGFydHNXaXRoKCdDJykpIHtcclxuICAgIGNvbnRhY3RMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnN0eWxlLmNvbG9yID0gJyM1ZWRmZmYnO1xyXG4gICAgfSk7XHJcbiAgICB3b3JrTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgbGluay5zdHlsZS5vcGFjaXR5ID0gJy45JztcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUuc3RhcnRzV2l0aCgnUCcpKSB7XHJcbiAgICB3b3JrTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS5jb2xvciA9ICcjNWVkZmZmJztcclxuICAgIH0pO1xyXG4gICAgY29udGFjdExpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIGxpbmsuc3R5bGUub3BhY2l0eSA9ICcuOSc7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=