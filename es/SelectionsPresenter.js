const _extends =
  Object.assign ||
  function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

import React, { cloneElement } from 'react';
import FloatingLabel from './FloatingLabel';
import DropDownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { selectionsPresenterTypes } from './types';
import { selectionsPresenterDefaultProps } from './defaultProps';

const styles = {
  column: { display: 'flex', flexDirection: 'column', flex: 'auto' },
  row: {
    alignItems: 'center',
    display: 'flex',
    flex: 'auto',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  selections: { flex: 1 },
  underline: { position: 'relative', marginTop: 4 },
};

const SelectionsPresenter = function SelectionsPresenter (_ref) {
  let disabled = _ref.disabled,
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
  let _muiTheme$textField = muiTheme.textField,
    borderColor = _muiTheme$textField.borderColor,
    floatingLabelColor = _muiTheme$textField.floatingLabelColor,
    focusColor = _muiTheme$textField.focusColor;

  const isValidObject = function isValidObject (obj) {
    return (
      obj &&
      Object.prototype.toString.call(obj) === '[object Object]' &&
      Object.keys(obj).includes('value') &&
      obj.value !== null
    );
  };

  // Condition for shrinking the floating Label
  const isShrunk =
    (Array.isArray(selectedValues) && (!!selectedValues.length || isFocused)) ||
    (!Array.isArray(selectedValues) && (isValidObject(selectedValues) || (selectedValues === null && isFocused))) ||
    isOpen;

  const baseHRstyle = _extends(
    {
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
      width: '100%',
    },
    underlineStyle,
    errorText ? _extends({ borderColor: 'red' }, underlineErrorStyle) : {}
  );

  const focusedHRstyle = errorText
    ? underlineStyle
    : _extends(
      {
        borderBottom: '2px solid',
        borderColor: (isFocused && !disabled) || isOpen ? focusColor : borderColor,
        transform: 'scaleX( ' + ((isFocused && !disabled) || isOpen ? 1 : 0) + ' )',
        transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)',
      },
      underlineFocusStyle
    );

  const arrowDownIcon = cloneElement(dropDownIcon || React.createElement(DropDownArrow, null), {
    style: {
      // fill: this.context.muiTheme.textField.borderColor,
      transform: 'rotate(' + (isOpen ? 180 : 0) + 'deg)',
    },
  });

  return React.createElement(
    'div',
    { style: styles.column },
    React.createElement(
      'div',
      { style: styles.row },
      React.createElement(
        'div',
        { style: styles.selections },
        floatingLabel &&
          React.createElement(
            FloatingLabel,
            {
              defaultColors: { floatingLabelColor: floatingLabelColor, focusColor: focusColor },
              disabled: disabled,
              floatingLabelFocusStyle: floatingLabelFocusStyle,
              floatingLabelStyle: floatingLabelStyle,
              isFocused: isFocused,
              shrink: isShrunk,
            },
            floatingLabel
          ),
        (!floatingLabel || isShrunk) && selectionsRenderer(selectedValues, hintText)
      ),
      arrowDownIcon
    ),
    React.createElement(
      'div',
      { style: styles.underline },
      React.createElement('hr', { style: baseHRstyle }),
      React.createElement('hr', { style: _extends({}, baseHRstyle, focusedHRstyle) })
    ),
    errorText &&
      React.createElement(
        'div',
        { style: _extends({ marginTop: 5, color: 'red', fontSize: 12 }, errorStyle) },
        errorText
      )
  );
};

SelectionsPresenter.propTypes = process.env.NODE_ENV !== 'production' ? selectionsPresenterTypes : {};
SelectionsPresenter.defaultProps = selectionsPresenterDefaultProps;

export default SelectionsPresenter;
