/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! GemunuLibre-VariableFont_wght.ttf */ \"./src/GemunuLibre-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: \\\"MyWebFont\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\");\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"MyWebFont\\\", Fallback, sans-serif;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background-color: blanchedalmond;\\r\\n}\\r\\n\\r\\n.nav-logo {\\r\\n  width: 90px;\\r\\n  height: auto;\\r\\n  padding: 5px;\\r\\n  margin-top: 13px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: 84px 27px;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  overflow: hidden;\\r\\n  background-color: #333;\\r\\n}\\r\\n\\r\\nnav ul > li {\\r\\n  text-align: center;\\r\\n  padding: 16px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nfooter p a {\\r\\n  text-decoration: none;\\r\\n  color: yellow;\\r\\n}\\r\\n\\r\\nnav ul li a {\\r\\n  color: yellow;\\r\\n  font-size: 1.5em;\\r\\n  font-weight: 900;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.info {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: start;\\r\\n}\\r\\n\\r\\nnav ul ul > li:hover {\\r\\n  background-color: #111;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  margin: 0 auto;\\r\\n  width: 400px;\\r\\n  font-size: 2em;\\r\\n  padding-top: 15px;\\r\\n  color: darkcyan;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  display: flex;\\r\\n  flex-flow: row wrap;\\r\\n  gap: 10% 5%;\\r\\n  justify-content: center;\\r\\n  margin: 1% 5%;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  margin: 15px 10px;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  padding: 5px 5px;\\r\\n}\\r\\n\\r\\n.card h3 {\\r\\n  width: 220px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  padding: 10px 15px;\\r\\n  background-color: slateblue;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  color: #fff;\\r\\n  font-size: 1em;\\r\\n  transition-duration: 1s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  background-color: darkred;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  padding: 5px 5px;\\r\\n  font-size: 1.1em;\\r\\n  color: deeppink;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  color: #fff;\\r\\n  font-size: 22px;\\r\\n  background: #333;\\r\\n  text-align: center;\\r\\n  padding: 1rem;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n/* popup window */\\r\\n\\r\\n.popup-container {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: 10;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  overflow: auto;\\r\\n  background-color: brown;\\r\\n  opacity: 99%;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background-color: bisque;\\r\\n  padding: 2rem;\\r\\n  width: 80%;\\r\\n  height: auto;\\r\\n  margin: 5% 10%;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: flex;\\r\\n  height: 60%;\\r\\n}\\r\\n\\r\\n.summary {\\r\\n  text-align: justify;\\r\\n  padding: 0 10px;\\r\\n  font-size: 1.1em;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.info li {\\r\\n  width: 400px;\\r\\n  padding: 5px 5px;\\r\\n  font-size: 1.2em;\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\n.summary p {\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.popup img {\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 14px;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  width: 30%;\\r\\n  margin: 8px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: rgb(250, 235, 215);\\r\\n}\\r\\n\\r\\n.close {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.details .btn {\\r\\n  margin-right: 50px;\\r\\n  width: 150px;\\r\\n  height: 50px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_get_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/get-api */ \"./src/module/get-api.js\");\n/* harmony import */ var _module_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/modal */ \"./src/module/modal.js\");\n/* harmony import */ var _module_interact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/interact */ \"./src/module/interact.js\");\n\n\n\n\n\nconst displayMovie = (movie, like = null) => `<div class=\"card\">\n                    <div>\n                        <img class=\"card-img\" src=\"${movie.image.medium}\">\n                    </div>\n                    <div>\n                        <h3> ${movie.name} </h3>\n                        <p class=\"likes\"> <i class=\"fas fa-heart like\" data-id=\"${movie.id}\"> <span class=\"num\"> ${like} </span> </i>  likes </p>\n                        <button class=\"btn\" data-id=\"${movie.id}\"> comments </button>\n                    </div>\n   </div>`;\n\nconst modalHolder = document.querySelector('.modal');\nconst displayModal = async (movieId) => {\n  const movie = await (0,_module_get_api__WEBPACK_IMPORTED_MODULE_1__.getMovieById)(movieId);\n  modalHolder.innerHTML = (0,_module_modal__WEBPACK_IMPORTED_MODULE_2__.modal)(movie);\n  const popContainer = document.querySelector('.popup-container');\n  popContainer.style.display = 'block';\n  popContainer.style.visibility = 'visible';\n  const close = document.querySelector('.close');\n  close.addEventListener('click', () => {\n    popContainer.style.display = 'none';\n    popContainer.style.visibility = 'hidden';\n  });\n\n  const currentDate = () => {\n    const date = new Date();\n    return date.toISOString().split('T')[0];\n  };\n\n  (0,_module_modal__WEBPACK_IMPORTED_MODULE_2__.getComments)(movieId);\n  const commentForm = document.getElementById('comment-form');\n  commentForm.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const [name, comment] = commentForm;\n    const comme = {\n      item_id: movieId,\n      username: name.value,\n      comment: comment.value,\n    };\n    (0,_module_modal__WEBPACK_IMPORTED_MODULE_2__.addComment)(comme);\n    if (document.querySelector('.comments').innerHTML === '<p>No comments found</p>') {\n      document.querySelector('.comments').innerHTML = '';\n    }\n    document.querySelector('.comments').innerHTML\n    += `<li><span>${currentDate()}</span> | <span>${comme.username}:</span> ${comme.comment}</li>`;\n    (0,_module_modal__WEBPACK_IMPORTED_MODULE_2__.updateCount)();\n    commentForm.reset();\n  });\n};\n\nconst listMovie = document.querySelector('.movies');\nconst moviesComponent = async () => {\n  const likes = await (0,_module_interact__WEBPACK_IMPORTED_MODULE_3__.getLikes)();\n  listMovie.innerHTML = '';\n  const list = await (0,_module_get_api__WEBPACK_IMPORTED_MODULE_1__.getMovies)();\n  (0,_module_get_api__WEBPACK_IMPORTED_MODULE_1__.countMovies)(list);\n  list.forEach((item) => {\n    let count = 0;\n    const num = likes.find((like) => item.id === Number(like.item_id));\n    if (num !== undefined) {\n      count = num.likes;\n    } else {\n      count = 0;\n    }\n    listMovie.innerHTML += displayMovie(item, count);\n  });\n\n  const like = document.querySelectorAll('.like');\n  like.forEach((item) => {\n    item.addEventListener('click', () => {\n      const movieId = item.getAttribute('data-id');\n      if (item.style.color !== 'skyblue') {\n        item.style.color = 'skyblue';\n        item.firstElementChild.innerHTML = Number(item.firstElementChild.innerHTML) + 1;\n        (0,_module_interact__WEBPACK_IMPORTED_MODULE_3__.addLike)(movieId);\n      }\n    });\n  });\n\n  const btn = document.querySelectorAll('.btn');\n  btn.forEach((item) => {\n    item.addEventListener('click', async () => {\n      const movieId = item.getAttribute('data-id');\n      displayModal(movieId);\n    });\n  });\n};\n\nmoviesComponent();\n\n//# sourceURL=webpack://js-capstone-webapp/./src/index.js?");

