"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;
var _Pagination = _interopRequireDefault(require("./Pagination"));
var _excluded = ["itemsPerPage", "currentPage", "setCurrentPage", "total"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Footer(_ref) {
  var itemsPerPage = _ref.itemsPerPage,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage,
    total = _ref.total,
    props = _objectWithoutProperties(_ref, _excluded);
  var showingFrom = itemsPerPage * (currentPage - 1);
  var showingTo = showingFrom + itemsPerPage > total ? total : parseInt(showingFrom) + parseInt(itemsPerPage);
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "flex justify-between mt-1"
  }), total && /*#__PURE__*/React.createElement("div", null, "showing from ", /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, showingFrom), "\xA0 to\xA0", /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, showingTo), "\xA0 of total\xA0", total), /*#__PURE__*/React.createElement(_Pagination["default"], {
    total: total,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    setCurrentPage: setCurrentPage
  }));
}