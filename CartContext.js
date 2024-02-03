// context/CartContext.js
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [candyDetails, setCandyDetails] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (candy) => {
    setCandyDetails([...candyDetails, { ...candy, quantity: 1 }]); // Set quantity to 1
  };

  const updateCartQuantity = (index, quantity) => {
    const existingIndex = cart.findIndex(
      (item) => item.candyName === candyDetails[index].candyName
    );
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    }
  };

  const addToCartAndUpdateQuantity = (candy, quantity) => {
    const existingIndex = cart.findIndex(
      (item) => item.candyName === candy.candyName
    );

    if (existingIndex !== -1) {
      updateCartQuantity(existingIndex, quantity);
    } else if (quantity > 0) {
      setCart([...cart, { ...candy, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce(
    (total, candy) => total + candy.price * candy.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        candyDetails,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        addToCartAndUpdateQuantity,
        cart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
