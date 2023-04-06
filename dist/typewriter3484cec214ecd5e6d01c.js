/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/typewritter.js":
/*!****************************!*\
  !*** ./src/typewritter.js ***!
  \****************************/
/***/ (() => {

eval("/** @format */\r\n\r\nvar textarea = document.getElementById(\"typing\");\r\n\r\nvar customNodeCreator = function (character) {\r\n  // Add character to input placeholder\r\n  textarea.placeholder = textarea.placeholder + character;\r\n\r\n  // Return null to skip internal adding of dom node\r\n  return null;\r\n};\r\n\r\nvar onRemoveNode = function ({ character }) {\r\n  if (textarea.placeholder) {\r\n    // Remove last character from input placeholder\r\n    textarea.placeholder = textarea.placeholder.slice(0, -1);\r\n  }\r\n};\r\n\r\nvar typewriters = new Typewriter(null, {\r\n  loop: true,\r\n  delay: 85,\r\n  onCreateTextNode: customNodeCreator,\r\n  onRemoveNode: onRemoveNode,\r\n});\r\n\r\ntypewriters.typeString(\"Type to add an item....\").pauseFor(1000).start();\r\n/* typewriterfor placeholder-end*/\r\n\n\n//# sourceURL=webpack://webpack-crash_course/./src/typewritter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/typewritter.js"]();
/******/ 	
/******/ })()
;