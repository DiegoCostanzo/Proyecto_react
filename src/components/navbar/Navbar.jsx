import CartWidget from '../icono/CartWidget';
import './estiloNavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
<>
  <nav className="navbar navbar-expand-lg navbar-light colorNavbar">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse estiloFlex" id="navbarTogglerDemo01">
          <div>
            <NavLink to={"/categoria/:categoriaID"}><img src="/images/Logo.png" className="estiloIcono" alt="Imagen del logo de la página"/></NavLink>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link estiloLink" to={"/PaginaPrincipal"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link estiloLink" to={`/categoria/${'Cocina'}`}>Cocina</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link estiloLink" to={`/categoria/${'Adornos'}`}>Adornos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link estiloLink" to={"/Nosotros"}>Nosotros</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link estiloLink" to={"/Contacto"}>Contacto</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link estiloLink" to={"/Cart"}>Cart</NavLink>
              </li>
              <li className="nav-item">
                <CartWidget/>
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
