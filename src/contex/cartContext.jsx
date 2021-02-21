import { useControlled } from '@material-ui/core';
import React, {createContext} from 'react';
import {  useState } from 'react';


export const cartContext = createContext()



function CartContext ({children}) {
    const [product,setProduct] = useState([])
    const addCart = (item,quantity) =>{
        if(isInCart(item.id )=== -1){
            setProduct(item)
        }
        else{
            quantity++;
        }
    }
    const isInCart = (id) =>{ 
        return product.findIndex(prod => prod.id == id)
    }
    const removerItem = (detail) =>{
       
        const newProduct = product.filter(p => p.id !== detail.id);
        setProduct(newProduct);
    
    }
    

    return(
        
        <cartContext.Provider value={{product,addCart,removerItem,quantity:product.length}}>
            {children}
        </cartContext.Provider>

    )
}

export default CartContext