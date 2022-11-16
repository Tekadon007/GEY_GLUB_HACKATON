import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {productDetails ? (
        <div className="reg_text1">
          <h3 className="name_title">{productDetails.name}</h3>
          <img src={productDetails.picture} alt="" width="250" height="250" />
          <h3 className="name_title">{productDetails.price}$ </h3>
          <h3 style={{ width: "50%", height: "50%" }}>
            {productDetails.description}
          </h3>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ProductDetails;
