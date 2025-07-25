/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var product_detail;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/product-detail.js":
/*!**********************************!*\
  !*** ./src/js/product-detail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_product_detail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/product-detail.scss */ \"./src/sass/product-detail.scss\");\n\n// console.log('___detail page');\n// const boxes = document.querySelectorAll('.padding-p');\n// // Bấm vào ô → bật màu, tắt màu các ô còn lại\n// boxes.forEach(box => {\n//   box.addEventListener('click', function (e) {\n//     e.stopPropagation(); // Ngăn click lan ra ngoài\n//     boxes.forEach(b => b.classList.remove('active'));\n//     this.classList.add('active');\n//   });\n// });\n// // Bấm vào bất kỳ đâu ngoài box → tắt hết\n// document.addEventListener('click', () => {\n//   boxes.forEach(b => b.classList.remove('active'));\n// });\n// cộng trừ thêm giỏ hàng\nvar count = 1;\nwindow.increase = function () {\n  count++;\n  document.getElementById(\"quantity\").textContent = count;\n};\nwindow.decrease = function () {\n  if (count > 1) {\n    // Không giảm dưới 1\n    count--;\n    document.getElementById(\"quantity\").textContent = count;\n  }\n};\n\n//# sourceURL=webpack://modules/./src/js/product-detail.js?");

/***/ }),

/***/ "./src/sass/product-detail.scss":
/*!**************************************!*\
  !*** ./src/sass/product-detail.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modules/./src/sass/product-detail.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/product-detail.js");
/******/ 	(product_detail = typeof product_detail === "undefined" ? {} : product_detail).modules = __webpack_exports__;
/******/ 	
/******/ })()
;