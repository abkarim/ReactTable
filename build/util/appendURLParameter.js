"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = appendURLParameter;
function appendURLParameter(key, val) {
  var newUrl = new URL(window.location.href);
  var params = new URLSearchParams(newUrl.search);
  params.set(key, val);
  newUrl.search = params;
  window.history.replaceState({}, document.title, newUrl);
}