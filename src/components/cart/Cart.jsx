import { useControlled } from '@material-ui/core';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import {  useState } from 'react';
import {  Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import '../cart/Cart.css';
import {  NavLink } from 'react-router-dom';

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
          <div className="container">
              <h1 className="titulo-cart">Cart</h1> 
                <table className="table  table-striped">
                  <thead>
                  <tr className="pl-5">
                    <th scope="col" className="texto-columna-titulo">Producto</th>
                    <th scope="col" className="texto-columna-titulo">Descripcion</th>
                    <th scope="col" className="texto-columna-titulo">Cantidad</th>
                    <th scope="col" className="texto-columna-titulo">Precio</th>
                  </tr>
                  </thead>
                  <tbody> 
                  {carrito.map((Producto)=>{
                  
                  precioFinal = (Producto[0].precio*Producto[1]) + precioFinal
                    return <tr className="">
                              <td className="imagen-cart align-middle"><img src={Producto[0].imagen} className="card-img-top" alt="Imagen del producto caja trenzada" width="100" height="120"/></td>   
                              <td className="align-middle texto-columna-texto"><p>{Producto[0].nombre}</p></td>
                              <td className="align-middle texto-columna-texto"><p>{Producto[1]}</p></td>
                              <td className="align-middle texto-columna-texto"><p>${Producto[0].precio*Producto[1]}</p></td>
                            </tr>    
                            })}    
                </tbody>
                </table>
            </div>
          {carrito ==0 ? <div className="estilo-no-productos"><div><p className="estilo-parrafo-cart">No hay productos en el carrito</p></div><div> <Link to={`/`}><button className="btn btn-outline-dark btn-lg btn btn-light">Ir a tienda</button></Link></div></div>:<div className="estilo-final-tabla"><div><Link to={`/Pago`} ><button className=" btn btn-outline-dark btn-lg btn btn-light boton-cart">Realizar Compra</button></Link></div><div> <p className="estilo-precio-final ">Total a pagar:<strong>${precioFinal}</strong></p></div></div>}
        
        </>
  );
}
export default Cart;

