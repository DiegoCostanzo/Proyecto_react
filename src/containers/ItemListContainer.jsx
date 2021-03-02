import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloContainer.css';
import productList from "../components/datos/productList";
import { useEffect, useState } from 'react';
import ItemList from '../components/itemList/itemList';
import { getFirestore } from '../firebase';





const ItemListContainer = () => {
  
  const [productos,setProductos] = useState([]);
  
  useEffect (()=>{
    const baseDeDatos= getFirestore();
    const itemCollection= baseDeDatos.collection("Productos");
    itemCollection.get().then((value) => {
      let aux = value.docs.map(element =>
        {return {...element.data()}})
      
        setProductos(aux);
        
      })
    
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
