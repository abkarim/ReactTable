import Pagination from "./Pagination";

export default function Footer({
  itemsPerPage,
  currentPage,
  setCurrentPage,
  total,
  ...props
}) {
  const showingFrom = itemsPerPage * (currentPage - 1);
  const showingTo =
    showingFrom + itemsPerPage > total
      ? total
      : parseInt(showingFrom) + parseInt(itemsPerPage);
  return (
    <div {...props} className="flex justify-between mt-1">
      {total && (
        <div>
          showing from <span className="font-bold">{showingFrom}</span>&nbsp;
          to&nbsp;
          <span className="font-bold">{showingTo}</span>&nbsp; of total&nbsp;
          {total}
        </div>
      )}
      <Pagination
        total={total}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
