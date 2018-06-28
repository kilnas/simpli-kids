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

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HomePage = function (_React$Component) {
	    _inherits(HomePage, _React$Component);
	
	    function HomePage(props) {
	        _classCallCheck(this, HomePage);
	
	        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
	    }
	
	    return HomePage;
	}(_react2.default.Component);

/***/ }

})
//# sourceMappingURL=0.36be04ff8be538e79217.hot-update.js.map