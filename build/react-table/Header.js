"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _react = require("react");
var _appendURLParameter = _interopRequireDefault(require("../util/appendURLParameter"));
var _excluded = ["perPage", "setPerPage", "search", "setSearch", "searchBy", "setSearchBy", "title"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Header(_ref) {
  var perPage = _ref.perPage,
    setPerPage = _ref.setPerPage,
    search = _ref.search,
    setSearch = _ref.setSearch,
    searchBy = _ref.searchBy,
    setSearchBy = _ref.setSearchBy,
    title = _ref.title,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(search),
    _useState2 = _slicedToArray(_useState, 2),
    searchLocal = _useState2[0],
    setSearchLocal = _useState2[1];
  var _useState3 = (0, _react.useState)(search),
    _useState4 = _slicedToArray(_useState3, 2),
    searchByLocal = _useState4[0],
    setSearchByLocal = _useState4[1];
  var executeSearch = function executeSearch() {
    (0, _appendURLParameter["default"])("search", searchLocal);
    (0, _appendURLParameter["default"])("search_by", searchByLocal);
    setSearch(searchLocal);
    setSearchBy(searchByLocal);
  };
  var itemsCount = [10, 20, 30, 40, 50, 100];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "react-table-items-per-page"
  }, "show\xA0"), /*#__PURE__*/React.createElement("select", {
    id: "react-table-items-per-page",
    className: "p-1 border-2 rounded-sm cursor-pointer",
    onChange: function onChange(e) {
      (0, _appendURLParameter["default"])("limit", e.target.value);
      setPerPage(e.target.value);
    },
    value: perPage
  }, itemsCount.map(function (n, i) {
    return /*#__PURE__*/React.createElement("option", {
      value: n,
      key: i
    }, n);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, /*#__PURE__*/React.createElement("select", {
    className: "p-1 border-2 rounded-sm cursor-pointer",
    onChange: function onChange(e) {
      return setSearchByLocal(e.target.value);
    },
    value: searchBy
  }, /*#__PURE__*/React.createElement("option", null, "column"), title.map(function (item, i) {
    return /*#__PURE__*/React.createElement("option", {
      value: item,
      key: i
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-stretch"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    className: "bg-white border-2 rounded-sm p-1 border-r-0 h-8 focus:outline-none rounded-tr-none rounded-br-none",
    placeholder: "search",
    defaultValue: search,
    onChange: function onChange(e) {
      return setSearchLocal(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: executeSearch,
    className: "bg-emerald-300 p-1 text-gray-900 rounded-sm h-8 rounded-tl-none rounded-bl-none"
  }, "\xA0search"))));
}