import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SearchBar from './Component/SearchBar';
import CocktailList from './Component/CocktailList';

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  const searchCocktails = async (query) => {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
      setCocktails(response.data.drinks);
    } catch (error) {
      console.error("Error fetching the cocktails", error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Cocktail Search</h1>
      <SearchBar onSearch={searchCocktails} />
      <CocktailList cocktails={cocktails} />
    </div>
  );
};

export default App;
