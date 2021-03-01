import { useControlled } from '@material-ui/core';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import {  useState } from 'react';
import {  Link } from 'react-router-dom';


const Cart = () => {
  
  const CartContextUse = useContext(cartContext)
  const {carrito} = useContext(cartContext)
  let [precioFinal,setPrecioFinal] = useState(0)
  console.log(carrito==[])
  return (
        <>
          <div > 
            <h1>Cart</h1>
              {carrito.map((Producto)=>{
              precioFinal = (Producto.precio) + precioFinal
              console.log(precioFinal)
              return <table>
              <tbody>
              <tr className="pr-5">   
              <td className="pr-5"><p>{Producto.nombre}</p></td>
              <td><p>{Producto.precio}</p></td>
              </tr>
              </tbody>
              
              </table>  
              }
              ,<p>{precioFinal}</p>)}   
          </div>
          {carrito ==0 ? <p>No hay productos en el carrito <Link to={`/categoria/${'Cocina'}`}><button>Ir a tienda</button></Link></p>:<p>{precioFinal}</p>}
        </>
  );
}

export default Cart;

