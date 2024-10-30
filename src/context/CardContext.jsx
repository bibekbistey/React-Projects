import React, { useState } from 'react'
import Products from '../components/Products';

const CardContext = React.createContext();

export const CardContextProvider=({children})=>{
    const [cart,setCart]=useState([]);
    
    const displayCart=(produ)=>{
        
        setCart([...cart,produ])
        console.log("cart:",cart)
    }

    return(

        

        <CardContext.Provider value={{cart,displayCart}}>
            {children}
        </CardContext.Provider>
    )

}
export default CardContext