import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import './estiloCartWidget.css';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import {  useState } from 'react';
import CarritoDesplegable from '../carritoDesplegable/CarritoDesplegable';

const CartWidget = () => {
  const CartContextUse = useContext(cartContext)
  const {carrito} = useContext(cartContext)
  let [cantidadCarrito,setCantidadCarrito] = useState(0)
  cantidadCarrito = carrito.length
  
  return (
        <>
            <div className="nav-link estilo-icono">
              
              {cantidadCarrito ==0?<span></span>:<span className="pt-5" display="none"><FaShoppingCart/>{cantidadCarrito}</span>}
              
            </div>
        </>
  );
}

export default CartWidget;
