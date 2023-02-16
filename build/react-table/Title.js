"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Title;
var _appendURLParameter = _interopRequireDefault(require("../util/appendURLParameter"));
var _excluded = ["order", "setOrder", "orderBy", "setOrderBy", "data"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function updateOrderInUrl(order, order_by) {
  (0, _appendURLParameter["default"])("order", order);
  (0, _appendURLParameter["default"])("order_by", order_by);
}
function Title(_ref) {
  var order = _ref.order,
    setOrder = _ref.setOrder,
    orderBy = _ref.orderBy,
    setOrderBy = _ref.setOrderBy,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("tr", null, data.map(function (x, i) {
    return /*#__PURE__*/React.createElement("th", {
      key: i,
      className: "".concat(orderBy === x ? "font-bold" : "font-normal", " first:pl-2 last:pr-2 text-black")
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-block text-base"
    }, x), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex flex-col select-none text-[8px] items-center justify-center",
      title: "order"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block -rotate-90 cursor-pointer p-1 -mb-2 ".concat(order !== "desc" ? "text-gray-500" : ""),
      title: "descending",
      onClick: function onClick() {
        updateOrderInUrl("desc", x);
        setOrderBy(x);
        setOrder("desc");
      }
    }, "\u27A4"), /*#__PURE__*/React.createElement("span", {
      className: "inline-block rotate-90 cursor-pointer p-1 pb-2 -ml-1 ".concat(order !== "asc" ? "text-gray-500" : ""),
      title: "ascending",
      onClick: function onClick() {
        updateOrderInUrl("asc", x);
        setOrderBy(x);
        setOrder("asc");
      }
    }, "\u27A4"))));
  }));
}