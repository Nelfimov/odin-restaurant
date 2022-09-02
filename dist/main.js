/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getContact)
/* harmony export */ });
function getContact() {
  const rows = [
    ['telephone', 'better call saul'],
    ['Email', 'bettercallsaul@mail.org'],
  ]
  const headline = document.createElement('h1');
  headline.textContent = 'You can contact us';
  body.appendChild(headline);

  const table = document.createElement('table');

  let i = 0;
  while (i < 2) {
    let tr = document.createElement('tr');
    let j = 0;
    while (j < 2) {
      let td = document.createElement('td');
      if (j == 1) {
        let a = document.createElement('a');
        if (i == 0) {
          a.href = 'tel:+111111111111'
        } else {
          a.href = 'mailto:bettercallsaul@mail.org'
        }
        a.textContent = rows[i][j];
        td.appendChild(a);
      } else {
        td.textContent = rows[i][j];
      }
      tr.appendChild(td);
      ++j;
    }
    table.appendChild(tr);
    ++i;
  }

  return table;
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFooter)
/* harmony export */ });
function getFooter() {
  const divFooter = document.createElement('div');
  divFooter.id = 'footer';

  const span = document.createElement('span');
  span.textContent = 'Great footer';

  divFooter.appendChild(span);

  return divFooter;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHeader)
/* harmony export */ });
/* harmony import */ var _restaurant_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.svg */ "./src/restaurant.svg");
/* harmony import */ var _Octocat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Octocat.png */ "./src/Octocat.png");



function getHeader() {
  const divLeft = document.createElement('div');
  divLeft.id = 'left';
  // IMAGE
  const imgLeft = new Image();
  imgLeft.classList.add('header-icon');
  imgLeft.src = _restaurant_svg__WEBPACK_IMPORTED_MODULE_0__;
  imgLeft.alt = 'logo';
  divLeft.appendChild(imgLeft);
  // SPAN
  const spanLeft = document.createElement('span');
  spanLeft.textContent = 'Restaurant page';
  divLeft.appendChild(spanLeft);
  // TABS
  const ul = document.createElement('ul');
  const ulRows = [
    ['menu', 'Menu'],
    ['opening', 'Opening hours'],
    ['contact', 'Contacts'],
  ];
  for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.id = ulRows[i][0];
    li.textContent = ulRows[i][1];
    ul.appendChild(li);
  }

  // RIGHT
  const divRight = document.createElement('div');
  divRight.id = 'right';
  const aRight = document.createElement('a');
  aRight.href = 'https://github.com/nelfimov/';
  // SPAN
  const spanRight = document.createElement('span');
  spanRight.textContent = 'Github';
  aRight.appendChild(spanRight);
  // IMAGE
  const imgRight = new Image();
  imgRight.src = _Octocat_png__WEBPACK_IMPORTED_MODULE_1__;
  imgRight.classList.add('header-icon');
  imgRight.alt = 'github';
  aRight.appendChild(imgRight);
  divRight.appendChild(aRight);

  // HEADER
  const divHeader = document.createElement('div');
  divHeader.id = 'header';
  divHeader.appendChild(divLeft);
  divHeader.appendChild(ul);
  divHeader.appendChild(divRight);

  return divHeader;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMenu)
/* harmony export */ });
function getMenu() {
  const rows = [
    ['Number', 'Food', 'Price'],
    ['1', 'Macaroni', '$100'],
    ['2', 'Spaghetti', '$150'],
    ['3', 'Pizza', '$50'],
    ['4', 'Pasta', '$30'],
    ['5', 'Pizza di pasta', '$80'],
  ];
  const headline = document.createElement('h1');
  headline.textContent = 'We have lots to offer';
  body.appendChild(headline);

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  let i = 0;
  while (i < 5) {
    let tr = document.createElement('tr');
    let j = 0;
    while (j < 3) {
      let td = document.createElement('td');
      td.textContent = rows[i][j];
      tr.appendChild(td);
      j++;
    }
    if (i === 0) {
      thead.appendChild(tr);
    } else {
      tbody.appendChild(tr);
    }
    i++;
  }
  const table = document.createElement('table');
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}


/***/ }),

/***/ "./src/opening.js":
/*!************************!*\
  !*** ./src/opening.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOpening)
/* harmony export */ });
function getOpening() {
  const rows = [
    ['Mon-Fri', '12:00 - 23:00'],
    ['Sat-Sun', '12:00 - 03:00'],
  ]
  const headline = document.createElement('h1');
  headline.textContent = 'Our opening hours';
  body.appendChild(headline);

  const table = document.createElement('table');

  let i = 0;
  while (i < 2) {
    let tr = document.createElement('tr');
    let j = 0;
    while (j < 2) {
      let td = document.createElement('td');
      td.textContent = rows[i][j];
      tr.appendChild(td);
      j++;
    }
    table.appendChild(tr);
    i++;
  }

  return table;
}


