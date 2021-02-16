import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloContainer.css';
import productList from "../components/datos/productList";
import { useEffect, useState } from 'react';
import ItemList from '../components/itemList/itemList';




const ItemListContainer = () => {
  
  const [productos,setProductos] = useState([]);
  
  useEffect (()=>{
    const promesa = new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve(productList)},2000);});
    promesa.then((resultado)=>setProductos(resultado));
  },[])
  
  return (
        <>
          <div>
            <ItemList propProductos={productos}/>
          </div>
        </>
  );
}

export default ItemListContainer;
