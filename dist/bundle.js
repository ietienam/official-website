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
/* harmony import */ var _assets_images_sasuke_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/sasuke.jpg */ "./src/assets/images/sasuke.jpg");


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
sasukeImg.src = _assets_images_sasuke_jpg__WEBPACK_IMPORTED_MODULE_1__["default"];
sasukeImg.style.width = '100%';
sasukeImg.style.opacity = '.9';
sasukeImg.style.height = '55%';
sasukeImg.style.overflow = 'hidden';
mobileMenu.addEventListener('click', function () {
  overlay.style.width = '100%'; // set width to draw out overlay
  // waith half a second after overlay comes out and display contents

  setTimeout(function () {
    overlayLinks.forEach(function (link) {
      link.style.opacity = '.9';
    });
  }, 400);
});
closeBtn.addEventListener('click', function () {
  // hide overlay content then close overlay
  overlayLinks.forEach(function (link) {
    link.style.opacity = '0';
  });
  overlay.style.width = '0';
});

if (window.performance.navigation.type === 1 || document.title.startsWith('I')) {
  // checks if the page was refreshed
  window.addEventListener('DOMContentLoaded', function () {
    onLoad.style.opacity = '1'; //make load page appear
    //then display text after 3ms

    setTimeout(function () {
      onLoadText.style.opacity = '.9';
    }, 300); // wait 1700s after page loads then remove text content from onload hover page

    setTimeout(function () {
      onLoadText.style.opacity = '0';
    }, 1700); // wait 2 seconds after page loads then remove onload hover page

    setTimeout(function () {
      onLoad.style.width = '0';
      setTimeout(function () {
        onLoad.style.opacity = '0';
      }, 300);
    }, 2000);
  });
} else {
  window.addEventListener('DOMContentLoaded', function () {
    onLoad.style.opacity = '1'; //make load page appear
    // wait less than half a second after page loads then remove onload hover page

    setTimeout(function () {
      onLoad.style.width = '0';
      setTimeout(function () {
        onLoad.style.opacity = '0';
      }, 300);
    }, 400);
  });
}

