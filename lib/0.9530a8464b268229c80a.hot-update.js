webpackHotUpdate(0,{

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HomePage = __webpack_require__(177);
	
	var _HomePage2 = _interopRequireDefault(_HomePage);
	
	var _PopUp = __webpack_require__(178);
	
	var _PopUp2 = _interopRequireDefault(_PopUp);
	
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
	      _react2.default.createElement(_HomePage2.default, null)
	    );
	  },
	  propTypes: {
	    onRender: _react2.default.PropTypes.func
	  }
	});
	
	exports.default = Component;

/***/ }

})
//# sourceMappingURL=0.9530a8464b268229c80a.hot-update.js.map