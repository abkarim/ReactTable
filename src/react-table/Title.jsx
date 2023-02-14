import appendURLParameter from "../util/appendURLParameter";

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
  return (
    <tr>
      {data.map((x, i) => (
        <th
          key={i}
          className={`${
            orderBy === x ? "font-bold" : "font-normal"
          } first:pl-2 last:pr-2 text-black`}
        >
          <div className="flex items-center gap-1">
            <div className="inline-block text-base">{x}</div>
            <div
              className="inline-flex flex-col select-none text-[8px] items-center justify-center"
              title="order"
            >
              <span
                className={`inline-block -rotate-90 cursor-pointer p-1 -mb-2 ${
                  order !== "desc" ? "text-gray-500" : ""
                }`}
                title="descending"
                onClick={() => {
                  updateOrderInUrl("desc", x);
                  setOrderBy(x);
                  setOrder("desc");
                }}
              >
                &#10148;
              </span>
              <span
                className={`inline-block rotate-90 cursor-pointer p-1 pb-2 -ml-1 ${
                  order !== "asc" ? "text-gray-500" : ""
                }`}
                title="ascending"
                onClick={() => {
                  updateOrderInUrl("asc", x);
                  setOrderBy(x);
                  setOrder("asc");
                }}
              >
                &#10148;
              </span>
            </div>
          </div>
        </th>
      ))}
    </tr>
  );
}
