import React, { useState } from 'react';
import SearchBar from './components/SearchBar'; 
import MealDetails from './components/MealDetails'; 
import RecipeCard from './components/RecipeCard'; 

const App = () => {
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleMealClick = (mealId) => {
    setSelectedMealId(mealId);
  };

  const resetSelectedMeal = () => {
    setSelectedMealId(null); // Återställ vald måltid till null
  };

  const handleRecipeCardClick = (mealId) => {
    setSelectedMealId(mealId);
    setSearchResults([]); // Rensa sökresultaten när en bild klickas
  };

  return (
    <div className="app-container">
      <h1>Food App</h1> 
      <div className="search-container">
        <SearchBar onSearch={setSearchResults} resetSelectedMeal={resetSelectedMeal} />
      </div>
      <div className="results-container">
        {searchResults.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} onMealClick={handleMealClick} onClick={handleRecipeCardClick} />
        ))}
      </div>
      <div className="details-container">
        {selectedMealId && <MealDetails mealId={selectedMealId} />}
      </div>
    </div>
  );
};

export default App;
