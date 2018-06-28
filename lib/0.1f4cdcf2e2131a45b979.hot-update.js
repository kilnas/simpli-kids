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
	
	var _autoBind = __webpack_require__(176);
	
	var _autoBind2 = _interopRequireDefault(_autoBind);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Component = _react2.default.createClass({
	  displayName: 'Component',
	
	  // constructor(props) {
	  //   super(props);
	  //   this.state = {
	  //     test: test
	  //   }
	
	  //   autobind(this);
	  // }
	
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
	      )
	    );
	  },
	  propTypes: {
	    onRender: _react2.default.PropTypes.func
	  }
	});
	
	exports.default = Component;

/***/ },

/***/ 176:
/***/ function(module, exports) {

	'use strict';
	module.exports = (self, options) => {
		options = Object.assign({}, options);
	
		const filter = key => {
			const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
	
			if (options.include) {
				return options.include.some(match);
			}
	
			if (options.exclude) {
				return !options.exclude.some(match);
			}
	
			return true;
		};
	
		for (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {
			const val = self[key];
	
			if (key !== 'constructor' && typeof val === 'function' && filter(key)) {
				self[key] = val.bind(self);
			}
		}
	
		return self;
	};
	
	const excludedReactMethods = [
		'componentWillMount',
		'UNSAFE_componentWillMount',
		'render',
		'getSnapshotBeforeUpdate',
		'componentDidMount',
		'componentWillReceiveProps',
		'UNSAFE_componentWillReceiveProps',
		'shouldComponentUpdate',
		'componentWillUpdate',
		'UNSAFE_componentWillUpdate',
		'componentDidUpdate',
		'componentWillUnmount',
		'componentDidCatch',
		'setState',
		'forceUpdate'
	];
	
	module.exports.react = (self, options) => {
		options = Object.assign({}, options);
		options.exclude = (options.exclude || []).concat(excludedReactMethods);
		return module.exports(self, options);
	};


/***/ }

})
//# sourceMappingURL=0.1f4cdcf2e2131a45b979.hot-update.js.map