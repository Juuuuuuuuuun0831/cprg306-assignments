"use client";

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas max-w-md mx-auto p-4 mt-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center mb-4">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 mr-4 rounded" />
              <span className="font-medium">{meal.strMeal}</span>
            </li>
          ))
        ) : (
          <p>No meal ideas found for this ingredient.</p>
        )}
      </ul>
    </div>
  );
};

export default MealIdeas;
