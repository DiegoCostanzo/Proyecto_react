import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';



const Cart = () => {
  
  const CartContextUse = useContext(cartContext) 
  console.log(CartContextUse);
  return (
        <>
          <div>
          <h1 className="estilo-titulo-seccion">Cart</h1>
          </div>
        </>
  );
}

export default Cart;