;
window.addEventListener('load', function () {
  if (document.title.startsWith('C')) {
    contactLinks.forEach(function (link) {
      link.style.color = '#5edfff';
      link.style.borderBottom = '3px solid #fb3569';
    });
  } else if (document.title.startsWith('P')) {
    workLinks.forEach(function (link) {
      link.style.color = '#5edfff';
      link.style.borderBottom = '3px solid #fb3569';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvc2FzdWtlLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80MDljIl0sIm5hbWVzIjpbIm92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvdmVybGF5TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VCdG4iLCJtb2JpbGVNZW51Iiwib25Mb2FkIiwib25Mb2FkVGV4dCIsImNvbnRhY3RMaW5rcyIsIndvcmtMaW5rcyIsImhvbWVMaW5rcyIsInNhc3VrZUltZyIsInNyYyIsInNhc3VrZSIsInN0eWxlIiwid2lkdGgiLCJvcGFjaXR5IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImZvckVhY2giLCJsaW5rIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJuYXZpZ2F0aW9uIiwidHlwZSIsInRpdGxlIiwic3RhcnRzV2l0aCIsImNvbG9yIiwiYm9yZGVyQm90dG9tIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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V2dCLFlBQVgsR0FBMEIsbUJBQTFCO0FBQ0QsS0FIRDtBQUlELEdBTEQsTUFNSyxJQUFJOUIsUUFBUSxDQUFDMkIsS0FBVCxDQUFlQyxVQUFmLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDdkNuQixhQUFTLENBQUNZLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2UsS0FBWCxHQUFtQixTQUFuQjtBQUNBUCxVQUFJLENBQUNSLEtBQUwsQ0FBV2dCLFlBQVgsR0FBMEIsbUJBQTFCO0FBQ0QsS0FIRDtBQUlELEdBTEksTUFNQTtBQUNIcEIsYUFBUyxDQUFDVyxPQUFWLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN4QkEsVUFBSSxDQUFDUixLQUFMLENBQVdlLEtBQVgsR0FBbUIsU0FBbkI7QUFDRCxLQUZEO0FBR0FwQixhQUFTLENBQUNZLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2UsS0FBWCxHQUFtQixTQUFuQjtBQUNELEtBRkQ7QUFHQXJCLGdCQUFZLENBQUNhLE9BQWIsQ0FBcUIsVUFBQUMsSUFBSSxFQUFJO0FBQzNCQSxVQUFJLENBQUNSLEtBQUwsQ0FBV2UsS0FBWCxHQUFtQixTQUFuQjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBeEJELEU7Ozs7Ozs7Ozs7O0FDdEVBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9iNzRjOTNkNDJhYzUzZDcwYTVjMjhhYTU0ODZkZTE0MC5qcGdcIjsiLCJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBzYXN1a2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9zYXN1a2UuanBnJztcclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5jb25zdCBvdmVybGF5TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3ZlcmxheSBhJyk7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnRuJyk7XHJcbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlX25hdicpO1xyXG5jb25zdCBvbkxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25Mb2FkJyk7XHJcbmNvbnN0IG9uTG9hZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25Mb2FkIGgxJyk7XHJcbmNvbnN0IGNvbnRhY3RMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0Jyk7XHJcbmNvbnN0IHdvcmtMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrJyk7XHJcbmNvbnN0IGhvbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lJyk7XHJcbmNvbnN0IHNhc3VrZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXN1a2UnKTtcclxuXHJcbnNhc3VrZUltZy5zcmMgPSBzYXN1a2U7XHJcbnNhc3VrZUltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuc2FzdWtlSW1nLnN0eWxlLm9wYWNpdHkgPSAnLjknO1xyXG5zYXN1a2VJbWcuc3R5bGUuaGVpZ2h0ID0gJzU1JSc7XHJcbnNhc3VrZUltZy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxubW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBvdmVybGF5LnN0eWxlLndpZHRoID0gJzEwMCUnOyAvLyBzZXQgd2lkdGggdG8gZHJhdyBvdXQgb3ZlcmxheVxyXG4gIC8vIHdhaXRoIGhhbGYgYSBzZWNvbmQgYWZ0ZXIgb3ZlcmxheSBjb21lcyBvdXQgYW5kIGRpc3BsYXkgY29udGVudHNcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG92ZXJsYXlMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnN0eWxlLm9wYWNpdHkgPSAnLjknO1xyXG4gICAgfSk7XHJcbiAgfSwgNDAwKTtcclxufSk7XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBoaWRlIG92ZXJsYXkgY29udGVudCB0aGVuIGNsb3NlIG92ZXJsYXlcclxuICBvdmVybGF5TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgIGxpbmsuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICB9KTtcclxuICBvdmVybGF5LnN0eWxlLndpZHRoID0gJzAnO1xyXG59KTtcclxuXHJcbmlmICh3aW5kb3cucGVyZm9ybWFuY2UubmF2aWdhdGlvbi50eXBlID09PSAxIHx8IGRvY3VtZW50LnRpdGxlLnN0YXJ0c1dpdGgoJ0knKSkgey8vIGNoZWNrcyBpZiB0aGUgcGFnZSB3YXMgcmVmcmVzaGVkXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBvbkxvYWQuc3R5bGUub3BhY2l0eSA9ICcxJzsgLy9tYWtlIGxvYWQgcGFnZSBhcHBlYXJcclxuICAgIC8vdGhlbiBkaXNwbGF5IHRleHQgYWZ0ZXIgM21zXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgb25Mb2FkVGV4dC5zdHlsZS5vcGFjaXR5ID0gJy45JztcclxuICAgIH0sIDMwMCk7XHJcbiAgICAvLyB3YWl0IDE3MDBzIGFmdGVyIHBhZ2UgbG9hZHMgdGhlbiByZW1vdmUgdGV4dCBjb250ZW50IGZyb20gb25sb2FkIGhvdmVyIHBhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWRUZXh0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICB9LCAxNzAwKTtcclxuICAgIC8vIHdhaXQgMiBzZWNvbmRzIGFmdGVyIHBhZ2UgbG9hZHMgdGhlbiByZW1vdmUgb25sb2FkIGhvdmVyIHBhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWQuc3R5bGUud2lkdGggPSAnMCc7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG59IGVsc2Uge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgb25Mb2FkLnN0eWxlLm9wYWNpdHkgPSAnMSc7IC8vbWFrZSBsb2FkIHBhZ2UgYXBwZWFyXHJcbiAgICAvLyB3YWl0IGxlc3MgdGhhbiBoYWxmIGEgc2Vjb25kIGFmdGVyIHBhZ2UgbG9hZHMgdGhlbiByZW1vdmUgb25sb2FkIGhvdmVyIHBhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWQuc3R5bGUud2lkdGggPSAnMCc7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbkxvYWQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICBpZiAoZG9jdW1lbnQudGl0bGUuc3RhcnRzV2l0aCgnQycpKSB7XHJcbiAgICBjb250YWN0TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS5jb2xvciA9ICcjNWVkZmZmJztcclxuICAgICAgbGluay5zdHlsZS5ib3JkZXJCb3R0b20gPSAnM3B4IHNvbGlkICNmYjM1NjknO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlLnN0YXJ0c1dpdGgoJ1AnKSkge1xyXG4gICAgd29ya0xpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSAnIzVlZGZmZic7XHJcbiAgICAgIGxpbmsuc3R5bGUuYm9yZGVyQm90dG9tID0gJzNweCBzb2xpZCAjZmIzNTY5JztcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGhvbWVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICBsaW5rLnN0eWxlLmNvbG9yID0gJyM1ZWRmZmYnO1xyXG4gICAgfSk7XHJcbiAgICB3b3JrTGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgbGluay5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgIH0pO1xyXG4gICAgY29udGFjdExpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgIGxpbmsuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=