// components/CartItem.js
import React from "react";
import { useCart } from "../context/CartContext";
import "../index.css";

const CartItem = ({ candy, index }) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(index);
  };

  return (
    <div>
      <p>
        {candy.candyName} - {candy.description} - ${candy.price}
      </p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
