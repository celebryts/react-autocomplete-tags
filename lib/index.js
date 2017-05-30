(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactAutocompleteTags"] = factory();
	else
		root["ReactAutocompleteTags"] = factory();
})(this, function() {
return webpackJsonpReactAutocompleteTags([0],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (event) {
    return event ? new Key(event) : Key;
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * All the keys used in the application should be here
 */
var KEYS = {
    '8': 'backspace',
    '13': 'enter',
    '38': 'up',
    '40': 'down',
    '46': 'delete',
    '188': 'comma'
};

var STRING_KEYS = {
    'comma': ','
};

var Key = function () {
    /**
     * Get the key code from the Javascript event object
     * @param {object} event javascript event object
     */
    function Key(event) {
        _classCallCheck(this, Key);

        this._key = event.which || event.keyCode || event.charCode;
    }

    _createClass(Key, [{
        key: 'get',
        value: function get() {
            return this._key;
        }

        /**
         * Check if the keycode is relative to the name passed
         * @param {string} keyName key name based in the const KEYS
         * @return {bool}
         */

    }, {
        key: 'is',
        value: function is(keyName) {
            return KEYS[this.get()] === keyName;
        }

        /**
         * Check if the key is any of the keys passed
         * @param {string[]} keys list of keys
         * @return {bool}
         */

    }, {
        key: 'isAny',
        value: function isAny(keys) {
            var _this = this;

            return keys.some(function (key) {
                return _this.is(key);
            });
        }

        /**
         * Get keyCode based in key name
         * 
         * @static
         * @param {string} keyName 
         * @return {string}
         */

    }], [{
        key: 'getCharacter',
        value: function getCharacter(keyName) {
            return STRING_KEYS[keyName];
        }
    }]);

    return Key;
}();

/**
 * Wraps the default export function to create the Key function without the new keyword
 * @param {object} event javascript event object
 */

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(38);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(37);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = __webpack_require__(271);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Suggestions = function (_PureComponent) {
	_inherits(Suggestions, _PureComponent);

	function Suggestions(props) {
		_classCallCheck(this, Suggestions);

		var _this = _possibleConstructorReturn(this, (Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).call(this, props));

		_this._renderSuggestions = function (suggestions) {
			return suggestions.map(function (_ref, idx) {
				var label = _ref.label;

				return _react2.default.createElement(
					'li',
					{
						key: idx,
						onClick: _this._onClick.bind(_this, idx),
						className: _this.props.focused === idx ? _theme2.default.focused : null
					},
					label
				);
			});
		};

		_this._onClick = function (idx) {
			_this.setState({ suggestions: [] });
			_this.props.onClick(idx);
		};

		return _this;
	}

	_createClass(Suggestions, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    suggestions = _props.suggestions;

			//Loader?

			if (!suggestions || !suggestions.length) return null;

			return _react2.default.createElement(
				'div',
				{ className: _theme2.default.dropdown + ' ' + className },
				_react2.default.createElement(
					'ul',
					{ className: _theme2.default.suggestions },
					this._renderSuggestions(suggestions)
				)
			);
		}
	}]);

	return Suggestions;
}(_react.PureComponent);

Suggestions.propTypes = {
	className: _propTypes2.default.string,
	suggestions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		label: _propTypes2.default.string.isRequired,
		value: _propTypes2.default.string.isRequired
	})),
	onClick: _propTypes2.default.func,
	focused: _propTypes2.default.number
};
Suggestions.defaultProps = {
	className: '',
	suggestions: [],
	onClick: function onClick() {}
};
exports.default = Suggestions;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(38);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(37);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = __webpack_require__(272);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = function (_PureComponent) {
	_inherits(Tag, _PureComponent);

	function Tag() {
		_classCallCheck(this, Tag);

		return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
	}

	_createClass(Tag, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    value = _props.value,
			    onDelete = _props.onDelete;

			return _react2.default.createElement(
				'div',
				{ className: _theme2.default.tag },
				_react2.default.createElement(
					'div',
					{ className: _theme2.default.text },
					value
				),
				_react2.default.createElement(
					'span',
					{ className: _theme2.default.delete, onClick: onDelete },
					_react2.default.createElement(
						'svg',
						{ viewBox: '0 0 40 40', className: _theme2.default.deleteIcon },
						_react2.default.createElement('path', { className: _theme2.default.deleteX, d: 'M 12,12 L 28,28 M 28,12 L 12,28' })
					)
				)
			);
		}
	}]);

	return Tag;
}(_react.PureComponent);

