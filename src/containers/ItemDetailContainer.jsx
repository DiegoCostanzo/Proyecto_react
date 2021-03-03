import { useControlled } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloDetailContainer.css';
import { useEffect, useState } from 'react';
import productList from "../components/datos/productList";
import DetailList from '../components/detaillist/detailList';
import { getFirestore } from '../firebase';
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
  const { id } = useParams()
  let [detalleProducto,setDetalleProducto] = useState([]);
  
  useEffect (()=>{
    const baseDeDatos= getFirestore();
    const itemCollection= baseDeDatos.collection("Productos");
    const item = itemCollection.doc(id)
    item.get().then((value) => {
         setDetalleProducto([{...value.data(), id: value.id}]);         
          console.log(value.data())
      })
},[]) 
  console.log(detalleProducto)

  return (
        <>
          <div>
            <DetailList detail ={detalleProducto}/>
          </div>
          
        </>
  );
}

export default ItemDetailContainer;
