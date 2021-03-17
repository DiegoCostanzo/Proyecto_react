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
  let total = 0;
  //let total = cantidadFinal.reduce((a, b) => a.detail + b.detail , 0 );
  cantidadFinal.forEach((a)=>{
     total = total +  a.detail;
   return total})
  //console.log("total",total);
  
  
  
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
