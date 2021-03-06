'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FloatingLabel = require('./FloatingLabel');

var _FloatingLabel2 = _interopRequireDefault(_FloatingLabel);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _types = require('./types');

var _defaultProps = require('./defaultProps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  column: { display: 'flex', flexDirection: 'column', flex: 'auto' },
  row: {
    alignItems: 'center',
    display: 'flex',
    flex: 'auto',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  selections: { flex: 1 },
  underline: { position: 'relative', marginTop: 4 }
};

var SelectionsPresenter = function SelectionsPresenter(_ref) {
  var disabled = _ref.disabled,
      dropDownIcon = _ref.dropDownIcon,
      errorStyle = _ref.errorStyle,
      errorText = _ref.errorText,
      floatingLabel = _ref.floatingLabel,
      floatingLabelFocusStyle = _ref.floatingLabelFocusStyle,
      floatingLabelStyle = _ref.floatingLabelStyle,
      hintText = _ref.hintText,
      isFocused = _ref.isFocused,
      isOpen = _ref.isOpen,
      muiTheme = _ref.muiTheme,
      selectedValues = _ref.selectedValues,
      selectionsRenderer = _ref.selectionsRenderer,
      underlineErrorStyle = _ref.underlineErrorStyle,
      underlineFocusStyle = _ref.underlineFocusStyle,
      underlineStyle = _ref.underlineStyle;
  var _muiTheme$textField = muiTheme.textField,
      borderColor = _muiTheme$textField.borderColor,
      floatingLabelColor = _muiTheme$textField.floatingLabelColor,
      focusColor = _muiTheme$textField.focusColor;


  var isValidObject = function isValidObject(obj) {
    return obj && Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).includes('value') && obj.value !== null;
  };

  // Condition for shrinking the floating Label
  var isShrunk = Array.isArray(selectedValues) && (!!selectedValues.length || isFocused) || !Array.isArray(selectedValues) && (isValidObject(selectedValues) || selectedValues === null && isFocused) || isOpen;

  var baseHRstyle = _extends({
    borderBottom: '1px solid',
    borderColor: borderColor,
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    bottom: 0,
    boxSizing: 'content-box',
    left: 0,
    margin: 0,
    position: 'absolute',
    width: '100%'
  }, underlineStyle, errorText ? _extends({ borderColor: 'red' }, underlineErrorStyle) : {});

  var focusedHRstyle = errorText ? underlineStyle : _extends({
    borderBottom: '2px solid',
    borderColor: isFocused && !disabled || isOpen ? focusColor : borderColor,
    transform: 'scaleX( ' + (isFocused && !disabled || isOpen ? 1 : 0) + ' )',
    transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)' }, underlineFocusStyle);

  var arrowDownIcon = (0, _react.cloneElement)(dropDownIcon || _react2.default.createElement(_arrowDropDown2.default, null), {
    style: {
      // fill: this.context.muiTheme.textField.borderColor,
      transform: 'rotate(' + (isOpen ? 180 : 0) + 'deg)'
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.column },
    _react2.default.createElement(
      'div',
      { style: styles.row },
      _react2.default.createElement(
        'div',
        { style: styles.selections },
        floatingLabel && _react2.default.createElement(
          _FloatingLabel2.default,
          {
            defaultColors: { floatingLabelColor: floatingLabelColor, focusColor: focusColor },
            disabled: disabled,
            floatingLabelFocusStyle: floatingLabelFocusStyle,
            floatingLabelStyle: floatingLabelStyle,
            isFocused: isFocused,
            shrink: isShrunk
          },
          floatingLabel
        ),
        (!floatingLabel || isShrunk) && selectionsRenderer(selectedValues, hintText)
      ),
      arrowDownIcon
    ),
    _react2.default.createElement(
      'div',
      { style: styles.underline },
      _react2.default.createElement('hr', { style: baseHRstyle }),
      _react2.default.createElement('hr', { style: _extends({}, baseHRstyle, focusedHRstyle) })
    ),
    errorText && _react2.default.createElement(
      'div',
      { style: _extends({ marginTop: 5, color: 'red', fontSize: 12 }, errorStyle) },
      errorText
    )
  );
};

SelectionsPresenter.propTypes = process.env.NODE_ENV !== "production" ? _types.selectionsPresenterTypes : {};
SelectionsPresenter.defaultProps = _defaultProps.selectionsPresenterDefaultProps;

exports.default = SelectionsPresenter;
module.exports = exports['default'];