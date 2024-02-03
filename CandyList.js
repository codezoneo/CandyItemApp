// components/CandyList.js
import React from "react";
import { useCart } from "../context/CartContext";

const CandyList = () => {
  const { candyDetails, addToCartAndUpdateQuantity } = useCart();

  const handleAddToCart = (candy, quantity) => {
    addToCartAndUpdateQuantity(candy, quantity);
  };

  return (
    <div>
      <h2>Added Candies</h2>
      {candyDetails && candyDetails.length > 0 ? (
        candyDetails.map((candy, index) => (
          <div key={index}>
            <p>
              {candy.candyName} - {candy.description} - ${candy.price} -
              Quantity: {candy.quantity}
            </p>
            <div>
              <button onClick={() => handleAddToCart(candy, 1)}>Add 1</button>
              <button onClick={() => handleAddToCart(candy, 2)}>Add 2</button>
              <button onClick={() => handleAddToCart(candy, 3)}>Add 3</button>
            </div>
          </div>
        ))
      ) : (
        <p>No candies added yet.</p>
      )}
    </div>
  );
};

export default CandyList;
