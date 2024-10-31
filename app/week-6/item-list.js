"use client";
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [itemList, setItemList] = useState(items);
  const [sortBy, setSortBy] = useState('name');

  const sortedItemList = [...itemList].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-md mx-auto mt-4">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`p-2 rounded-lg mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-2 rounded-lg ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItemList.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}