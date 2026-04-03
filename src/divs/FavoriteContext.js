// FavoriteContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
