import '../footer/footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
   
    return (
    <>
       <div className="container-fluid footer mt-5">
           <div className="row  justify-content-center">
           <div className="col estilo-titulo-footer">
           <h4>Ubicación</h4>
           <iframe className="estilo-mapa" width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Pedro%20Arata%201905,%20X5003AOA%20C%C3%B3rdoba&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
           </div>
           <div className="col estilo-titulo-footer ">
               <h4>Contacto</h4>
               <ul className="lista-footer">
                <li className="estilo-contacto-footer"><FaPhoneAlt className="mr-1"/>Telefono:3516458244</li>
                <li className="estilo-contacto-footer"><FaEnvelope className="mr-1"/>Mail:tiendaCool.cordoba@gmail.com</li>
                <li className="estilo-contacto-footer"><FaInstagramSquare className="mr-1"/>Instagram:tiendaCool.mayorista</li>
                <li className="estilo-contacto-footer"><FaFacebookF className="mr-1"/>Facebook:tiendaCool</li>
                <li className="estilo-contacto-footer"><FaTwitterSquare className="mr-1"/>Twiter:tiendaCool</li>
                </ul> 
           </div>
           </div>
       </div>
    </>
    )       
  };
  
  
  export default Footer ;
  