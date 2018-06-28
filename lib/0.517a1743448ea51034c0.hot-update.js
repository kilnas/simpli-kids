webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Component = __webpack_require__(170);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	__webpack_require__(171);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	  _reactDom2.default.render(_react2.default.createElement(_Component2.default, null), document.querySelector('#container'));
	};

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pagesHomePage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".pagesHomePage.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _pagesHomePage2 = _interopRequireDefault(_pagesHomePage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Component = _react2.default.createClass({
	  displayName: 'Component',
	
	  getInitialState: function getInitialState() {
	    return { message: 'Hello!' };
	  },
	
	  render: function render() {
	    if (this.props.onRender) {
	      this.props.onRender();
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'jumbotron' },
	        'Simpli Kids'
	      ),
	      _react2.default.createElement(_pagesHomePage2.default, null)
	    );
	  },
	  propTypes: {
	    onRender: _react2.default.PropTypes.func
	  }
	});
	
	exports.default = Component;

/***/ }

})
//# sourceMappingURL=0.517a1743448ea51034c0.hot-update.js.map