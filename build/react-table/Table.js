"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReactTable;
require("../util/app.css");
var _Footer = _interopRequireDefault(require("./Footer"));
var _Title = _interopRequireDefault(require("./Title"));
var _Header = _interopRequireDefault(require("./Header"));
var _excluded = ["order", "setOrder", "orderBy", "setOrderBy", "itemsPerPage", "setItemsPerPage", "currentPage", "setCurrentPage", "search", "searchBy", "setSearch", "setSearchBy", "total", "title", "data", "emptyMessage", "footer", "header"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ReactTable(_ref) {
  var order = _ref.order,
    setOrder = _ref.setOrder,
    orderBy = _ref.orderBy,
    setOrderBy = _ref.setOrderBy,
    itemsPerPage = _ref.itemsPerPage,
    setItemsPerPage = _ref.setItemsPerPage,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage,
    search = _ref.search,
    searchBy = _ref.searchBy,
    setSearch = _ref.setSearch,
    setSearchBy = _ref.setSearchBy,
    total = _ref.total,
    title = _ref.title,
    data = _ref.data,
    _ref$emptyMessage = _ref.emptyMessage,
    emptyMessage = _ref$emptyMessage === void 0 ? "Sorry, no data found" : _ref$emptyMessage,
    _ref$footer = _ref.footer,
    footer = _ref$footer === void 0 ? false : _ref$footer,
    _ref$header = _ref.header,
    header = _ref$header === void 0 ? true : _ref$header,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Header["default"], {
    perPage: itemsPerPage,
    setPerPage: setItemsPerPage,
    title: title,
    search: search,
    setSearch: setSearch,
    searchBy: searchBy,
    setSearchBy: setSearchBy
  }), /*#__PURE__*/React.createElement("table", _extends({}, props, {
    className: "w-full"
  }), header === true && /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-200"
  }, /*#__PURE__*/React.createElement(_Title["default"], {
    orderBy: orderBy,
    setOrderBy: setOrderBy,
    order: order,
    setOrder: setOrder,
    data: title
  })), /*#__PURE__*/React.createElement("tbody", null, data.map(function (x) {
    return /*#__PURE__*/React.createElement("tr", {
      key: x["id"],
      className: "odd:bg-slate-50 even:bg-white border-b-2"
    }, title.map(function (item, i) {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        className: "first:pl-2 last:pr-2 text-gray-800"
      }, x[item]);
    }));
  }), data.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "bg-slate-50 px-2",
    colSpan: title.length
  }, emptyMessage))), footer === true && /*#__PURE__*/React.createElement("tfoot", {
    className: "bg-slate-200"
  }, /*#__PURE__*/React.createElement(_Title["default"], {
    orderBy: orderBy,
    setOrderBy: setOrderBy,
    order: order,
    setOrder: setOrder,
    data: title
  }))), /*#__PURE__*/React.createElement(_Footer["default"], {
    total: total,
    itemsPerPage: itemsPerPage,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage
  }));
}