Tag.propTypes = {
	value: _propTypes2.default.string.isRequired,
	onDelete: _propTypes2.default.func
};
Tag.defaultProps = {
	onDelete: function onDelete() {}
};
exports.default = Tag;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"theme_root__3tk","content":"theme_content__HmG","input":"theme_input__3vW","inputHidden":"theme_inputHidden__fcx"};

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(38);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(102);

var _propTypes = __webpack_require__(37);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = __webpack_require__(107);

var _theme2 = _interopRequireDefault(_theme);

var _Suggestions = __webpack_require__(105);

var _Suggestions2 = _interopRequireDefault(_Suggestions);

var _Tag = __webpack_require__(106);

var _Tag2 = _interopRequireDefault(_Tag);

var _Keys = __webpack_require__(104);

var _Keys2 = _interopRequireDefault(_Keys);

var _DOM = __webpack_require__(103);

var _DOM2 = _interopRequireDefault(_DOM);

var _debounce = __webpack_require__(100);

var _debounce2 = _interopRequireDefault(_debounce);

var _isEqual = __webpack_require__(101);

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validateTagsLimit = function validateTagsLimit(tags, limit) {
	if (!tags) return [];
	if (tags.length > limit) {
		throw new Error('Number of initial tags should be less than the tag limit');
	}
	return tags;
};

var TAG_SHAPE = _propTypes2.default.shape({
	label: _propTypes2.default.string.isRequired,
	value: _propTypes2.default.string.isRequired
});

