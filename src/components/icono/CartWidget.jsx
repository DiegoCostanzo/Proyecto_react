import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import './estiloCartWidget.css';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import {  useState,useEffect } from 'react';
import CarritoDesplegable from '../carritoDesplegable/CarritoDesplegable';
import { useControlled } from '@material-ui/core';

const CartWidget = () => {
  const CartContextUse = useContext(cartContext)
  const {carrito,cantidadFinal} = useContext(cartContext)
  let [cantidad,setCantidad] = useState([])
  
  let total = cantidadFinal.reduce((a, b) => a + b, 0);
  console.log(total);
  
  
  
  return (
        <>
            <div className="nav-link estilo-icono">
              <FaShoppingCart/>
              {total}
            </div>
        </>
  );
}

export default CartWidget;
