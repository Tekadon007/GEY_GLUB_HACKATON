import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";

const ProductsList = ({ page, setPage, changeSideBarStatus }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 6;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <h2>Products List</h2>

      <Button
        style={{ fontWeight: "bold" }}
        onClick={changeSideBarStatus}
        color="secondary"
        size="small">
        Filter&Search Menu
      </Button>
      {"  "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {products ? (
          currentData().map(item => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        count={count}
        page={page}
        onChange={handlePage}
      />
    </div>
  );
};

export default ProductsList;
