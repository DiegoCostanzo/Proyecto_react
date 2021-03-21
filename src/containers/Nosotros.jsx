import "../containers/estiloTitulo.css";
import { FaIdCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Nosotros = () => {
    return (
          <>
              <div>
                  <div>
                      <img className="estilo-imagen-nosotros mt-3"  src="/images/imagen_tienda_nosotros.jpg" alt="imagen de la tienda"/>
                  </div>
                  <div className="mt-4 texto-nosotros">Contamos con un amplio local ubicado en el centro de Córdoba en donde podrás encontrar todos los productos que se encuentran exhibidos en la página. Tenemos un equipo de ventas con los mejores profesionales para poder brindar el mejor asesoramiento personalizado.</div>
                  <div className="estilo-contacto-mapa mt-5">
                      <div>
                        <iframe className="estilo-mapa" width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Pedro%20Arata%201905,%20X5003AOA%20C%C3%B3rdoba&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                      </div>
                      <div>
                        <div className="titulo-conctaco-mapa">Contacto</div>
                        <ul className="estilo-contacto-lista mt-5 ml-5">
                            <li><FaMapMarkerAlt className="tamaño-icono mb-2 mr-2"/><div className="icono-contactos"><h4>Dirección:Pedro Arata 1509</h4></div></li>
                            <li><FaPhoneAlt className="tamaño-icono mb-2 mr-2"/><div className="icono-contactos"><h4>Telefono:3516458244</h4></div></li>
                            <li ><FaEnvelope className="tamaño-icono mb-2 mr-2"/><div className="icono-contactos"><h4>Mail:tiendaCool.cordoba@gmail.com</h4></div></li>
                            <li ><FaInstagramSquare className="tamaño-icono mb-2 mr-2"/><div className="icono-contactos"><h4>Instagram:tiendaCool.mayorista</h4></div></li>
                        </ul>
                      </div>
                  </div>
              </div>
          </>
    );
  }
  
  export default Nosotros;
  