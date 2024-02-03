// components/CandyForm.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CandyForm = () => {
  const [candyName, setCandyName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { addToCart } = useCart();

  const handleAddCandy = () => {
    // Check if candyName, description, and price are not empty before showing details
    if (candyName && description && price) {
      // Show candy details without updating the cart
      addToCart({ candyName, description, price, quantity: 0 });
      // Clear form fields if needed
      setCandyName("");
      setDescription("");
      setPrice("");
    } else {
      alert("Please fill in all fields before showing details.");
    }
  };

  return (
    <div>
      <label>Candy Name:</label>
      <input
        type="text"
        value={candyName}
        onChange={(e) => setCandyName(e.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Price:</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddCandy}>Show Details</button>
    </div>
  );
};

export default CandyForm;
