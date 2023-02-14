import { useState } from "react";
import appendURLParameter from "../util/appendURLParameter";

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
  return (
    <div className="flex justify-between items-center mb-1">
      <div>
        <label htmlFor="react-table-items-per-page">show&nbsp;</label>
        <select
          id="react-table-items-per-page"
          className="p-1 border-2 rounded-sm cursor-pointer"
          onChange={(e) => {
            appendURLParameter("limit", e.target.value);
            setPerPage(e.target.value);
          }}
          value={perPage}
        >
          {itemsCount.map((n, i) => {
            return (
              <option value={n} key={i}>
                {n}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex gap-1">
        <select
          className="p-1 border-2 rounded-sm cursor-pointer"
          onChange={(e) => setSearchByLocal(e.target.value)}
          value={searchBy}
        >
          <option>column</option>
          {title.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
        <div className="flex items-stretch">
          <input
            type="search"
            className="bg-white border-2 rounded-sm p-1 border-r-0 h-8 focus:outline-none rounded-tr-none rounded-br-none"
            placeholder="search"
            defaultValue={search}
            onChange={(e) => setSearchLocal(e.target.value)}
          />
          <button
            type="button"
            onClick={executeSearch}
            className="bg-emerald-300 p-1 text-gray-900 rounded-sm h-8 rounded-tl-none rounded-bl-none"
          >
            &nbsp;search
          </button>
        </div>
      </div>
    </div>
  );
}
