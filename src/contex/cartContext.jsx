import { useControlled } from '@material-ui/core';
import React, {createContext} from 'react';
import {  useState,useEffect } from 'react';
import { getFirestore } from '../firebase';


export const cartContext = createContext()



function CartContext ({children}) {
    const [carrito,setCarrito] = useState([])

    const [product,setProduct] = useState([])
    let [cantidadCarrito,setCantidadCarrito] = useState(0)
    const [precioFinal,setPrecioFinal] = useState([])
    let [cantidadFinal,setCantidadFinal] = useState([])
    let [productosCantidad,setProductosCantidad] = useState([])
    let [total,setTotal] = useState(0)
    const [productos,setProductos] = useState([]);
    const addCart = (detail,quantity) =>{
        //if(isInCart(item.id )=== -1){
            //console.log(detail);
            
            setProduct(detail,quantity);
            setCarrito([...carrito,detail]);
            setCantidadCarrito(detail[1])
            cantidadFinal.push({detail:detail[1],id:detail[0].id});
            
            console.log("Cantidad",cantidadFinal)
                      
            // 
            
        //}
        //else{
            //quantity++;
        //}
    }
    //const isInCart = (id) =>{ 
        //return product.findIndex(prod => prod.id == id)
   // }
   
    const removerItem = (detail) =>{
        
        const newProduct = carrito.filter(p => p[0].id !== detail.id);
        setCarrito(newProduct);
        const newCantidad = cantidadFinal.filter(p => p.id !== detail.id);
        setCantidadFinal(newCantidad);
        console.log("Cantidad",cantidadFinal)
    }
    useEffect (()=>{
        
        localStorage.setItem("carrito",JSON.stringify(carrito));
      },[carrito])
      
      useEffect (()=>{
        const baseDeDatos= getFirestore();
        const itemCollection= baseDeDatos.collection("Productos");
        itemCollection.get().then((value) => {
          let aux = value.docs.map(element =>
            {return {...element.data(),id:element.id}})
          
            setProductos(aux);
            
          })
          
      },[])
      console.log(productos)
   
    
    return(
        
        <cartContext.Provider value={{productos,total,cantidadFinal,carrito,product,addCart,removerItem,quantity:product.length}}>
            {children}
        </cartContext.Provider>

    )
}

export default CartContext