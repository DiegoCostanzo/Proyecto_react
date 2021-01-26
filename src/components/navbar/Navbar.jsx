import CartWidget from '../icono/CartWidget';
import './estiloNavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <img src="/images/Logo.png" className="estiloIcono" alt="Imagen del logo de la página"/>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link estiloLink " href="./#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link estiloLink" href="./#">E-commerce</a>
              </li>
              <li className="nav-item">
                <a className="nav-link estiloLink" href="./#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link estiloLink" href="./#">Contacto</a>
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
