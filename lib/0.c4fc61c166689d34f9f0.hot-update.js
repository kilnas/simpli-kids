webpackHotUpdate(0,{

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


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _autoBind = __webpack_require__(176);
	
	var _autoBind2 = _interopRequireDefault(_autoBind);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HomePage = function (_React$Component) {
	    _inherits(HomePage, _React$Component);
	
	    function HomePage(props) {
	        _classCallCheck(this, HomePage);
	
	        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
	
	        _this.state = {
	            cat: "cat"
	        };
	
	        (0, _autoBind2.default)(_this);
	        return _this;
	    }
	
	    _createClass(HomePage, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    ' meow '
	                )
	            );
	        }
	    }]);
	
	    return HomePage;
	}(_react2.default.Component);
	
	exports.default = HomePage;

/***/ }

})
//# sourceMappingURL=0.c4fc61c166689d34f9f0.hot-update.js.map