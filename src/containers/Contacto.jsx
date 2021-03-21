import "../containers/estiloTitulo.css";
import { FaAddressCard } from "react-icons/fa";
const Contacto = () => {
    return (
          <>
            <div className="container mt-5 " align="center">
                <div className="row centrado-formulario" align="center">
                    <div className="col-md-12  " align="center">
                        <div className="well well-sm">
                            <form className="form-horizontal form" method="" >
                                <fieldset>
                                    <legend  className="text-center header estilo-titulo-seccion">Contacto</legend>
                                        <div  className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center "><i className="fa fa-user bigicon"></i></span>
                                            <div className="formulario-icono">
                                                <div className="col-md-8">
                                                    <input id="fname" name="name" type="text" placeholder="Nombre" className=" estilo-formulario form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <div className="col-md-8">
                                            <input id="lname" name="name" type="text" placeholder="Apellido" className=" estilo-formulario form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                            <div className="col-md-8">
                                                <input id="email" name="email" type="text" placeholder="Email " className=" estilo-formulario form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone" name="phone" type="text" placeholder="Telefono" className=" estilo-formulario form-control "/>
                                                </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                            <div className="col-md-8">
                                                <textarea className="form-control estilo-formulario" id="message" name="message" placeholder="Ingrese su mensaje" rows="7"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12 text-center">
                                                <button type="submit" className="btn btn-outline-dark btn-lg btn btn-light estilo-titulo-seccion">Enviar</button>
                                            </div>
                                        </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </>
    );
  }
  
  export default Contacto;
  