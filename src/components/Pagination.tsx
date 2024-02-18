function Pagination({
  page,
  handleClick,
  handlePrev,
  handleNext,
}: {
  page: number;
  handleClick: (p: number) => void;
  handlePrev: (p: number) => void;
  handleNext: (p: number) => void;
}) {
  const prevPage = () => {
    handlePrev(page);
  };
  const nextPage = () => {
    handleNext(page);
  };
  return (
    <div className="pages">
      <div className="page" hidden={page === 1} onClick={prevPage}>
        ⬅️
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`page ${page === index + 1 && "active-page"}`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}
      <div className="page" hidden={page === 10} onClick={nextPage}>
        ➡️
      </div>
    </div>
  );
}

export default Pagination;
