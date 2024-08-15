import React from 'react';
import CocktailItem from './CocktailItem';

const CocktailList = ({ cocktails }) => {
  if (!cocktails) return <p>No cocktails found.</p>;

  return (
    <div className="row">
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink} className="col-md-4 mb-4">
          <CocktailItem cocktail={cocktail} />
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
