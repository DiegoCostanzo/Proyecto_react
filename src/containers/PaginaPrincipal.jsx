import { Link } from "react-router-dom";
import "../containers/estiloTitulo.css";

const PaginaPrincipal = () => {
   
    return (
          <>
            
              <div>
                  <div className="image-principal">
                      <img src="/images/tienda.png" alt="imagen de la tienda" className="imagen_principal"/>
                  </div>
                  <div className="flex-principal mt-3 container">
                    <div className="estilo-box-card">
                        <div className="center mr-1">
                            <div className="property-card">
                            <Link to={`/categoria/${'Libreria'}`}><div className="property-image imagen1"><div className="property-image-title"></div></div></Link>
                                    <div className="property-description">
                                        <h5 className="estilo-letra-card"> Librería </h5>
                                        <p className="estilo-letra-card mt-4">En esta sección podrás encontrar todos los articulos de librería.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="estilo-box-card">
                        <div className="center mr-1">
                            <div className="property-card">
                            <Link to={`/categoria/${'Decoracion'}`}><div className="property-image imagen2"><div className="property-image-title"></div></div></Link>
                                    <div className="property-description">
                                        <h5 className="estilo-letra-card"> Decoración </h5>
                                        <p className="estilo-letra-card mt-4">En esta sección podrás encontrar todos los articulos de decoración para el hogar.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="estilo-box-card">
                        <div className="center mr-1">
                            <div className="property-card">
                            <Link to={`/categoria/${'Jugueteria'}`}><div className="property-image imagen3"><div className="property-image-title"></div></div></Link>
                                    <div className="property-description">
                                        <h5 className="estilo-letra-card"> Juguetería </h5>
                                        <p className="estilo-letra-card mt-4">En esta sección podrás encontrar todos tipo de juguetes para regalar.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="estilo-box-card">
                        <div className="center mr-1">
                            <div className="property-card">
                            <Link to={`/categoria/${'Bazar'}`}><div className="property-image imagen4"><div className="property-image-title"></div></div></Link>
                                    <div className="property-description">
                                        <h5 className="estilo-letra-card"> Bazar </h5>
                                        <p className="estilo-letra-card mt-4">En esta sección podrás encontrar todos los articulos de bazar.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="estilo-box-card">
                        <div className="center mr-1">
                            <div className="property-card">
                            <Link to={`/categoria/${'Adornos'}`}><div className="property-image imagen5"><div className="property-image-title"></div></div></Link>
                                    <div className="property-description">
                                        <h5 className="estilo-letra-card"> Adornos </h5>
                                        <p className="estilo-letra-card mt-4">En esta sección podrás encontrar todos los adornos para decorar tu hogar.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                    <div className="estilo-parrafo-principal mt-5 container"><h4>TiendaCool es una empresa mayorista en donde podrás encontrar una gran variedad de productos. Nuestros productos son de la mejor calidad, ya que importamos productos de las mejores marcas.</h4></div>
              </div>
          </>
    );
  }
  
  export default PaginaPrincipal;
  