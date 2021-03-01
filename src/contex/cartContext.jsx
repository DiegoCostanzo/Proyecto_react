import { useControlled } from '@material-ui/core';
import React, {createContext} from 'react';
import {  useState,useEffect } from 'react';


export const cartContext = createContext()



function CartContext ({children}) {
    const [carrito,setCarrito] = useState([])

    const [product,setProduct] = useState([])
    
    const addCart = (detail,quantity) =>{
        //if(isInCart(item.id )=== -1){
            //console.log(detail);
            setProduct(detail,quantity);
            setCarrito([...carrito,detail]);
            
            // 
            
        //}
        //else{
            //quantity++;
        //}
    }
    //const isInCart = (id) =>{ 
        //return product.findIndex(prod => prod.id == id)
   // }
   
    const removerItem = (detail,quantity) =>{
       
        const newProduct = carrito.filter(p => p.id !== detail.id);
        setCarrito(newProduct);
        console.log(newProduct)
    
    }
    useEffect (()=>{
        console.log(product);
        console.log(carrito);
        localStorage.setItem("carrito",JSON.stringify(carrito));
      },[carrito])
   
    
    return(
        
        <cartContext.Provider value={{carrito,product,addCart,removerItem,quantity:product.length}}>
            {children}
        </cartContext.Provider>

    )
}

export default CartContext