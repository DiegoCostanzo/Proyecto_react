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
       
            product.forEach(function(producto, index, object) {
                if(producto.id === detail.id){
                 object.splice(index, 2);
                 console.log(product);
                }
            });
    }
    

    return(
        
        <cartContext.Provider value={{product,addCart,removerItem,quantity:product.length}}>
            {children}
        </cartContext.Provider>

    )
}

export default CartContext