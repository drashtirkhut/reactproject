import React from 'react';

const CocktailItem = ({ cocktail }) => {
  return (
    <div className="card">
      <img src={cocktail.strDrinkThumb} className="card-img-top" alt={cocktail.strDrink} />
      <div className="card-body">
        <h5 className="card-title">{cocktail.strDrink}</h5>
        <p className="card-text">{cocktail.strInstructions}</p>
        <a href={`https://www.thecocktaildb.com/drink/${cocktail.idDrink}`} className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default CocktailItem;
