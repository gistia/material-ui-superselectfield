var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Raphaël Morineau on 28 Oct 2016.
 */
import React, { Component } from 'react';
import { object } from 'prop-types';
import InfiniteScroller from 'react-infinite';
import ListItem from 'material-ui/List/ListItem';
import Popover from 'material-ui/Popover/Popover';
import TextField from 'material-ui/TextField/TextField';
import SelectionsPresenter from './SelectionsPresenter';
import { getChildrenLength, areEqual } from './utils';
import { selectFieldTypes } from './types';
import { selectFieldDefaultProps } from './defaultProps';

var SelectField = (_temp = _class = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField(props, context) {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    var children = props.children,
        value = props.value,
        multiple = props.multiple,
        showAutocompleteThreshold = props.showAutocompleteThreshold;

    var itemsLength = getChildrenLength(children);
    _this.state = {
      isOpen: false,
      isFocused: false,
      initialValue: value || (multiple ? [] : null),
      itemsLength: itemsLength,
      isAutocompleteShown: _this.showAutocomplete(showAutocompleteThreshold, itemsLength),
      selectedItems: value || (multiple ? [] : null),
      searchText: ''
    };
    _this.menuItems = [];
    return _this;
  }

  SelectField.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!areEqual(nextProps.value, this.state.selectedItems)) {
      this.setState({ selectedItems: nextProps.value });
    }
    if (!areEqual(nextProps.children, this.props.children)) {
      var itemsLength = getChildrenLength(nextProps.children);
      this.setState({
        itemsLength: itemsLength,
        isAutocompleteShown: this.showAutocomplete(this.props.showAutocompleteThreshold, itemsLength)
      });
    }
  };

  SelectField.prototype.showAutocomplete = function showAutocomplete() {
    var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var itemsLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (typeof threshold === 'number') return itemsLength >= threshold;
    switch (threshold) {
      case 'always':
        return true;
      case 'never':
      default:
        return false;
    }
  };

  SelectField.prototype.componentDidMount = function componentDidMount() {
    // Potential problem with Popover ?
    // https://github.com/callemall/material-ui/blob/master/src/DropDownMenu/DropDownMenu.js#L237
    if (this.props.openImmediately) this.openMenu();
  };

  SelectField.prototype.openMenu = function openMenu() {
    var _this2 = this;

    if (!this.state.isOpen) this.props.onMenuOpen();
    if (this.state.itemsLength || this.props.showAutocompleteThreshold === 'always') {
      this.setState({ isOpen: true }, function () {
        return _this2.focusTextField();
      });
    }
  };

  // FIXME: both focusTextField and focusMenuItem don't really focus the targeted element, user must hit another key to trigger the actual focus... need to find a solution for a true direct focus


  SelectField.prototype.focusMenuItem = function focusMenuItem(index) {
    var targetMenuItem = this.menuItems.find(function (item) {
      return !!item && (index ? item.props.tabIndex === index : true);
    });
    if (targetMenuItem) targetMenuItem.applyFocusState('keyboard-focused');
  };

  SelectField.prototype.focusTextField = function focusTextField() {
    this.state.isAutocompleteShown && this.searchTextField ? this.searchTextField.focus() : this.focusMenuItem();
  };

  SelectField.prototype.clearTextField = function clearTextField(callback) {
    this.props.keepSearchOnSelect ? typeof callback === 'function' && callback() // don't reset the autocomplete
    : this.setState({ searchText: '' }, callback);
  };

  /**
   * Main Component Wrapper methods
   */
  // toggle instead of close ? (in case user changes targetOrigin/anchorOrigin)


  /**
   * TextField autocomplete methods
   */


  /**
   * Menu Header methods
   */


  /**
   * Menu methods
   */


  // group must be of type 'optgroup'


  // TODO: add Shift+Tab
  /**
   * this.menuItems can contain uncontinuous React elements, because of filtering
   */


  SelectField.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        anchorOrigin = _props.anchorOrigin,
        autocompleteFilter = _props.autocompleteFilter,
        autocompleteStyle = _props.autocompleteStyle,
        autocompleteUnderlineFocusStyle = _props.autocompleteUnderlineFocusStyle,
        autocompleteUnderlineStyle = _props.autocompleteUnderlineStyle,
        canAutoPosition = _props.canAutoPosition,
        checkPosition = _props.checkPosition,
        checkedIcon = _props.checkedIcon,
        children = _props.children,
        disabled = _props.disabled,
        dropDownIcon = _props.dropDownIcon,
        elementHeight = _props.elementHeight,
        errorStyle = _props.errorStyle,
        errorText = _props.errorText,
        floatingLabel = _props.floatingLabel,
        floatingLabelFocusStyle = _props.floatingLabelFocusStyle,
        floatingLabelStyle = _props.floatingLabelStyle,
        hintText = _props.hintText,
        hintTextAutocomplete = _props.hintTextAutocomplete,
        hoverColor = _props.hoverColor,
        innerDivStyle = _props.innerDivStyle,
        menuCloseButton = _props.menuCloseButton,
        menuFooterStyle = _props.menuFooterStyle,
        menuGroupStyle = _props.menuGroupStyle,
        menuStyle = _props.menuStyle,
        multiple = _props.multiple,
        nb2show = _props.nb2show,
        noMatchFound = _props.noMatchFound,
        noMatchFoundStyle = _props.noMatchFoundStyle,
        popoverClassName = _props.popoverClassName,
        popoverWidth = _props.popoverWidth,
        resetButton = _props.resetButton,
        selectAllButton = _props.selectAllButton,
        selectedMenuItemStyle = _props.selectedMenuItemStyle,
        selectionsRenderer = _props.selectionsRenderer,
        style = _props.style,
        unCheckedIcon = _props.unCheckedIcon,
        underlineErrorStyle = _props.underlineErrorStyle,
        underlineFocusStyle = _props.underlineFocusStyle,
        underlineStyle = _props.underlineStyle,
        withResetSelectAllButtons = _props.withResetSelectAllButtons;

    // Default style depending on Material-UI context (muiTheme)

    var _context$muiTheme = this.context.muiTheme,
        palette = _context$muiTheme.baseTheme.palette,
        menuItem = _context$muiTheme.menuItem;


    var mergedSelectedMenuItemStyle = _extends({
      color: menuItem.selectedTextColor
    }, selectedMenuItemStyle);
    if (checkedIcon) {
      checkedIcon.props.style.fill = mergedSelectedMenuItemStyle.color;
    }
    var mergedHoverColor = hoverColor || menuItem.hoverColor;

    /**
     * MenuItems building, based on user's children
     * 1st function is the base process for producing a MenuItem,
     * including filtering from the Autocomplete.
     * 2nd function is the main loop over children array,
     * accounting for optgroups.
     */
    var menuItemBuilder = function menuItemBuilder(nodes, child, index) {
      var selectedItems = _this3.state.selectedItems;
      var _child$props = child.props,
          childValue = _child$props.value,
          label = _child$props.label;

      if (!autocompleteFilter(_this3.state.searchText, label || childValue)) {
        return nodes;
      }
      var isSelected = Array.isArray(selectedItems) ? selectedItems.some(function (obj) {
        return areEqual(obj.value, childValue);
      }) : selectedItems ? selectedItems.value === childValue : false;
      var leftCheckbox = multiple && checkPosition === 'left' && (isSelected ? checkedIcon : unCheckedIcon) || null;
      var rightCheckbox = multiple && checkPosition === 'right' && (isSelected ? checkedIcon : unCheckedIcon) || null;
      if (multiple && checkPosition !== '') {
        if (checkedIcon) checkedIcon.props.style.marginTop = 0;
        if (unCheckedIcon) unCheckedIcon.props.style.marginTop = 0;
      }
      return [].concat(nodes, [React.createElement(ListItem, {
        key: ++index,
        tabIndex: index,
        ref: function ref(_ref) {
          return _this3.menuItems[++index] = _ref;
        },
        disableFocusRipple: true,
        hoverColor: mergedHoverColor,
        innerDivStyle: _extends({
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: multiple && checkPosition === 'left' ? 56 : 16,
          paddingRight: multiple && checkPosition === 'right' ? 56 : 16
        }, innerDivStyle),
        leftIcon: leftCheckbox,
        onClick: _this3.handleMenuSelection({ value: childValue, label: label }),
        primaryText: child,
        rightIcon: rightCheckbox,
        style: isSelected ? mergedSelectedMenuItemStyle : {}
      })]);
    };

    var fixedChildren = Array.isArray(children) ? children : [children];

    var menuItems = !disabled && fixedChildren.length && this.state.isOpen && fixedChildren.reduce(function (nodes, child, index) {
      if (child.type !== 'optgroup') {
        return menuItemBuilder(nodes, child, index);
      }
      var nextIndex = nodes.length ? +nodes[nodes.length - 1].key + 1 : 0;
      var menuGroup = React.createElement(ListItem, {
        disabled: true,
        key: nextIndex,
        primaryText: child.props.label,
        style: _extends({
          cursor: 'default',
          paddingTop: 10,
          paddingBottom: 10
        }, menuGroupStyle)
      });
      var groupedItems = [];
      var cpc = child.props.children;
      if (cpc) {
        if (Array.isArray(cpc) && cpc.length) {
          groupedItems = cpc.reduce(function (nodes, child, idx) {
            return menuItemBuilder(nodes, child, nextIndex + idx);
          }, []);
        } else if ((typeof cpc === 'undefined' ? 'undefined' : _typeof(cpc)) === 'object') {
          groupedItems = menuItemBuilder(nodes, cpc, nextIndex);
        }
      }
      return groupedItems.length ? [].concat(nodes, [menuGroup], groupedItems) : nodes;
    }, []);

    var autoCompleteHeight = this.state.isAutocompleteShown ? 53 : 0;
    var headerHeight = multiple && withResetSelectAllButtons ? 36 : 0;
    var footerHeight = multiple && menuCloseButton ? 36 : 0;
    var noMatchFoundHeight = 36;
    var optionsContainerHeight = (Array.isArray(elementHeight) ? elementHeight.reduce(function (totalHeight, height) {
      return totalHeight + height;
    }, 0) : elementHeight * (nb2show < menuItems.length ? nb2show : menuItems.length)) || 0;
    var popoverHeight = autoCompleteHeight + headerHeight + (optionsContainerHeight || noMatchFoundHeight) + footerHeight + 6;

    var scrollableStyle = {
      overflowY: nb2show >= menuItems.length ? 'hidden' : 'scroll'
    };

    var baseWidth = this.root ? this.root.clientWidth : null;
    var menuWidth = Math.max(baseWidth, popoverWidth);

    return React.createElement(
      'div',
      {
        ref: function ref(_ref4) {
          return _this3.root = _ref4;
        },
        tabIndex: disabled ? '-1' : '0',
        onBlur: this.onBlur,
        onClick: this.handleClick,
        onFocus: this.onFocus,
        onKeyDown: this.handleKeyDown,
        className: this.props.className,
        style: _extends({
          cursor: disabled ? 'not-allowed' : 'pointer',
          color: disabled ? palette.disabledColor : palette.textColor,
          outline: 'none'
        }, style),
        title: !this.state.itemsLength ? 'Nothing to show' : ''
      },
      React.createElement(SelectionsPresenter, {
        disabled: disabled,
        dropDownIcon: dropDownIcon,
        errorStyle: errorStyle,
        errorText: errorText,
        floatingLabel: floatingLabel,
        floatingLabelFocusStyle: floatingLabelFocusStyle,
        floatingLabelStyle: floatingLabelStyle,
        hintText: hintText,
        isFocused: this.state.isFocused,
        isOpen: this.state.isOpen,
        muiTheme: this.context.muiTheme,
        selectedValues: this.state.selectedItems,
        selectionsRenderer: selectionsRenderer,
        underlineErrorStyle: underlineErrorStyle,
        underlineFocusStyle: underlineFocusStyle,
        underlineStyle: underlineStyle
      }),
      React.createElement(
        Popover,
        {
          anchorEl: this.root,
          anchorOrigin: anchorOrigin,
          canAutoPosition: canAutoPosition,
          className: popoverClassName,
          onRequestClose: this.closeMenu,
          open: this.state.isOpen,
          style: { height: popoverHeight, width: menuWidth },
          useLayerForClickAway: false
        },
        this.state.isAutocompleteShown && React.createElement(TextField, {
          ref: function ref(_ref2) {
            return _this3.searchTextField = _ref2;
          },
          autoFocus: true,
          hintText: hintTextAutocomplete,
          inputStyle: autocompleteStyle,
          onChange: this.handleTextFieldAutocompletionFiltering,
          onKeyDown: this.handleTextFieldKeyDown,
          style: { margin: '0 16px 5px', width: 'calc(100% - 32px)' },
          underlineFocusStyle: autocompleteUnderlineFocusStyle,
          underlineStyle: autocompleteUnderlineStyle,
          value: this.state.searchText
        }),
        multiple && withResetSelectAllButtons && React.createElement(
          'header',
          { style: { display: 'flex', alignItems: 'center' } },
          React.createElement(
            'div',
            { onClick: this.selectAll, style: { flex: '50%' } },
            selectAllButton
          ),
          React.createElement(
            'div',
            { onClick: this.reset, style: { flex: '50%' } },
            resetButton
          )
        ),
        React.createElement(
          'div',
          { ref: function ref(_ref3) {
              return _this3.menu = _ref3;
            }, onKeyDown: this.handleMenuKeyDown, style: menuStyle },
          menuItems.length ? React.createElement(
            InfiniteScroller,
            {
              containerHeight: optionsContainerHeight,
              elementHeight: elementHeight,
              styles: { scrollableStyle: scrollableStyle }
            },
            menuItems
          ) : React.createElement(ListItem, {
            disabled: true,
            primaryText: noMatchFound,
            style: _extends({
              cursor: 'default',
              padding: '10px 16px'
            }, noMatchFoundStyle)
          })
        ),
        multiple && React.createElement(
          'footer',
          {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }
          },
          React.createElement(
            'div',
            { onClick: this.closeMenu, style: menuFooterStyle },
            menuCloseButton
          )
        )
      )
    );
  };

  return SelectField;
}(Component), _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onFocus = function () {
    return _this4.setState({ isFocused: true });
  };

  this.onBlur = function () {
    return !_this4.state.isOpen && _this4.setState({ isFocused: false });
  };

  this.closeMenu = function (reason) {
    var _props2 = _this4.props,
        onChange = _props2.onChange,
        name = _props2.name;

    if (reason) _this4.setState({ isFocused: false }); // if reason === 'clickaway' or 'offscreen'
    _this4.setState({ isOpen: false, searchText: '' }, function () {
      if (!reason) _this4.root.focus();
      onChange(_this4.state.selectedItems, name);
    });
  };

  this.handleClick = function (event) {
    return !_this4.props.disabled && _this4.openMenu();
  };

  this.handleKeyDown = function (event) {
    return !_this4.props.disabled && /ArrowDown|Enter/.test(event.key) && _this4.openMenu();
  };

  this.handleTextFieldAutocompletionFiltering = function (event, searchText) {
    _this4.props.onAutoCompleteTyping(searchText);
    _this4.setState({ searchText: searchText }, function () {
      return _this4.focusTextField();
    });
  };

  this.handleTextFieldKeyDown = function (_ref5) {
    var key = _ref5.key;

    switch (key) {
      case 'ArrowDown':
        _this4.focusMenuItem();
        break;

      case 'Escape':
        _this4.clearTextField();
        _this4.closeMenu();
        break;

      default:
        break;
    }
  };

  this.selectAll = function () {
    var _props3 = _this4.props,
        children = _props3.children,
        autocompleteFilter = _props3.autocompleteFilter;

    var fixedChildren = Array.isArray(children) ? children : [children];
    var selectedItems = fixedChildren.reduce(function (nodes, child) {
      var type = child.type,
          _child$props2 = child.props,
          value = _child$props2.value,
          label = _child$props2.label;

      var passesFilter = function passesFilter(label, value) {
        return autocompleteFilter(_this4.state.searchText, label || value);
      };
      if (type !== 'optgroup' && passesFilter(label, value)) {
        return nodes.concat({ value: value, label: label });
      } else if (type === 'optgroup') {
        var groupedItems = _this4.selectAllInGroup(child);
        return groupedItems.length ? nodes.concat(groupedItems) : nodes;
      } else return nodes;
    }, []);
    _this4.setState({ selectedItems: selectedItems }, function () {
      return _this4.getSelected();
    });
  };

  this.reset = function () {
    return _this4.setState({ selectedItems: _this4.state.initialValue }, function () {
      return _this4.getSelected();
    });
  };

  this.handleMenuSelection = function (selectedItem) {
    return function (event) {
      event.preventDefault();
      var selectedItems = _this4.state.selectedItems;

      if (_this4.props.multiple) {
        var selectedItemExists = selectedItems.some(function (obj) {
          return areEqual(obj.value, selectedItem.value);
        });
        var updatedValues = selectedItemExists ? selectedItems.filter(function (obj) {
          return !areEqual(obj.value, selectedItem.value);
        }) : selectedItems.concat(selectedItem);
        _this4.setState({ selectedItems: updatedValues }, function () {
          return _this4.getSelected();
        });
        _this4.clearTextField(function () {
          return _this4.focusTextField();
        });
      } else {
        var updatedValue = areEqual(selectedItems, selectedItem) ? null : selectedItem;
        _this4.setState({ selectedItems: updatedValue }, function () {
          return _this4.closeMenu();
        });
      }
    };
  };

  this.getSelected = function () {
    return _this4.props.onSelect && _this4.props.onSelect(_this4.state.selectedItems, _this4.props.name);
  };

  this.selectAllInGroup = function (group) {
    var children = group.props.children;

    var passesFilter = function passesFilter(label, value) {
      return _this4.props.autocompleteFilter(_this4.state.searchText, label || value);
    };
    var fixedChildren = Array.isArray(children) ? children : [children];
    return fixedChildren.reduce(function (nodes, _ref6) {
      var _ref6$props = _ref6.props,
          value = _ref6$props.value,
          label = _ref6$props.label;

      return passesFilter(label, value) ? nodes.concat({ value: value, label: label }) : nodes;
    }, []);
  };

  this.handleMenuKeyDown = function (_ref7) {
    var key = _ref7.key,
        tabIndex = _ref7.target.tabIndex;

    var cleanMenuItems = _this4.menuItems.filter(function (item) {
      return !!item;
    });
    var firstTabIndex = cleanMenuItems[0].props.tabIndex;
    var lastTabIndex = cleanMenuItems[cleanMenuItems.length - 1].props.tabIndex;
    var currentElementIndex = cleanMenuItems.findIndex(function (item) {
      return item.props.tabIndex === tabIndex;
    });
    switch (key) {
      case 'ArrowUp':
        if (+tabIndex === firstTabIndex) {
          _this4.state.isAutocompleteShown ? _this4.focusTextField() : _this4.focusMenuItem(lastTabIndex);
        } else {
          var previousTabIndex = cleanMenuItems.slice(0, currentElementIndex).slice(-1)[0].props.tabIndex;
          _this4.focusMenuItem(previousTabIndex);
        }
        break;

      case 'ArrowDown':
        if (+tabIndex === lastTabIndex) {
          _this4.state.isAutocompleteShown ? _this4.focusTextField() : _this4.focusMenuItem();
        } else {
          var nextTabIndex = cleanMenuItems.slice(currentElementIndex + 1)[0].props.tabIndex;
          _this4.focusMenuItem(nextTabIndex);
        }
        break;

      case 'PageUp':
        _this4.focusMenuItem();
        break;

      case 'PageDown':
        _this4.focusMenuItem(lastTabIndex);
        break;

      case 'Escape':
        _this4.closeMenu();
        break;

      default:
        break;
    }
  };
}, _temp);


SelectField.contextTypes = {
  muiTheme: object.isRequired
};
SelectField.propTypes = process.env.NODE_ENV !== "production" ? selectFieldTypes : {};
SelectField.defaultProps = selectFieldDefaultProps;

export default SelectField;