import { useControlled } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloDetailContainer.css';
import { useEffect, useState } from 'react';
import productList from "../components/datos/productList";
import DetailList from '../components/detaillist/detailList';




const ItemDetailContainer = () => {
  
  const [detalleProducto,setDetalleProducto] = useState([]);

  useEffect (()=>{
    const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(productList)},2000);});
    promesa.then((resultado)=>{setDetalleProducto(resultado);});  
  },[]) 

  return (
        <>
          <div>
            <DetailList detail ={detalleProducto}/>
          </div>
          
        </>
  );
}

export default ItemDetailContainer;
