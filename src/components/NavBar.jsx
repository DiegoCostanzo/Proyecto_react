import 'bootstrap/dist/css/bootstrap.min.css';

let colorNavbar = {background:'#FEFBF4'};
let estiloLogo = {width:'20%', height:'20%'};
let estiloLink = {fontFamily:'Potta One, cursive'};
let estiloNavbar = {display: 'flex', flexDirection: 'row',justifyContent: 'space-between'};

const Navbar = () => {
  return (

  <nav className="navbar navbar-expand-lg navbar-light" style={colorNavbar}>
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={estiloNavbar}>
          <div>
            <img src="/images/Logo.png" alt="Imgan del logo de la página" style={estiloLogo}/>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" style={estiloLink}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={estiloLink}>E-commerce</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={estiloLink}>Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={estiloLink}>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </nav>

  );
}

export default Navbar;
