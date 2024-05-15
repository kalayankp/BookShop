import React, { useState, useEffect } from 'react';
import './Favorites.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
      if (savedFavorites) {
        setFavorites(savedFavorites);
      }
    }, []);
  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-item">
              <h2>{favorite.title}</h2>
              {/* Check if authors exist before using join */}
              <p>Authors: {favorite.authors ? favorite.authors.join(', ') : 'Unknown'}</p>
              <p>Published Date: {favorite.publishedDate}</p>
              <img src={favorite.thumbnail} alt={favorite.title} />
              <button onClick={() => removeFavorite(favorite.id)}>Remove Favorite</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;