var Autocomplete = function (_Component) {
	_inherits(Autocomplete, _Component);

	function Autocomplete(props) {
		_classCallCheck(this, Autocomplete);

		var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

		_this.state = {
			tags: validateTagsLimit(_this.props.tags, _this.props.limitTags),
			/* Used to focus tag */
			active: false,
			activeTag: null,
			value: '',
			input: true,
			suggestions: _this.props.suggestions,
			focusedSuggestion: null
		};

		_this._onChange = function (ev) {
			var hasKeys = _this.props.enterKeys.some(function (enterKey) {
				return (0, _Keys2.default)().getCharacter(enterKey) === ev.target.value;
			});
			if (hasKeys) return;
			_this.setState({ value: ev.target.value });

			var _this$props = _this.props,
			    delay = _this$props.delay,
			    onChange = _this$props.onChange,
			    enterKeys = _this$props.enterKeys;
			var value = ev.target.value;
			delay ? _this.onChangeDebounced(value) : onChange(value);
		};

		_this._onClick = function () {
			(0, _reactDom.findDOMNode)(_this.input).focus();
		};

		_this._onKeyDown = function (ev) {
			var key = (0, _Keys2.default)(ev);
			var value = ev.target.value;
			var _this$state = _this.state,
			    focusedSuggestion = _this$state.focusedSuggestion,
			    suggestions = _this$state.suggestions;

			var hasAnotherEnterKey = key.isAny(_this.props.enterKeys);

			_this.props.onKeyDown(ev.target.value);

			/* Create navigation on suggestions when key down */
			if (key.is('down')) {
				var newFocus = !_this.hasfocusedsuggestion() ? 0 : focusedSuggestion + 1;
				_this.setState({
					focusedSuggestion: newFocus > suggestions.length - 1 ? 0 : newFocus
				});
			}

			/* Create navigation on suggestions when key up */
			if (key.is('up')) {
				var _newFocus = focusedSuggestion - 1;
				_this.setState({
					focusedSuggestion: focusedSuggestion < 1 ? suggestions.length - 1 : _newFocus
				});
			}

			if (key.is('enter') || hasAnotherEnterKey) {
				_this._handleEnter(ev, value);
				hasAnotherEnterKey && _this.setState({ value: '' });
			}

			//Verify why is 8
			if (key.is('delete') || key.get() === 8) {
				_this._handleBackspace(ev);
			}
		};

		_this._onFocus = function () {
			_this.setState({ active: true });
			_this.props.onFocus();
		};

		_this._onBlur = function () {
			_this.setState({ active: false });
			_this.props.onBlur();
		};

		_this._onClickDelete = function (idx) {
			var newState = Object.assign({}, _this.state),
			    tags = newState.tags,
			    deletedTag = tags.splice(idx, 1);


			_this.setState({ tags: tags });
			_this.handleInputVisibility(tags.length - 1);
			_this.props.onDelete(deletedTag, tags);
		};

		_this.onClickSuggestion = function (idx) {
			var _this$state$suggestio = _this.state.suggestions[idx],
			    label = _this$state$suggestio.label,
			    value = _this$state$suggestio.value;

			_this._addTag(label, value);
		};

		_this._handleEnter = function (ev, value) {
			var _this$state2 = _this.state,
			    suggestions = _this$state2.suggestions,
			    focusedSuggestion = _this$state2.focusedSuggestion;
			var allowCreateTag = _this.props.allowCreateTag;

			var hasfocusedsuggestion = _this.hasfocusedsuggestion();

			if (allowCreateTag) {
				var tagToAdd = !hasfocusedsuggestion ? value : suggestions[focusedSuggestion].label;
				_this._addTag(tagToAdd, value);
			} else {
				if (hasfocusedsuggestion) {
					var _suggestions$focusedS = suggestions[focusedSuggestion],
					    labelToAdd = _suggestions$focusedS.label,
					    valueToAdd = _suggestions$focusedS.value;

					_this._addTag(labelToAdd, valueToAdd);
				}
			}
		};

		_this._handleBackspace = function (ev) {
			var state = _this.state;

			if (state.value === '' && state.tags.length) {
				var newState = Object.assign({}, state);
				_this._onClickDelete(newState.tags.length - 1);
				_this.setState({ tags: newState.tags });
			}
		};

		_this._addTag = function (label, value) {
			var _this$props2 = _this.props,
			    limitTags = _this$props2.limitTags,
			    allowCreateTag = _this$props2.allowCreateTag,
			    tags = _this.state.tags,
			    tagsLength = tags.length;

			label = label.trim();

			/* Verify if allowCreateTag, and allow or not */
			if (label == '' || !allowCreateTag && !_this._valueMatchSuggestions(label)) return;

			_this.setState({
				value: '',
				tags: !limitTags || tags.length < limitTags ? [].concat(_toConsumableArray(tags), [label]) : tags
			});
			_this.handleInputVisibility(tagsLength + 1);
			_this._clearSuggestions();
			_this.props.onAdd({ label: label, value: value });
		};

		_this._clearSuggestions = function () {
			_this.setState({
				suggestions: [],
				focusedSuggestion: null
			});
		};

		_this._valueMatchSuggestions = function (value) {
			return _this.state.suggestions.some(function (item) {
				return item.label === value;
			});
		};

		_this._enableCloseOnExit = function () {
			window.document.addEventListener('click', _this.closeOnClickIfIsDescendant, false);
		};

		_this._disableCloseOnExit = function () {
			window.document.removeEventListener('click', _this.closeOnClickIfIsDescendant);
		};

		_this.closeOnClickIfIsDescendant = function (ev) {
			var isDescendant = _DOM2.default.isDescendant(ev.target, (0, _reactDom.findDOMNode)(_this.root));
			if (!isDescendant) {
				_this._clearSuggestions();
			}
		};

		_this.handleInputVisibility = function (tagsLength) {
			var limitTags = _this.props.limitTags;

			if (!tagsLength) tagsLength = _this.state.tags.length;

			_this.setState({ input: limitTags ? tagsLength < limitTags : true });
		};

		_this.hasfocusedsuggestion = function () {
			return Number.isInteger(_this.state.focusedSuggestion);
		};

		_this.onChangeDebounced = (0, _debounce2.default)(function (value) {
			return _this.props.onChange(value);
		}, _this.props.delay);

		_this.input;
		_this.root;
		return _this;
	}

	_createClass(Autocomplete, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._enableCloseOnExit();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			/* Disable listener on document */
			this._disableCloseOnExit();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var suggestionsAreEqual = (0, _isEqual2.default)(nextProps.suggestions, this.props.suggestions);
			var newState = {};
			if (this.state.active && !suggestionsAreEqual) {
				newState.suggestions = nextProps.suggestions;
			}
			if (this.props.tags !== nextProps.tags) {
				newState.tags = validateTagsLimit(nextProps.tags, nextProps.limitTags);
			}
			if (newState) this.setState(newState);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    className = _props.className,
			    children = _props.children,
			    onKeyUp = _props.onKeyUp,
			    customLoader = _props.customLoader,
			    loaderPosition = _props.loaderPosition,
			    loader = _props.loader;
			var _state = this.state,
			    tags = _state.tags,
			    value = _state.value,
			    suggestions = _state.suggestions,
			    focusedSuggestion = _state.focusedSuggestion,
			    input = _state.input;

			return _react2.default.createElement(
				'div',
				null,
				loader && loaderPosition === 'top' && customLoader,
				_react2.default.createElement(
					'div',
					{
						className: className + ' ' + _theme2.default.root,
						onClick: this._onClick,
						ref: function ref(node) {
							return _this2.root = node;
						}
					},
					_react2.default.createElement(
						'div',
						{ className: _theme2.default.content },
						tags.map(function (tag, idx) {
							var valueToRender = typeof tag === 'string' ? tag : tag.label;
							return _react2.default.createElement(_Tag2.default, { value: valueToRender, key: idx, onDelete: _this2._onClickDelete.bind(_this2, idx) });
						}),
						_react2.default.createElement(
							'div',
							{ className: '' + (input ? _theme2.default.input : _theme2.default.inputHidden) },
							_react2.default.createElement('input', {
								type: 'text',
								ref: function ref(node) {
									return _this2.input = node;
								},
								onKeyUp: onKeyUp,
								onKeyDown: this._onKeyDown,
								onChange: this._onChange,
								onFocus: this._onFocus,
								onBlur: this._onBlur,
								value: value
							})
						),
						_react2.default.createElement(_Suggestions2.default, { suggestions: suggestions, onClick: this.onClickSuggestion, focused: focusedSuggestion })
					),
					loader && loaderPosition === 'bottom' && customLoader
				)
			);
		}

		/* It controls the input value */


		/* Handle click on container */


		/**
   * Delete tag from state
   * @param {Number} idx Tag index to be manipulated
   */


		/**
   * @param {Number} idx Suggestion index to be manipulated
   */


		/* On enter we add a tag in state.tags */


		/* On backspace we remove a tag if the input is empty */


		/**
   * Calling this method we add a new tag in state and turn the input empty
   * @param {String} value Text to be added in a new tag
   */


		/* Verify if the clicked target is inside the element, and close if necessary */


		/**
   * Handle input visibility based on limitTags
   * @param {Number} tagsLength You can pass the quantity of tags, because sometimes the current state is different from what we want
   */

	}]);

	return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
	className: _propTypes2.default.string,
	suggestions: _propTypes2.default.arrayOf(TAG_SHAPE),
	tags: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(TAG_SHAPE), _propTypes2.default.arrayOf(_propTypes2.default.string)]),
	limitTags: _propTypes2.default.number,
	delay: _propTypes2.default.number,
	allowCreateTag: _propTypes2.default.bool,
	loader: _propTypes2.default.bool,
	customLoader: _propTypes2.default.node,
	loaderPosition: _propTypes2.default.oneOf(['top', 'bottom']),
	children: _propTypes2.default.node,
	onKeyUp: _propTypes2.default.func,
	onKeyDown: _propTypes2.default.func,
	onAdd: _propTypes2.default.func,
	onDelete: _propTypes2.default.func,
	onFocus: _propTypes2.default.func,
	onBlur: _propTypes2.default.func,
	onChange: _propTypes2.default.func,
	enterKeys: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
Autocomplete.defaultProps = {
	className: '',
	suggestions: [],
	tags: [],
	allowCreateTag: true,
	loader: false,
	customLoader: null,
	loaderPosition: 'bottom',
	enterKeys: [],
	children: _react2.default.createElement('input', null),
	onKeyUp: function onKeyUp() {},
	onKeyDown: function onKeyDown() {},
	onAdd: function onAdd() {},
	onDelete: function onDelete() {},
	onFocus: function onFocus() {},
	onBlur: function onBlur() {},
	onChange: function onChange() {}
};
exports.default = Autocomplete;

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"theme_dropdown__28o","suggestions":"theme_suggestions__LVq","focused":"theme_focused__1Tp"};

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tag":"theme_tag__25f","text":"theme_text__1ns","delete":"theme_delete__3W-","deleteIcon":"theme_deleteIcon__13Y","deleteX":"theme_deleteX__NJm"};

/***/ })

},[270]);
});