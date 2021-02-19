import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloDetailContainer.css';
import { useEffect, useState } from 'react';
import productList from "../components/datos/productList";
import ItemDetail from '../components/detalleProducto/ItemDetail';
import {  useParams } from 'react-router-dom';




const ItemDetailContainer = () => {
  
  const [detalleProducto,setDetalleProducto] = useState([]);
  const {id} = useParams();
  
  useEffect (()=>{
    const promesa = new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve(productList)},2000);});
    promesa.then(productList.map((Producto)=>{
      if(Producto.id === id){
        return (resultado)=>setDetalleProducto(resultado)
      }else{
        return null;
      }
      
    }));
 
  },[])
  

  return (
        <>
          <div>
            <ItemDetail detail ={detalleProducto} /> 
          </div>
          
        </>
  );
}

export default ItemDetailContainer;
