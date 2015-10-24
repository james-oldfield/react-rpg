(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactRpg"] = factory(require("react"));
	else
		root["ReactRpg"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	  ReactRpg: __webpack_require__(1)
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRpgPhoto = __webpack_require__(3);
	
	var _reactRpgPhoto2 = _interopRequireDefault(_reactRpgPhoto);
	
	var ReactRpg = (function (_React$Component) {
	  _inherits(ReactRpg, _React$Component);
	
	  function ReactRpg() {
	    _classCallCheck(this, ReactRpg);
	
	    _get(Object.getPrototypeOf(ReactRpg.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(ReactRpg, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var columns = _props.columns;
	      var imagesArray = _props.imagesArray;
	      var padding = _props.padding;
	
	      columns = columns || 3;
	      var width = Math.floor(100 / columns);
	
	      var imageNodes = imagesArray.map(function (arr, index) {
	        return _react2["default"].createElement(_reactRpgPhoto2["default"], { key: index, url: arr.url, link: arr.link, width: width, padding: padding });
	      });
	
	      return _react2["default"].createElement(
	        "div",
	        { className: "imageGrid" },
	        imageNodes
	      );
	    }
	  }]);
	
	  return ReactRpg;
	})(_react2["default"].Component);
	
	exports["default"] = ReactRpg;
	
	ReactRpg.propTypes = {
	  imagesArray: _react2["default"].PropTypes.array.isRequired,
	  columns: _react2["default"].PropTypes.number,
	  padding: _react2["default"].PropTypes.number
	};
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ReactRpgPhoto = (function (_React$Component) {
	  _inherits(ReactRpgPhoto, _React$Component);
	
	  function ReactRpgPhoto() {
	    _classCallCheck(this, ReactRpgPhoto);
	
	    _get(Object.getPrototypeOf(ReactRpgPhoto.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(ReactRpgPhoto, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var url = _props.url;
	      var width = _props.width;
	      var padding = _props.padding;
	      var link = _props.link;
	
	      link = link || url;
	
	      var styles = {
	        imageGridItem: {
	          display: "inline-block",
	          width: width + "%",
	          boxSizing: "border-box",
	          padding: padding
	        },
	        imageWrapper: {
	          position: "relative",
	          width: 100 + "%",
	          paddingBottom: 100 + "%",
	          backgroundImage: "url('" + url + "')",
	          backgroundSize: "cover",
	          backgroundPosition: "center center",
	          backgroundRepeat: "no-repeat"
	        }
	      };
	
	      return _react2["default"].createElement(
	        "div",
	        { className: "imageGridItem", style: styles.imageGridItem },
	        _react2["default"].createElement(
	          "a",
	          { href: link },
	          _react2["default"].createElement("div", { className: "imageWrapper", style: styles.imageWrapper })
	        )
	      );
	    }
	  }]);
	
	  return ReactRpgPhoto;
	})(_react2["default"].Component);
	
	exports["default"] = ReactRpgPhoto;
	
	ReactRpgPhoto.propTypes = {
	  url: _react2["default"].PropTypes.string.isRequired,
	  width: _react2["default"].PropTypes.number.isRequired,
	  padding: _react2["default"].PropTypes.number,
	  link: _react2["default"].PropTypes.string
	};
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-rpg.js.map