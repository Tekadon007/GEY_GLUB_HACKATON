import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import "../src/styles/App.css";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MainRoutes />
          </AuthContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
