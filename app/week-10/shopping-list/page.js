"use client";

import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context"; 
import { useRouter } from 'next/navigation'; 
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../../_services/shopping-list-service';

export default function ShoppingList() {
  const { user } = useUserAuth();  
  const router = useRouter(); 

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async () => {
    try {
      if (!user?.uid) return;
      const userItems = await getItems(user.uid); 
      setItems(userItems); 
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-10"); 
    } else {
      loadItems(); 
    }
  }, [user, router]);

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem); 
      const newItemWithId = { ...newItem, id: itemId }; 
      setItems((prevItems) => [...prevItems, newItemWithId]); 
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