/***/ }),

/***/ "./src/module/get-api.js":
/*!*******************************!*\
  !*** ./src/module/get-api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies),\n/* harmony export */   \"getMovieById\": () => (/* binding */ getMovieById),\n/* harmony export */   \"countMovies\": () => (/* binding */ countMovies)\n/* harmony export */ });\nconst getMovies = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  return response.json();\n};\n\nconst getMovieById = async (id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\n  return response.json();\n};\n\nconst countMovies = (movies) => {\n  if (movies.length) {\n    document.querySelector('.count-movies').innerHTML = `${movies.length}`;\n  }\n};\n\n//# sourceURL=webpack://js-capstone-webapp/./src/module/get-api.js?");

/***/ }),

/***/ "./src/module/interact.js":
/*!********************************!*\
  !*** ./src/module/interact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseURL\": () => (/* binding */ baseURL),\n/* harmony export */   \"appId\": () => (/* binding */ appId),\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst appId = 'byg3KtvqOhmd3Xt9Axu5';\n\nconst addLike = async (itemId) => {\n  fetch(`${baseURL}apps/${appId}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemId }),\n  });\n};\n\nconst getLikes = async () => {\n  const response = await fetch(`${baseURL}apps/${appId}/likes`,\n    {\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n  return response.json();\n};\n\n\n//# sourceURL=webpack://js-capstone-webapp/./src/module/interact.js?");

