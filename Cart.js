// components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((candy, index) => (
          <div key={index} className="cart-item">
            <p>
              {candy.candyName} - ${candy.price} - Quantity: {candy.quantity}
            </p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Cart is empty.</p>
      )}
      {cart.length > 0 && (
        <div>
          <p>Total: ${cartTotal}</p>
          <button onClick={() => console.log("Proceed to Buy")}>
            Proceed to Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
