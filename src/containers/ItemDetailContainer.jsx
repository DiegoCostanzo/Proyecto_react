import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloDetailContainer.css';
import { useEffect, useState } from 'react';
import productDetail from "../components/Detalle/productDetail";
import ItemDetail from '../components/detalleProducto/ItemDetail';




const ItemDetailContainer = () => {
  
  const [detalleProducto,setDetalleProducto] = useState([]);
  
  useEffect (()=>{
    const promesa = new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve(productDetail)},2000);});
    promesa.then((resultado)=>setDetalleProducto(resultado));
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