/***/ }),

/***/ "./src/module/modal.js":
/*!*****************************!*\
  !*** ./src/module/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"countComments\": () => (/* binding */ countComments),\n/* harmony export */   \"updateCount\": () => (/* binding */ updateCount),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment)\n/* harmony export */ });\n/* harmony import */ var _interact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact */ \"./src/module/interact.js\");\n\n\nconst modal = (movie) => `<div class=\"popup-container\">\n                <div class=\"popup\">\n                    <button class=\"btn close\">&times;</button>\n                    <div class=\"details\">\n                        <div>\n                            <img class=\"img\" src=\"${movie.image.medium}\" height=\"450\" width=\"370\"/>\n                        </div>\n                        <div class=\"summary\">\n                            <ul class=\"info\">\n                                <li><h1> ${movie.name} </h1></li>\n                                <li> Language: ${movie.language}</li>\n                                <li> Type: ${movie.type}</li>\n                                <li> Premiered: ${movie.premiered}</li>\n                                <li> Rating: ${movie.rating.average}</li>\n                                <li> Network: ${movie.network.name}</li>\n                            </ul>\n                            <p> ${movie.summary} </p>\n                        </div>                      \n                    </div>\n                  \n                    <div>\n                        <h2 id=\"count\"> Comments  </h2>\n                        <ul class=\"comments\">\n                        </ul>\n                    </div>\n                    <div>\n                        <form id=\"comment-form\" name=\"comment-form\" class=\"details\">\n                            <input type=\"text\" name=\"name\" placeholder=\"Your name\" required/>\n                            <input type=\"text\" name=\"comment\" placeholder=\"Leave a comment\" required/>\n                            <button class=\"btn\">Post</button>\n                        </form>\n                    </div>\n                </div>\n            </div>`;\n\nconst displayComments = (comments) => {\n  const list = document.querySelector('.comments');\n  if (!comments.length) {\n    list.innerHTML = '<p>No comments found</p>';\n  } else {\n    comments.forEach((item) => {\n      list.innerHTML += `<li><span>${item.creation_date}</span> | <span>${item.username}:</span> ${item.comment}</li>`;\n    });\n  }\n};\n\nconst countComments = (comments) => {\n  if (comments.length) {\n    document.getElementById('count').innerHTML = `Comments ( <span class=\"fig\">${comments.length}</span> )`;\n  }\n};\n\nconst updateCount = () => {\n  if (document.getElementById('count').innerHTML === ' Comments  ') {\n    document.getElementById('count').innerHTML = 'Comments ( <span class=\"fig\">1</span> )';\n  } else {\n    let test = Number(document.querySelector('.fig').innerHTML);\n    test += 1;\n    document.querySelector('.fig').innerHTML = `${test}`;\n  }\n};\n\nconst getComments = async (movieID) => {\n  const response = await fetch(`${_interact__WEBPACK_IMPORTED_MODULE_0__.baseURL}apps/${_interact__WEBPACK_IMPORTED_MODULE_0__.appId}/comments?item_id=${movieID}`, {\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  const comments = await response.json();\n  displayComments(comments);\n  countComments(comments);\n};\n\nconst addComment = async (comment) => {\n  fetch(`${_interact__WEBPACK_IMPORTED_MODULE_0__.baseURL}apps/${_interact__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(comment),\n  });\n};\n\n//# sourceURL=webpack://js-capstone-webapp/./src/module/modal.js?");

/***/ }),

/***/ "./src/GemunuLibre-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/GemunuLibre-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa8f03285f582b2d73ce.ttf\";\n\n//# sourceURL=webpack://js-capstone-webapp/./src/GemunuLibre-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1a21f7dea14f3c3b440.png\";\n\n//# sourceURL=webpack://js-capstone-webapp/./src/images/logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;