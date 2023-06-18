import React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import CartLeftSide from "./CartLeftSide";
import CartRightSide from "./CartRightSide";
import { Box } from "@mui/material";

const Cart = () => {
  const { cart } = useCart();
  const { products } = cart;

  return (
    <div style={{ width: "85%", margin: "auto", padding: "50px 0 " }}>
      <h1>Корзина({products.length})</h1>
      <Box sx={{ display: "flex" }}>
        <CartLeftSide />
        <CartRightSide />
      </Box>
    </div>
  );
};

export default Cart;
