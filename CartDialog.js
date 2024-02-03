// components/CartDialog.js
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import "../index.css";

const CartDialog = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Cart Details</h2>
      {cart.map((candy, index) => (
        <CartItem key={index} candy={candy} index={index} />
      ))}
      {/* Display total or other cart information */}
      {/* Buttons for remove, add item, proceed to buy, add more items */}
    </div>
  );
};

export default CartDialog;
