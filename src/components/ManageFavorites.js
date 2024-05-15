import React, { useState } from 'react';

const ManageFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <div>
      <h1>Manage Favorites</h1>
      <div>
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <h2>{favorite.title}</h2>
            <p>Authors: {favorite.authors.join(', ')}</p>
            <p>Published Date: {favorite.publishedDate}</p>
            <img src={favorite.thumbnail} alt={favorite.title} />
            <button onClick={() => removeFavorite(favorite.id)}>Remove Favorite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageFavorites;
