"use client";

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(item); 
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  return (
    <div className="max-w-md mx-auto p-8 border rounded-lg shadow-md bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Item Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Item Name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Category:
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="meat">Meat</option>
              <option value="bakery">Bakery</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="bg-purple-500 text-white text-center p-3 rounded-lg">Quantity: {quantity}</div>
          <div>
            <button 
              type="button"
              onClick={increment} 
              disabled={quantity === 20}
              className="bg-green-500 text-white p-2 rounded-lg mr-2 hover:bg-green-600 disabled:opacity-50"
            >
              Add
            </button>
            <button 
              type="button"
              onClick={decrement} 
              disabled={quantity === 1}
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 disabled:opacity-50"
            >
              Remove
            </button>
          </div>
        </div>

        <button 
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;
