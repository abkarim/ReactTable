import { useEffect, useState } from "react";
import appendURLParameter from "../util/appendURLParameter";

const updatePageNumberInUrl = (n) => {
  appendURLParameter("page", n);
};

function Pages({ currentPage, totalPages, setCurrentPage }) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const page = [];
    if (totalPages > 5) {
      if (currentPage !== 1) page.push(1);

      const middlePage = parseInt(totalPages / 2);

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
      for (let i = 1; i <= totalPages; i++) page.push(i);
    }

    const newPage = [];
    // eslint-disable-next-line array-callback-return
    page.map((n, i) => {
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

  return pages.map((n, i) => {
    if (!isNaN(n)) {
      return (
        <span
          key={i}
          onClick={() => {
            updatePageNumberInUrl(n);
            setCurrentPage(n);
          }}
          className={`inline-block px-2 py-1 rounded-sm ml-1 select-none cursor-pointer ${
            currentPage === n
              ? "bg-gray-300 pointer-events-none"
              : "bg-gray-100"
          }`}
        >
          {n}
        </span>
      );
    } else {
      return (
        <span key={i} className="inline-block px-2 py-1 tracking-wider">
          ...
        </span>
      );
    }
  });
}

export default function Pagination({
  total,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  ...props
}) {
  const totalPages = Math.ceil(total / itemsPerPage);
  let className =
    "inline-block px-2 py-1 font-bold cursor-pointer bg-emerald-300 rounded-sm text-gray-800 hover:bg-emerald-500 transition select-none";

  return (
    totalPages > 1 && (
      <div>
        <span className={currentPage === 1 ? "cursor-not-allowed" : ""}>
          <span
            title="previous page"
            onClick={() => {
              updatePageNumberInUrl(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }}
            className={`${className} ${
              currentPage === 1 ? "bg-emerald-100 pointer-events-none" : ""
            }`}
          >
            &#8701;
          </span>
        </span>

        <Pages
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        <span
          className={currentPage === totalPages ? "cursor-not-allowed" : ""}
        >
          <span
            title="next page"
            onClick={() => {
              updatePageNumberInUrl(currentPage + 1);
              setCurrentPage(currentPage + 1);
            }}
            className={`${className} ml-1 ${
              currentPage === totalPages
                ? "bg-emerald-100 pointer-events-none"
                : ""
            }`}
          >
            &#8702;
          </span>
        </span>
      </div>
    )
  );
}
