import { useControlled } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloDetailContainer.css';
import { useEffect, useState } from 'react';
import productList from "../components/datos/productList";
import DetailList from '../components/detaillist/detailList';
import { getFirestore } from '../firebase';




const ItemDetailContainer = () => {
  
  const [detalleProducto,setDetalleProducto] = useState([]);

  useEffect (()=>{
    const baseDeDatos= getFirestore();
    const itemCollection= baseDeDatos.collection("Productos");
    itemCollection.get().then((value) => {
      let aux = value.docs.map(element =>
        {return {...element.data()}})
      
        setDetalleProducto(aux);
        
      })  
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
