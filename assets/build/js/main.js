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

/***/ "./assets/src/js/config.js":
/*!*********************************!*\
  !*** ./assets/src/js/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateConfig = exports.config = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cookieName = 'config',
    defaultConfig = {
  isSideMenuOpened: true,
  selectedChild: 0
};

var config = function config() {
  if (Cookies.get(cookieName)) {
    return JSON.parse(Cookies.get(cookieName));
  }

  Cookies.set(cookieName, JSON.stringify(defaultConfig));
  return defaultConfig;
};

exports.config = config;

var updateConfig = function updateConfig(name, val) {
  var updatedConfig = JSON.stringify(_objectSpread({}, config(), _defineProperty({}, name, val)));
  Cookies.set(cookieName, updatedConfig);
  return updateConfig;
};

exports.updateConfig = updateConfig;

/***/ }),

/***/ "./assets/src/js/download.js":
/*!***********************************!*\
  !*** ./assets/src/js/download.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Download =
/*#__PURE__*/
function () {
  function Download() {
    _classCallCheck(this, Download);

    this.form = '#download-file';
    this.url = 'http://localhost/design-system/api/json/download';
    this.sampleData = 'user=person&pwd=password&organization=place&requiredkey=key';
    this.handleSubmit();
  }

  _createClass(Download, [{
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this = this;

      var $downloadForm = $(this.form);

      if ($downloadForm.length) {
        $downloadForm.on('submit', function (e) {
          e.preventDefault();

          _this.downloadFile({
            method: 'POST',
            url: _this.url,
            data: "data=".concat(_this.makePayload())
          }, $downloadForm.attr('data-file-name'));
        });
      }
    }
  }, {
    key: "makePayload",
    value: function makePayload() {
      var tempArr = [];
      $(this.form).find('[name]').each(function (i, e) {
        var name = $(e).attr('name');

        if (name.length && $(e).prop("checked")) {
          var value = $(e).val();
          tempArr = _toConsumableArray(tempArr).concat([name]);
        }
      });
      return JSON.stringify(tempArr);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(_ref, fileName) {
      var method = _ref.method,
          url = _ref.url,
          data = _ref.data;
      var request = new XMLHttpRequest();
      request.open(method, url, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.responseType = 'blob';
      var disposition = request.getResponseHeader('content-disposition');
      var matches = /"([^"]*)"/.exec(disposition);
      var filename = matches != null && matches[1] ? matches[1] : "".concat(fileName, ".zip"); // The actual download

      request.onload = function () {
        var blob = new Blob([request.response], {
          type: 'octet/stream'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }; // Temp solution 


      request.send(data);
    }
  }]);

  return Download;
}();

exports.default = Download;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/src/js/frame.js":
/*!********************************!*\
  !*** ./assets/src/js/frame.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _config = __webpack_require__(/*! ./config */ "./assets/src/js/config.js");

var _download = _interopRequireDefault(__webpack_require__(/*! ./download */ "./assets/src/js/download.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var designSystemUI =
/*#__PURE__*/
function () {
  function designSystemUI() {
    _classCallCheck(this, designSystemUI);

    this.toggleSideBar();
    this.copyToClipboard();
    this.downloadFiles();
    this.toggleMenu();
  }

  _createClass(designSystemUI, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var selector = 'ul.menu > li > a',
          className = 'open';
      $('ul.menu > li').eq((0, _config.config)().selectedChild).find('ul').slideDown().parent().addClass(className);
      $(selector).on('click', function (e) {
        e.preventDefault();
        (0, _config.updateConfig)('selectedChild', $(e.target).attr('data-index'));
        $(e.target).next().slideDown().parent().addClass(className).siblings().removeClass(className).find('ul').slideUp();
      });
    }
  }, {
    key: "toggleSideBar",
    value: function toggleSideBar() {
      if ((0, _config.config)().isSideMenuOpened) $('body').removeClass("side-menu-close");else $('body').addClass("side-menu-close");
      $('.back-arrow a').on('click', function (e) {
        e.preventDefault();
        (0, _config.updateConfig)('isSideMenuOpened', !(0, _config.config)().isSideMenuOpened);
        $('body').toggleClass("side-menu-close");
      });
    }
  }, {
    key: "downloadFiles",
    value: function downloadFiles() {
      $(document).on('click', '.download-files', function (e) {
        $.ajax({
          url: 'function.php',
          type: 'POST',
          data: {
            data: {
              function: 'download_files',
              files: data
            }
          },
          dataType: 'json',
          success: function success(data) {
            console.log(data);
          },
          error: function error(_error) {
            console.log(_error);
          }
        });
      });
    }
  }, {
    key: "copyToClipboard",
    value: function copyToClipboard() {
      var pres = $("pre");

      if (pres !== null) {
        pres.each(function (i, ele) {
          $(ele).prepend("<div class=\"copy\" style=\"cursor:pointer;\">copy</div>");
        });
      } // create clipboard for every copy element


      var clipboard = new ClipboardJS('.copy', {
        target: function target(trigger) {
          return trigger.nextElementSibling;
        }
      }); // do stuff when copy is clicked

      clipboard.on('success', function (event) {
        $(event.trigger).text('copied!');
        setTimeout(function () {
          event.clearSelection();
          $(event.trigger).text('copy');
        }, 2000);
      });
    }
  }]);

  return designSystemUI;
}();

console.log($);
/* 
$(document).ready(()=>{
    new designSystemUI();
    new download();
}) */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/src/js/main.js":
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./frame */ "./assets/src/js/frame.js");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./assets/src/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assets/src/js/main.js */"./assets/src/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map