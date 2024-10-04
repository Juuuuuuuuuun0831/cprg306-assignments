"use client";

import React, { useState } from 'react';

const NewItem = () => {

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center grid justify-items-center">

      <div className="bg-blue-500 text-center p-3 m-2 rounded-lg">Quantity: {quantity}</div>

      <button 
      onClick={increment} 
      disabled={quantity === 20}
      className="bg-green-500 p-3 mb-2 rounded-lg"
      >
        Add
      </button>

      <button 
      onClick={decrement} 
      disabled={quantity === 1}
      className="bg-red-500 p-3 rounded-lg"
      >
        Remove
      </button>

      
    </div>
  );
};

export default NewItem;


