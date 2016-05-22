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

	'use strict';
	
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
	  var _ref$padding = _ref.padding;
	  var padding = _ref$padding === undefined ? 0 : _ref$padding;
	  var _ref$columns = _ref.columns;
	  var columns = _ref$columns === undefined ? [1, 2, 3] : _ref$columns;
	
	  var imageNodes = imagesArray.map(function (arr, index) {
	    return _react2['default'].createElement(_reactRpgPhoto2['default'], { key: index, url: arr.url, columns: columns, padding: padding, clickHandler: arr.clickHandler });
	  });
	
	  var cssBreakpoints = '\n    .imageGridItem { width: ' + Math.floor(100 / columns[0]) + '%; }\n\n    @media only screen and (min-width : 480px) {\n      .imageGridItem { width: ' + Math.floor(100 / columns[1]) + '%; }\n    }\n    @media only screen and (min-width : 992px) {\n      .imageGridItem { width: ' + Math.floor(100 / columns[2]) + '%; }\n    }\n  ';
	
	  return _react2['default'].createElement(
	    'div',
	    { className: 'imageGrid' },
	    _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: cssBreakpoints } }),
	    imageNodes
	  );
	};
	
	ReactRpg.propTypes = {
	  imagesArray: _react2['default'].PropTypes.array.isRequired,
	  columns: _react2['default'].PropTypes.array,
	  padding: _react2['default'].PropTypes.number
	};
	
	ReactRpg.defaultProps = {
	  imagesArray: [],
	  columns: [1, 2, 3],
	  padding: 0
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
	  var padding = _ref.padding;
	  var _ref$clickHandler = _ref.clickHandler;
	  var clickHandler = _ref$clickHandler === undefined ? null : _ref$clickHandler;
	
	  var pointer = clickHandler ? 'pointer' : 'auto';
	
	  var styles = {
	    imageGridItem: {
	      display: 'inline-block',
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
	      backgroundRepeat: 'no-repeat',
	      cursor: pointer
	    }
	  };
	
	  return _react2['default'].createElement(
	    'div',
	    { className: 'imageGridItem', style: styles.imageGridItem },
	    _react2['default'].createElement(
	      'a',
	      { onClick: clickHandler ? clickHandler.bind(undefined, url) : null },
	      _react2['default'].createElement('div', { className: 'imageWrapper', style: styles.imageWrapper })
	    )
	  );
	};
	
	ReactRpgPhoto.propTypes = {
	  url: _react2['default'].PropTypes.string.isRequired,
	  padding: _react2['default'].PropTypes.number,
	  clickHandler: _react2['default'].PropTypes.func
	};
	
	exports['default'] = ReactRpgPhoto;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-rpg.js.map