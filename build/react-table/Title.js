import appendURLParameter from "../util/appendURLParameter";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function updateOrderInUrl(order, order_by) {
  appendURLParameter("order", order);
  appendURLParameter("order_by", order_by);
}
export default function Title({
  order,
  setOrder,
  orderBy,
  setOrderBy,
  data = [],
  ...props
}) {
  return /*#__PURE__*/_jsx("tr", {
    children: data.map((x, i) => /*#__PURE__*/_jsx("th", {
      className: `${orderBy === x ? "font-bold" : "font-normal"} first:pl-2 last:pr-2 text-black`,
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex items-center gap-1",
        children: [/*#__PURE__*/_jsx("div", {
          className: "inline-block text-base",
          children: x
        }), /*#__PURE__*/_jsxs("div", {
          className: "inline-flex flex-col select-none text-[8px] items-center justify-center",
          title: "order",
          children: [/*#__PURE__*/_jsx("span", {
            className: `inline-block -rotate-90 cursor-pointer p-1 -mb-2 ${order !== "desc" ? "text-gray-500" : ""}`,
            title: "descending",
            onClick: () => {
              updateOrderInUrl("desc", x);
              setOrderBy(x);
              setOrder("desc");
            },
            children: "\u27A4"
          }), /*#__PURE__*/_jsx("span", {
            className: `inline-block rotate-90 cursor-pointer p-1 pb-2 -ml-1 ${order !== "asc" ? "text-gray-500" : ""}`,
            title: "ascending",
            onClick: () => {
              updateOrderInUrl("asc", x);
              setOrderBy(x);
              setOrder("asc");
            },
            children: "\u27A4"
          })]
        })]
      })
    }, i))
  });
}