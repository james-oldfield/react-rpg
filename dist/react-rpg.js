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

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRpgPhoto = __webpack_require__(3);
	
	var _reactRpgPhoto2 = _interopRequireDefault(_reactRpgPhoto);
	
	var ReactRpg = function ReactRpg(_ref) {
	  var imagesArray = _ref.imagesArray;
	  var padding = _ref.padding;
	  var _ref$columns = _ref.columns;
	  var columns = _ref$columns === undefined ? 3 : _ref$columns;
	
	  var width = Math.floor(100 / columns);
	
	  var imageNodes = imagesArray.map(function (arr, index) {
	    return _react2['default'].createElement(_reactRpgPhoto2['default'], { key: index, url: arr.url, link: arr.link, width: width, padding: padding });
	  });
	
	  return _react2['default'].createElement(
	    'div',
	    { className: 'imageGrid' },
	    imageNodes
	  );
	};
	
	ReactRpg.propTypes = {
	  imagesArray: _react2['default'].PropTypes.array.isRequired,
	  columns: _react2['default'].PropTypes.number,
	  padding: _react2['default'].PropTypes.number
	};
	
	ReactRpg.defaultProps = {
	  imagesArray: []
	};
	
	exports['default'] = ReactRpg;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ReactRpgPhoto = function ReactRpgPhoto(_ref) {
	  var url = _ref.url;
	  var width = _ref.width;
	  var padding = _ref.padding;
	  var _ref$link = _ref.link;
	  var link = _ref$link === undefined ? url : _ref$link;
	  return (function () {
	    var styles = {
	      imageGridItem: {
	        display: 'inline-block',
	        width: width + '%',
	        boxSizing: 'border-box',
	        float: 'left',
	        padding: padding
	      },
	      imageWrapper: {
	        position: 'relative',
	        width: '100%',
	        paddingBottom: '100%',
	        backgroundImage: 'url(' + url + ')',
	        backgroundSize: 'cover',
	        backgroundPosition: 'center center',
	        backgroundRepeat: 'no-repeat'
	      }
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'imageGridItem', style: styles.imageGridItem },
	      _react2['default'].createElement(
	        'a',
	        { href: link },
	        _react2['default'].createElement('div', { className: 'imageWrapper', style: styles.imageWrapper })
	      )
	    );
	  })();
	};
	
	ReactRpgPhoto.propTypes = {
	  url: _react2['default'].PropTypes.string.isRequired,
	  width: _react2['default'].PropTypes.number.isRequired,
	  padding: _react2['default'].PropTypes.number,
	  link: _react2['default'].PropTypes.string
	};
	
	exports['default'] = ReactRpgPhoto;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-rpg.js.map