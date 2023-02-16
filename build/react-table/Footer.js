import Pagination from "./Pagination";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Footer({
  itemsPerPage,
  currentPage,
  setCurrentPage,
  total,
  ...props
}) {
  const showingFrom = itemsPerPage * (currentPage - 1);
  const showingTo = showingFrom + itemsPerPage > total ? total : parseInt(showingFrom) + parseInt(itemsPerPage);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    className: "flex justify-between mt-1",
    children: [total && /*#__PURE__*/_jsxs("div", {
      children: ["showing from ", /*#__PURE__*/_jsx("span", {
        className: "font-bold",
        children: showingFrom
      }), "\xA0 to\xA0", /*#__PURE__*/_jsx("span", {
        className: "font-bold",
        children: showingTo
      }), "\xA0 of total\xA0", total]
    }), /*#__PURE__*/_jsx(Pagination, {
      total: total,
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
      setCurrentPage: setCurrentPage
    })]
  });
}