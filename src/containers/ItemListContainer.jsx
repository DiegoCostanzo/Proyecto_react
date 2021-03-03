import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloContainer.css';
import productList from "../components/datos/productList";
import { useEffect, useState } from 'react';
import ItemList from '../components/itemList/itemList';
import { getFirestore } from '../firebase';
import {useContext} from 'react';
import {cartContext} from '../../src/contex/CartContext';




const ItemListContainer = () => {
  
  const CartContextUse = useContext(cartContext)
  const {productos} = useContext(cartContext)
  
  
  return (
        <>
          <div>
            <ItemList propProductos={productos}/>
          </div>
        </>
  );
}

export default ItemListContainer;
