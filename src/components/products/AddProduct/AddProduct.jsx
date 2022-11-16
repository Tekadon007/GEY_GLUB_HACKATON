import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = e => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <>
      <div className="register_panel_2">
        <h2 className="reg_text">Add Product</h2>

        <input
          className="reg_input2"
          type="text"
          placeholder="Title"
          name="name"
          onChange={handleInp}
        />
        <br />
        <input
          className="reg_input2"
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleInp}
        />
        <br />
        <input
          className="reg_input2"
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleInp}
        />
        <br />
        <input
          className="reg_input2"
          type="text"
          placeholder="Picture"
          name="picture"
          onChange={handleInp}
        />
        <br />
        <input
          className="reg_input2"
          type="text"
          placeholder="Type"
          name="type"
          onChange={handleInp}
        />
        <br />

        <button
          className="double-border-button"
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddProduct;
