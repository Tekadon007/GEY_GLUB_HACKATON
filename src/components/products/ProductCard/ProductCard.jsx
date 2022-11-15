import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useCart } from "../../../contexts/CartContextProvider";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../../styles/CardStyle.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <div className="productCard_main-block">
      <div className="productCard_block">
        <h3 className="productCard_name">{item.name}</h3>
        <img className="productCard_img" src={item.picture} alt="" />
        <h3 className="productCard_price">{item.price}$</h3>
        <div className="productCard_buttons">
          <Button
            style={{ fontWeight: "bold" }}
            onClick={() => navigate(`/details/${item.id}`)}
            variant="contained"
            color="success"
            size="small">
            Details
          </Button>{" "}
          <Fab
            size="small"
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="outlined"
            aria-label="edit">
            <EditIcon />
          </Fab>
          <IconButton
            onClick={() => deleteProduct(item.id)}
            variant="outlined"
            color="primary"
            size="small"
            aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton size="small" onClick={() => addProductToCart(item)}>
            <AddShoppingCartOutlinedIcon
              color={checkProductInCart(item.id) ? "primary" : ""}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