/***/ }),

/***/ "./src/Octocat.png":
/*!*************************!*\
  !*** ./src/Octocat.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "363cb5edea582a89c41f.png";

/***/ }),

/***/ "./src/restaurant.svg":
/*!****************************!*\
  !*** ./src/restaurant.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab2d59278494a905cf50.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _opening__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opening */ "./src/opening.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/header.js");






const content = document.getElementById('content');
const body = document.getElementById('body');

document.onload = content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_4__["default"])());
document.onload = body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());
document.onload = content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());

document.getElementById('menu').addEventListener('click', () => {
  body.innerHTML = '';
  body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])());
});
document.getElementById('contact').addEventListener('click', () => {
  body.innerHTML = '';
  body.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])());
});
document.getElementById('opening').addEventListener('click', () => {
  body.innerHTML = '';
  body.appendChild((0,_opening__WEBPACK_IMPORTED_MODULE_2__["default"])());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y4QztBQUNQOztBQUV4QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUNBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjZCO0FBQ007QUFDQTtBQUNGO0FBQ0E7O0FBRWpDO0FBQ0E7O0FBRUEsc0NBQXNDLG1EQUFTO0FBQy9DLG1DQUFtQyxpREFBTztBQUMxQyxzQ0FBc0MsbURBQVM7O0FBRS9DO0FBQ0E7QUFDQSxtQkFBbUIsaURBQU87QUFDMUIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVU7QUFDN0IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVU7QUFDN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvb3BlbmluZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbnRhY3QoKSB7XG4gIGNvbnN0IHJvd3MgPSBbXG4gICAgWyd0ZWxlcGhvbmUnLCAnYmV0dGVyIGNhbGwgc2F1bCddLFxuICAgIFsnRW1haWwnLCAnYmV0dGVyY2FsbHNhdWxAbWFpbC5vcmcnXSxcbiAgXVxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1lvdSBjYW4gY29udGFjdCB1cyc7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgMikge1xuICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgbGV0IGogPSAwO1xuICAgIHdoaWxlIChqIDwgMikge1xuICAgICAgbGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIGlmIChqID09IDEpIHtcbiAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICBhLmhyZWYgPSAndGVsOisxMTExMTExMTExMTEnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYS5ocmVmID0gJ21haWx0bzpiZXR0ZXJjYWxsc2F1bEBtYWlsLm9yZydcbiAgICAgICAgfVxuICAgICAgICBhLnRleHRDb250ZW50ID0gcm93c1tpXVtqXTtcbiAgICAgICAgdGQuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZC50ZXh0Q29udGVudCA9IHJvd3NbaV1bal07XG4gICAgICB9XG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICArK2o7XG4gICAgfVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgICArK2k7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XG4gIGNvbnN0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZGb290ZXIuaWQgPSAnZm9vdGVyJztcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLnRleHRDb250ZW50ID0gJ0dyZWF0IGZvb3Rlcic7XG5cbiAgZGl2Rm9vdGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHJldHVybiBkaXZGb290ZXI7XG59IiwiaW1wb3J0IHJlc3RhdXJhbnRJY29uIGZyb20gJy4vcmVzdGF1cmFudC5zdmcnO1xuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9PY3RvY2F0LnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhlYWRlcigpIHtcbiAgY29uc3QgZGl2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZMZWZ0LmlkID0gJ2xlZnQnO1xuICAvLyBJTUFHRVxuICBjb25zdCBpbWdMZWZ0ID0gbmV3IEltYWdlKCk7XG4gIGltZ0xlZnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWljb24nKTtcbiAgaW1nTGVmdC5zcmMgPSByZXN0YXVyYW50SWNvbjtcbiAgaW1nTGVmdC5hbHQgPSAnbG9nbyc7XG4gIGRpdkxlZnQuYXBwZW5kQ2hpbGQoaW1nTGVmdCk7XG4gIC8vIFNQQU5cbiAgY29uc3Qgc3BhbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5MZWZ0LnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnQgcGFnZSc7XG4gIGRpdkxlZnQuYXBwZW5kQ2hpbGQoc3BhbkxlZnQpO1xuICAvLyBUQUJTXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgdWxSb3dzID0gW1xuICAgIFsnbWVudScsICdNZW51J10sXG4gICAgWydvcGVuaW5nJywgJ09wZW5pbmcgaG91cnMnXSxcbiAgICBbJ2NvbnRhY3QnLCAnQ29udGFjdHMnXSxcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmlkID0gdWxSb3dzW2ldWzBdO1xuICAgIGxpLnRleHRDb250ZW50ID0gdWxSb3dzW2ldWzFdO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuXG4gIC8vIFJJR0hUXG4gIGNvbnN0IGRpdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdlJpZ2h0LmlkID0gJ3JpZ2h0JztcbiAgY29uc3QgYVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhUmlnaHQuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbmVsZmltb3YvJztcbiAgLy8gU1BBTlxuICBjb25zdCBzcGFuUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5SaWdodC50ZXh0Q29udGVudCA9ICdHaXRodWInO1xuICBhUmlnaHQuYXBwZW5kQ2hpbGQoc3BhblJpZ2h0KTtcbiAgLy8gSU1BR0VcbiAgY29uc3QgaW1nUmlnaHQgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nUmlnaHQuc3JjID0gZ2l0aHViSWNvbjtcbiAgaW1nUmlnaHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWljb24nKTtcbiAgaW1nUmlnaHQuYWx0ID0gJ2dpdGh1Yic7XG4gIGFSaWdodC5hcHBlbmRDaGlsZChpbWdSaWdodCk7XG4gIGRpdlJpZ2h0LmFwcGVuZENoaWxkKGFSaWdodCk7XG5cbiAgLy8gSEVBREVSXG4gIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZIZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGRpdkxlZnQpO1xuICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQodWwpO1xuICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2UmlnaHQpO1xuXG4gIHJldHVybiBkaXZIZWFkZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNZW51KCkge1xuICBjb25zdCByb3dzID0gW1xuICAgIFsnTnVtYmVyJywgJ0Zvb2QnLCAnUHJpY2UnXSxcbiAgICBbJzEnLCAnTWFjYXJvbmknLCAnJDEwMCddLFxuICAgIFsnMicsICdTcGFnaGV0dGknLCAnJDE1MCddLFxuICAgIFsnMycsICdQaXp6YScsICckNTAnXSxcbiAgICBbJzQnLCAnUGFzdGEnLCAnJDMwJ10sXG4gICAgWyc1JywgJ1BpenphIGRpIHBhc3RhJywgJyQ4MCddLFxuICBdO1xuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1dlIGhhdmUgbG90cyB0byBvZmZlcic7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuXG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCA1KSB7XG4gICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBsZXQgaiA9IDA7XG4gICAgd2hpbGUgKGogPCAzKSB7XG4gICAgICBsZXQgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGQudGV4dENvbnRlbnQgPSByb3dzW2ldW2pdO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgaisrO1xuICAgIH1cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgdGhlYWQuYXBwZW5kQ2hpbGQodHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XG4gICAgfVxuICAgIGkrKztcbiAgfVxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuXG4gIHJldHVybiB0YWJsZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wZW5pbmcoKSB7XG4gIGNvbnN0IHJvd3MgPSBbXG4gICAgWydNb24tRnJpJywgJzEyOjAwIC0gMjM6MDAnXSxcbiAgICBbJ1NhdC1TdW4nLCAnMTI6MDAgLSAwMzowMCddLFxuICBdXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnT3VyIG9wZW5pbmcgaG91cnMnO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IDIpIHtcbiAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGxldCBqID0gMDtcbiAgICB3aGlsZSAoaiA8IDIpIHtcbiAgICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0ZC50ZXh0Q29udGVudCA9IHJvd3NbaV1bal07XG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICBqKys7XG4gICAgfVxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZ2V0TWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgZ2V0Q29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgZ2V0T3BlbmluZyBmcm9tIFwiLi9vcGVuaW5nXCI7XG5pbXBvcnQgZ2V0Rm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGdldEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcblxuZG9jdW1lbnQub25sb2FkID0gY29udGVudC5hcHBlbmRDaGlsZChnZXRIZWFkZXIoKSk7XG5kb2N1bWVudC5vbmxvYWQgPSBib2R5LmFwcGVuZENoaWxkKGdldE1lbnUoKSk7XG5kb2N1bWVudC5vbmxvYWQgPSBjb250ZW50LmFwcGVuZENoaWxkKGdldEZvb3RlcigpKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgYm9keS5hcHBlbmRDaGlsZChnZXRNZW51KCkpO1xufSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBib2R5LmlubmVySFRNTCA9ICcnO1xuICBib2R5LmFwcGVuZENoaWxkKGdldENvbnRhY3QoKSk7XG59KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuaW5nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZ2V0T3BlbmluZygpKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9