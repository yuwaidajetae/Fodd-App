import React, { useState } from 'react';

const SearchBar = ({ onSearch, resetSelectedMeal, resetSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetSelectedMeal(); // Återställ vald måltid när en sökning görs
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => response.json())
      .then(data => {
        onSearch(data.meals);
      })
      .catch(error => console.error('Error searching meals:', error));
  };

  const handleReset = () => {
    setQuery('');
    resetSelectedMeal(); // Återställ vald måltid när resetknappen klickas
    resetSearchResults(); // Återställ sökresultaten när resetknappen klickas
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search meals..."
          style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
      </form>
      <button onClick={handleReset} style={{ marginLeft: '10px', padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Reset</button>
    </div>
  );
};

export default SearchBar;
