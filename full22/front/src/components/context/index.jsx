import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const Context = createContext(null)



const ConProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const toggleFav = (prod) =>{
        const found = favorites.find((p)=>p._id === prod._id)

        if(found){
            setFavorites((prev)=>prev.filter((p)=>p._id !== prod._id))
        }else{
            setFavorites((p)=>[...p,prod])
        }
    }

  return (
    <Context.Provider value={{favorites, toggleFav}}>{children}</Context.Provider>
  )
}

export default ConProvider