import { useState } from "react";
import appendURLParameter from "../util/appendURLParameter";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Header({
  perPage,
  setPerPage,
  search,
  setSearch,
  searchBy,
  setSearchBy,
  title,
  ...props
}) {
  const [searchLocal, setSearchLocal] = useState(search);
  const [searchByLocal, setSearchByLocal] = useState(search);
  const executeSearch = () => {
    appendURLParameter("search", searchLocal);
    appendURLParameter("search_by", searchByLocal);
    setSearch(searchLocal);
    setSearchBy(searchByLocal);
  };
  const itemsCount = [10, 20, 30, 40, 50, 100];
  return /*#__PURE__*/_jsxs("div", {
    className: "flex justify-between items-center mb-1",
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("label", {
        htmlFor: "react-table-items-per-page",
        children: "show\xA0"
      }), /*#__PURE__*/_jsx("select", {
        id: "react-table-items-per-page",
        className: "p-1 border-2 rounded-sm cursor-pointer",
        onChange: e => {
          appendURLParameter("limit", e.target.value);
          setPerPage(e.target.value);
        },
        value: perPage,
        children: itemsCount.map((n, i) => {
          return /*#__PURE__*/_jsx("option", {
            value: n,
            children: n
          }, i);
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "flex gap-1",
      children: [/*#__PURE__*/_jsxs("select", {
        className: "p-1 border-2 rounded-sm cursor-pointer",
        onChange: e => setSearchByLocal(e.target.value),
        value: searchBy,
        children: [/*#__PURE__*/_jsx("option", {
          children: "column"
        }), title.map((item, i) => /*#__PURE__*/_jsx("option", {
          value: item,
          children: item
        }, i))]
      }), /*#__PURE__*/_jsxs("div", {
        className: "flex items-stretch",
        children: [/*#__PURE__*/_jsx("input", {
          type: "search",
          className: "bg-white border-2 rounded-sm p-1 border-r-0 h-8 focus:outline-none rounded-tr-none rounded-br-none",
          placeholder: "search",
          defaultValue: search,
          onChange: e => setSearchLocal(e.target.value)
        }), /*#__PURE__*/_jsx("button", {
          type: "button",
          onClick: executeSearch,
          className: "bg-emerald-300 p-1 text-gray-900 rounded-sm h-8 rounded-tl-none rounded-bl-none",
          children: "\xA0search"
        })]
      })]
    })]
  });
}