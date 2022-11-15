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
    <div className="list">
      <h2 className="text_pr">Products List</h2>

      <button
        className="strelka"
        style={{ fontWeight: "bold" }}
        onClick={changeSideBarStatus}>
        ➔
      </button>
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
      <footer class="footer">
        <ul class="social-icon">
          <li class="social-icon__item">
            <a
              class="social-icon__link"
              target="_blank"
              href="https://ru-ru.facebook.com/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a
              class="social-icon__link"
              target="_blank"
              href="https://www.youtube.com/channel/UCTezsI5VDmfw-Taw-NbvZHQ">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a
              class="social-icon__link"
              target="_blank"
              href="https://github.com/bunnykkk">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li class="social-icon__item">
            <a
              class="social-icon__link"
              target="_blank"
              href="https://www.instagram.com/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="/">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              About
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Services
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Team
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2022 Ramin&Islam | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ProductsList;
