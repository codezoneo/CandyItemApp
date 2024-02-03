// App.js
import React, { useState } from "react";
import CandyForm from "./components/CandyForm";
import CandyList from "./components/CandyList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./styles.css";

const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleToggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <div>
        <div className="header">
          <h1>Candy Shop</h1>
          <button onClick={handleToggleCart} className="cart-button">
            Cart
          </button>
        </div>
        <div className="container">
          <CandyForm />
          <CandyList />
        </div>
        {isCartOpen && (
          <div className="cart-container">
            <Cart />
          </div>
        )}
      </div>
    </CartProvider>
  );
};

export default App;
