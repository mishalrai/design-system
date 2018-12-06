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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/main.js":
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: \nAs of v7.0.0-beta.55, we've removed Babel's Stage presets.\nPlease consider reading our blog post on this decision at\nhttps://babeljs.io/blog/2018/07/27/removing-babels-stage-presets\nfor more details. TL;DR is that it's more beneficial in the\n  long run to explicitly add which proposals to use.\n\nFor a more automatic migration, we have updated babel-upgrade,\nhttps://github.com/babel/babel-upgrade to do this for you with\n\"npx babel-upgrade\".\n\nIf you want the same configuration as before:\n\n{\n  \"plugins\": [\n    \"@babel/plugin-syntax-dynamic-import\",\n    \"@babel/plugin-syntax-import-meta\",\n    [\"@babel/plugin-proposal-class-properties\", { \"loose\": false }],\n    \"@babel/plugin-proposal-json-strings\"\n  ]\n}\n\n\nIf you're using the same configuration across many separate projects,\nkeep in mind that you can also create your own custom presets with\nwhichever plugins and presets you're looking to use.\n\nmodule.exports = function() {\n  return {\n    plugins: [\n      require(\"@babel/plugin-syntax-dynamic-import\"),\n      [require(\"@babel/plugin-proposal-decorators\"), { \"legacy\": true }],\n      [require(\"@babel/plugin-proposal-class-properties\"), { \"loose\": false }],\n    ],\n    presets: [\n      // ...\n    ],\n  };\n};\n (While processing preset: \"E:\\\\wamp\\\\www\\\\design-system\\\\node_modules\\\\@babel\\\\preset-stage-3\\\\lib\\\\index.js\")\n    at _default (E:\\wamp\\www\\design-system\\node_modules\\@babel\\preset-stage-3\\lib\\index.js:9:9)\n    at E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:317:46\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (E:\\wamp\\www\\design-system\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (E:\\wamp\\www\\design-system\\node_modules\\babel-loader\\lib\\index.js:50:20)\n    at Object.module.exports (E:\\wamp\\www\\design-system\\node_modules\\babel-loader\\lib\\index.js:173:20)");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./assets/src/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assets/src/js/main.js */"./assets/src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map