import CartWidget from '../icono/CartWidget';
import './estiloNavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from 'react-router-dom';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import {  useState } from 'react';

const Navbar = () => {
  const CartContextUse = useContext(cartContext)
  const {carrito,cantidadFinal} = useContext(cartContext)
  let [precioFinalCarrito,setPrecioFinalCarrito] = useState(0)
  return (
<>
  <nav className="navbar navbar-expand-lg navbar-light colorNavbar sticky-top">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse estiloFlex" id="navbarTogglerDemo01">
          <div>
            <Link to={"/PaginaPrincipal"}><img src="/images/Logo.png" className="estiloIcono" alt="Imagen del logo de la página"/></Link>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navegador">
              <li className="nav-item">
                <Link className="nav-link estiloLink" to={"/PaginaPrincipal"}>Home</Link>
              </li>
              <li className="nav-item  li-lista">
                <Link className="nav-link estiloLink" to={`/`}>Productos</Link>
                <ul className="ul-lista">
                  <li className="nav-item estilo-lista-productos ">
                    <Link className="nav-link estiloLink-lista" to={`/categoria/${'Bazar'}`}>Bazar</Link>
                  </li>
                  <li className="nav-item estilo-lista-productos">
                    <Link className="nav-link estiloLink-lista" to={`/categoria/${'Adornos'}`}>Adornos</Link>
                  </li>
                  <li className="nav-item estilo-lista-productos">
                    <Link className="nav-link estiloLink-lista" to={`/categoria/${'Jugueteria'}`}>Jugueteráa</Link>
                  </li>
                  <li className="nav-item estilo-lista-productos">
                    <Link className="nav-link estiloLink-lista" to={`/categoria/${'Libreria'}`}>Librería</Link>
                  </li>
                  <li className="nav-item estilo-lista-productos">
                    <Link className="nav-link estiloLink-lista" to={`/categoria/${'Decoracion'}`}>Decoración</Link>
                  </li>
                  <li className="nav-item estilo-lista-productos">
                    <Link className="nav-link estiloLink-lista" to={`/`}>Todos los productos</Link>
                  </li>     
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link estiloLink" to={"/Nosotros"}>Nosotros</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link estiloLink" to={"/Contacto"}>Contacto</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link estiloLink" to={"/Cart"}>Cart</Link>
              </li>
              <li className="nav-item li-lista1">
                <CartWidget/>
                  <ul className="ul-lista1 pr-5">
                    <table className="table table-striped ">
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
                      precioFinalCarrito = (Producto[0].precio*Producto[1]) + precioFinalCarrito
                      return <tr className="">
                              <td className="imagen-cart align-middle"><img src={Producto[0].imagen} className="card-img-top " alt="Imagen del producto caja trenzada" width="100" height="100"/></td>   
                              <td className="align-middle texto-columna-texto"><p>{Producto[0].nombre}</p></td>
                              <td className="align-middle texto-columna-texto"><p>{Producto[1]}</p></td>
                              <td className="align-middle texto-columna-texto"><p>${Producto[0].precio*Producto[1]}</p></td>
                            </tr>    
                            })}    
                      </tbody>
                    </table>
                    <div>
                    <div> <p className="estilo-precio-carrito">Total a pagar:<strong>${precioFinalCarrito}</strong></p></div>
                    </div>
                  </ul>
                </li>
              </ul>
          </div>
        </div>
    </div>
  </nav>
</>
  );
}

export default Navbar;
