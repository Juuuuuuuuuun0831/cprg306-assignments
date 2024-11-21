"use client";

import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context"; 
import { useRouter } from 'next/navigation'; 
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
  const { user } = useUserAuth();  
  const router = useRouter(); 

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  
  useEffect(() => {
    if (!user) {
      router.push("/week-9");  
    }
  }, [user, router]); 

  if (!user) {
    return <div>Loading...</div>;  
  }

  const handleAddItem = (newItem) => {
    const newItemWithId = { ...newItem, id: Math.random().toString(36).substr(2, 9) };
    setItems((prevItems) => [...prevItems, newItemWithId]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      
      <div className="flex space-x-4">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}