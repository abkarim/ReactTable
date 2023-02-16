import Footer from "./Footer";
import Title from "./Title";
import Header from "./Header";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ReactTable({
  order,
  setOrder,
  orderBy,
  setOrderBy,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  search,
  searchBy,
  setSearch,
  setSearchBy,
  total,
  title,
  data = [],
  emptyMessage = "Sorry, no data found",
  footer = false,
  header = true,
  ...props
}) {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx(Header, {
      perPage: itemsPerPage,
      setPerPage: setItemsPerPage,
      title: title,
      search: search,
      setSearch: setSearch,
      searchBy: searchBy,
      setSearchBy: setSearchBy
    }), /*#__PURE__*/_jsxs("table", {
      ...props,
      className: "w-full",
      children: [header === true && /*#__PURE__*/_jsx("thead", {
        className: "bg-slate-200",
        children: /*#__PURE__*/_jsx(Title, {
          orderBy: orderBy,
          setOrderBy: setOrderBy,
          order: order,
          setOrder: setOrder,
          data: title
        })
      }), /*#__PURE__*/_jsxs("tbody", {
        children: [data.map(x => {
          return /*#__PURE__*/_jsx("tr", {
            className: "odd:bg-slate-50 even:bg-white border-b-2",
            children: title.map((item, i) => {
              return /*#__PURE__*/_jsx("td", {
                className: "first:pl-2 last:pr-2 text-gray-800",
                children: x[item]
              }, i);
            })
          }, x["id"]);
        }), data.length === 0 && /*#__PURE__*/_jsx("tr", {
          children: /*#__PURE__*/_jsx("td", {
            className: "bg-slate-50 px-2",
            colSpan: title.length,
            children: emptyMessage
          })
        })]
      }), footer === true && /*#__PURE__*/_jsx("tfoot", {
        className: "bg-slate-200",
        children: /*#__PURE__*/_jsx(Title, {
          orderBy: orderBy,
          setOrderBy: setOrderBy,
          order: order,
          setOrder: setOrder,
          data: title
        })
      })]
    }), /*#__PURE__*/_jsx(Footer, {
      total: total,
      itemsPerPage: itemsPerPage,
      currentPage: currentPage,
      setCurrentPage: setCurrentPage
    })]
  });
}