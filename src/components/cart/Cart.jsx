import { useControlled } from '@material-ui/core';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import {  useState } from 'react';
import {  Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const Cart = () => {
  const[name,setName]=useState("");
  const[mail,setMail]=useState("");
  const[mail2,setMail2]=useState("");
  const[telefono,setTelefono]=useState("");
  const[idOrden,setIdOrden]=useState("");
  const CartContextUse = useContext(cartContext)
  const {carrito} = useContext(cartContext)
  let [precioFinal,setPrecioFinal] = useState(0)
  
  const finalizarCompra = ()=>{
    let nuevaOrden = {buyer:{name:name,mail:mail,telefono:telefono},items: {...carrito},total:precioFinal};
    const baseDeDatos= getFirestore();
    const ordenesCollection= baseDeDatos.collection("ordenes");
    ordenesCollection.add(nuevaOrden).then((value)=>{
      console.log(value.id)
      setIdOrden(value.id)
    })
    console.log(nuevaOrden)
  }
  console.log(mail2)
    

  return (
        <>
          <div > 
            <h1>Cart</h1>
              {carrito.map((Producto)=>{
              precioFinal = (Producto[0].precio*Producto[1]) + precioFinal
              return <table>
              <tbody>
              <tr className="pr-5">   
              <td className="pr-5"><p>{Producto[0].nombre}</p></td>
              <td><p>{Producto[0].precio*Producto[1]}</p></td>
              </tr>
              </tbody>
              
              </table>  
              }
              ,<p>{precioFinal}</p>)}   
          </div>
          {carrito ==0 ? <p>No hay productos en el carrito <Link to={`/categoria/${'Cocina'}`}><button>Ir a tienda</button></Link></p>:<p>{precioFinal}</p>}
          <div>
            <input type="text" placeholder="Ingrese su nombre" onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <input type="text" placeholder="Ingrese su mail" onChange={(e)=>{setMail(e.target.value)}}/>
            <br/>
            <input type="text" placeholder="Confirme su mail" onChange={(e)=>{setMail2(e.target.value)}}/>
            <br/>
            <input type="text" placeholder="Ingrese su telefono" onChange={(e)=>{setTelefono(e.target.value)}}/>
            <br/>
            {mail!==mail2 ? <p>Los emails ingresados no son iguales</p> : <p></p> }
            <button disabled={mail!==mail2} onClick={()=>{finalizarCompra()}}>Finalizar compra</button>
            <p>Su numero de orden de compra es: <h2>{idOrden}</h2></p>
          </div>
        </>
  );
}

export default Cart;

