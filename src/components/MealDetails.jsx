import React, { useState, useEffect } from 'react';

const MealDetails = ({ mealId }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        }
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (!meal) {
    return <div style={{ color: 'whitesmoke' }}>Loading meal details...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'whitesmoke' }}>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ display: 'block', margin: '0 auto', borderRadius: '2%', width: '350px', height: '350px' }} />
      <p style={{ color: 'whitesmoke', textAlign: 'center', lineHeight: '2.3', maxWidth: '800px', margin: '0 auto' }}>{meal.strInstructions}</p>
      <h3 style={{ color: 'whitesmoke' }}>Ingredients:</h3>
<ul style={{ textAlign: 'center', listStylePosition: 'inside', paddingInlineStart: 0 }}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
          const ingredient = meal[`strIngredient${index}`];
          const measure = meal[`strMeasure${index}`];
          if (ingredient && ingredient.trim() !== '') {
            return (
              <li key={index} style={{ color: 'whitesmoke', textAlign: 'center' }}>
                {measure} {ingredient}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default MealDetails;
