"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pagination;
var _react = require("react");
var _appendURLParameter = _interopRequireDefault(require("../util/appendURLParameter"));
var _excluded = ["total", "currentPage", "itemsPerPage", "setCurrentPage"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var updatePageNumberInUrl = function updatePageNumberInUrl(n) {
  (0, _appendURLParameter["default"])("page", n);
};
function Pages(_ref) {
  var currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    setCurrentPage = _ref.setCurrentPage;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    pages = _useState2[0],
    setPages = _useState2[1];
  (0, _react.useEffect)(function () {
    var page = [];
    if (totalPages > 5) {
      if (currentPage !== 1) page.push(1);
      var middlePage = parseInt(totalPages / 2);
      if (middlePage === currentPage) {
        page.push(currentPage);
      } else if (middlePage > currentPage) {
        page.push(currentPage);
        page.push(middlePage);
      } else {
        page.push(middlePage);
        page.push(currentPage);
      }
      if (currentPage !== totalPages) page.push(totalPages);
    } else {
      for (var i = 1; i <= totalPages; i++) page.push(i);
    }
    var newPage = [];
    // eslint-disable-next-line array-callback-return
    page.map(function (n, i) {
      /**
       * Nothing to do on last page
       */
      if (i + 1 === page.length) return newPage.push(n);
      /**
       * If current value and next value are siblings get original
       */
      if (n + 1 === page[i + 1]) return newPage.push(n);
      newPage.push(n);
      newPage.push("...");
    });
    setPages(newPage);
  }, [currentPage, totalPages]);
  return pages.map(function (n, i) {
    if (!isNaN(n)) {
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        onClick: function onClick() {
          updatePageNumberInUrl(n);
          setCurrentPage(n);
        },
        className: "inline-block px-2 py-1 rounded-sm ml-1 select-none cursor-pointer ".concat(currentPage === n ? "bg-gray-300 pointer-events-none" : "bg-gray-100")
      }, n);
    } else {
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        className: "inline-block px-2 py-1 tracking-wider"
      }, "...");
    }
  });
}
function Pagination(_ref2) {
  var total = _ref2.total,
    currentPage = _ref2.currentPage,
    itemsPerPage = _ref2.itemsPerPage,
    setCurrentPage = _ref2.setCurrentPage,
    props = _objectWithoutProperties(_ref2, _excluded);
  var totalPages = Math.ceil(total / itemsPerPage);
  var className = "inline-block px-2 py-1 font-bold cursor-pointer bg-emerald-300 rounded-sm text-gray-800 hover:bg-emerald-500 transition select-none";
  return totalPages > 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: currentPage === 1 ? "cursor-not-allowed" : ""
  }, /*#__PURE__*/React.createElement("span", {
    title: "previous page",
    onClick: function onClick() {
      updatePageNumberInUrl(currentPage - 1);
      setCurrentPage(currentPage - 1);
    },
    className: "".concat(className, " ").concat(currentPage === 1 ? "bg-emerald-100 pointer-events-none" : "")
  }, "\u21FD")), /*#__PURE__*/React.createElement(Pages, {
    currentPage: currentPage,
    totalPages: totalPages,
    setCurrentPage: setCurrentPage
  }), /*#__PURE__*/React.createElement("span", {
    className: currentPage === totalPages ? "cursor-not-allowed" : ""
  }, /*#__PURE__*/React.createElement("span", {
    title: "next page",
    onClick: function onClick() {
      updatePageNumberInUrl(currentPage + 1);
      setCurrentPage(currentPage + 1);
    },
    className: "".concat(className, " ml-1 ").concat(currentPage === totalPages ? "bg-emerald-100 pointer-events-none" : "")
  }, "\u21FE")));
}