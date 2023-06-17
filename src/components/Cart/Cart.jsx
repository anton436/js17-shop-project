import React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import CartLeftSide from "./CartLeftSide";

const Cart = () => {
  const { cart } = useCart();
  const { products } = cart;

  return (
    <div style={{ width: "85%", margin: "auto", padding: "50px 0 " }}>
      <h1>Корзина({products.length})</h1>
      <CartLeftSide />
    </div>
  );
};

export default Cart;
