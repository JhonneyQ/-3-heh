import React, { createContext, useState } from "react";

export const favContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFav = (prod) => {
    const found = favorites.find((fav) => fav._id === prod._id);
    if (found) {
      setFavorites((prev) => prev.filter((p) => p._id !== prod._id));
    } else {
      setFavorites((p) => [...p, prod]);
    }
  };

  return (
    <favContext.Provider value={{ toggleFav, favorites }}>
      {children}
    </favContext.Provider>
  );
};

export default ContextProvider;
