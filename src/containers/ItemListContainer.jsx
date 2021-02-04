import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCounts from '../components/controlItems/ItemCounts';
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
           
           <div className="card estilo-tarjeta" >
            <img src="/images/caja_trenzada.jpg" className="card-img-top estilo-imagen" alt="Imagen del producto caja trenzada"/>
              <div className="card-body">
                <h4 className="card-title">Caja trenzada</h4>
                <p className="card-text">Medidas:32x13x22cm Color:Blanco/Marrón/Negro</p>
                <ItemCounts inicial={1} stock={5} onAdd={""} />
            </div>
          </div>
          <div>
            <ItemList propProductos={productos}/>
          </div>

        </>
  );
}

export default ItemListContainer;
