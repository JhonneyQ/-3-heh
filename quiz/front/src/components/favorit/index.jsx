import React, { createContext, useState } from "react";

export const FavContext = createContext(null);

const Provider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFav = (prod) => {
    const found = favorites.find((p) => p._id === prod._id);
    console.log(prod);

    if (found) {

        
      setFavorites((p) => p.filter((q) => q._id !== prod._id));
    } else {
        console.log("aaa");
        
      setFavorites((p) => [...p, {...prod}]);
    }
  };

  return (
    <FavContext.Provider value={{ toggleFav, favorites }}>
      {children}
    </FavContext.Provider>
  );
};

export default Provider;
