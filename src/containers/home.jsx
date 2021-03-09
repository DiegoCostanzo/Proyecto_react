import { Link } from 'react-router-dom';
import ItemCounts from '../components/controlItems/ItemCounts';
import { useState } from 'react';
import {useContext} from 'react';
import {cartContext} from '../../src/contex/CartContext';
import HomeList from '../components/homeList/homeList';


const Home = () => {
   const CartContextUse = useContext(cartContext)
   const {productos} = useContext(cartContext)
    return (
    <>
       <div>
            <HomeList propProductos={productos}/>
      </div>
    </>
    )       
  };
  
  
  export default Home ;
  