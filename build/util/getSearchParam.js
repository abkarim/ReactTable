"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSearchParameter;
var _isEmpty = _interopRequireDefault(require("./isEmpty"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getSearchParameter(key) {
  var value = new URL(window.location.href).searchParams.get(key);
  if (value !== null && !(0, _isEmpty["default"])(value)) return value;
  return null;
}