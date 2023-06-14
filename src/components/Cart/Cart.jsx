import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContextProvider";

const Cart = () => {
  const { getCart } = useCart();
  useEffect(() => {
    getCart();
  }, []);
  return <div>Cart</div>;
};

export default Cart;
