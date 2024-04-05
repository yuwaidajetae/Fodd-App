import React from 'react';

const RecipeCard = ({ meal, onMealClick, onClick }) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  
  const handleClick = () => {
    onClick(idMeal); // Anropa funktionen som rensar andra valda måltider
    onMealClick(idMeal);
  };

  return (
    <div className="recipe-card">
      <h3>{strMeal}</h3>
      <img 
        src={strMealThumb} 
        alt={strMeal} 
        className="recipe-image" 
        onClick={handleClick} 
        style={{ cursor: 'pointer' }} // Lagt till stilen för pekaren
      />
    </div>
  );
};

export default RecipeCard;
