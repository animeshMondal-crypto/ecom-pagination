import { useEffect, useState } from "react";
import { ProductType } from "../utils/types.ts";
import Pagination from "./Pagination.tsx";

function Items() {
  const [data, setdata] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        page * 10 - 10
      }&select=title,thumbnail`
    );
    const data = await res.json();
    setdata(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleClick = (p: number) => {
    setPage(p);
  };

  const handlePrev = (p: number) => {
    if (p > 1) setPage(p - 1);
  };

  const handleNext = (p: number) => {
    if (p < 10) setPage(p + 1);
  };

  return (
    <>
      <div className="container">
        {data.map((product, index) => (
          <div key={index} className="items">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <Pagination
        page={page}
        handleClick={handleClick}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
}

export default Items;
