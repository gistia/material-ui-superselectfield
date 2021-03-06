var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { floatingLabelTypes } from './types';
import { floatingLabelDefaultProps } from './defaultProps';

var FloatingLabel = function (_Component) {
  _inherits(FloatingLabel, _Component);

  function FloatingLabel() {
    var _temp, _this, _ret;

    _classCallCheck(this, FloatingLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { flabelHeight: 0 }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  FloatingLabel.prototype.componentDidMount = function componentDidMount() {
    this.setState({ flabelHeight: this.flabel.offsetHeight });
  };

  FloatingLabel.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        _props$defaultColors = _props.defaultColors,
        floatingLabelColor = _props$defaultColors.floatingLabelColor,
        focusColor = _props$defaultColors.focusColor,
        disabled = _props.disabled,
        floatingLabelFocusStyle = _props.floatingLabelFocusStyle,
        floatingLabelStyle = _props.floatingLabelStyle,
        isFocused = _props.isFocused,
        shrink = _props.shrink;


    var defaultStyles = _extends({
      color: floatingLabelColor,
      cursor: 'pointer',
      lineHeight: '22px',
      pointerEvents: 'none',
      position: 'static',
      top: 0,
      transform: 'scale(1) translateY(0)',
      transformOrigin: 'left top',
      transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)', // transitions.easeOut(),
      userSelect: 'none',
      zIndex: 1 }, floatingLabelStyle);

    var focusStyles = isFocused && !disabled && shrink && _extends({ color: focusColor }, floatingLabelFocusStyle);

    var shrinkStyles = shrink && {
      cursor: 'default',
      pointerEvents: 'none',
      position: 'absolute',
      transform: 'scale(0.75) translateY(-' + this.state.flabelHeight + 'px)'
    };

    return React.createElement(
      'label',
      { ref: function ref(_ref) {
          return _this2.flabel = _ref;
        }, style: _extends({}, defaultStyles, shrinkStyles, focusStyles) },
      children
    );
  };

  return FloatingLabel;
}(Component);

FloatingLabel.propTypes = process.env.NODE_ENV !== "production" ? floatingLabelTypes : {};
FloatingLabel.defaultProps = floatingLabelDefaultProps;

export default FloatingLabel;