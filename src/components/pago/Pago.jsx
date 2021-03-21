import { useControlled } from '@material-ui/core';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import {  useState } from 'react';
import {  Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import '../pago/pago.css';
import Swal from 'sweetalert2';




const Pago = () => {
  const[name,setName]=useState("");
  const[mail,setMail]=useState("");
  const[mail2,setMail2]=useState("");
  const[telefono,setTelefono]=useState("");
  
  const[apellido,setApellido]=useState("");
  const[calle,setCalle]=useState("");
  const[numero,setNumero]=useState("");
  const[notitular,setNotitular]=useState("");
  const[aptitular,setAptitular]=useState("");
  const[numTarjeta,setNumTarjeta]=useState("");
  const[vencimiento,setVencimiento]=useState("");
  const[codigo,setCodigo]=useState("");
 
  const[idOrden,setIdOrden]=useState("");
  const CartContextUse = useContext(cartContext)
  const {carrito} = useContext(cartContext)
  let [precioFinal,setPrecioFinal] = useState(0)
  
  const finalizarCompra = ()=>{
    let nuevaOrden = {buyer:{name:name,apellido:apellido,calle:calle,numero:numero,nombreTitular:notitular,apellidoTitular:aptitular,numeroTarjeta:numTarjeta,vencimiento:vencimiento,codigo:codigo,mail:mail,telefono:telefono},items: {...carrito},total:precioFinal};
    const baseDeDatos= getFirestore();
    const ordenesCollection= baseDeDatos.collection("ordenes");
    ordenesCollection.add(nuevaOrden).then((value)=>{
      console.log(value.id)
      setIdOrden(value.id)
    })
    Swal.fire({
        icon: 'success',
        title: `<p className="estilo-titulo-pago">¡Gracias por comprar en TiendaCool!</p>`,
        html: `<p>Su ID de orden de compra es:<br><h6>${idOrden}</h6></p>`,
      }) 
  
  }
  
  
  return (
        <>
          <div className="container mt-5 " align="center">
                <div className="row estilo-formulario-pago" align="center">
                    <div className="col-md-12  " align="center">
                        <div className="well well-sm">
                                <fieldset>
                                        <div className="form-group mt-5">
                                        <legend  className="text-center header estilo-titulo-seccion">Datos personales</legend>
                                            <span className="col-md-1 col-md-offset-2 text-center "><i className="fa fa-user bigicon"></i></span>
                                            <div className="formulario-icono">
                                                <div className="col-md-8">
                                                    <input id="fname" name="name" type="text" placeholder="Nombre" className=" estilo-formulario form-control" onChange={(e)=>{setName(e.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <div className="col-md-8">
                                            <input id="lname" name="name" type="text" placeholder="Apellido" className=" estilo-formulario form-control" onChange={(e)=>{setApellido(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                            <div className="col-md-8">
                                                <input id="email" name="email" type="text" placeholder="Email " className=" estilo-formulario form-control" onChange={(e)=>{setMail(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                            <div className="col-md-8">
                                                <input id="email2" name="email" type="text" placeholder="Confirme su email " className=" estilo-formulario form-control" onChange={(e)=>{setMail2(e.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone1" name="phone" type="text" placeholder="Telefono" className=" estilo-formulario form-control " onChange={(e)=>{setTelefono(e.target.value)}}/>
                                                </div>
                                        </div>
                                        <div className="form-group">
                                        <legend  className="text-center header estilo-titulo-seccion">Domicilio</legend>
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone2" name="phone" type="text" placeholder="Calle" className=" estilo-formulario form-control "onChange={(e)=>{setCalle(e.target.value)}} />
                                                </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone3" name="phone" type="text" placeholder="Número" className=" estilo-formulario form-control " onChange={(e)=>{setNumero(e.target.value)}} />
                                                </div>
                                        </div>
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                <select className="multisteps-form__select form-control">
                                                    <option value="Buenos">Buenos Aires</option>
                                                    <option value="Cat">Catamarca</option>
                                                    <option value="Cha">Chaco</option>
                                                    <option value="Chu">Chubut</option>
                                                    <option value="Cor">Córdoba</option>
                                                    <option value="Corr">Corrientes</option>
                                                    <option value="For">Formosa</option>
                                                    <option value="Ju">Jujuy</option>
                                                    <option value="Pam">La Pampa</option>
                                                    <option value="Rio">La Rioja</option>
                                                    <option value="Men">Mendoza</option>
                                                    <option value="Mis">Misiones</option>
                                                    <option value="Neu">Neuquén</option>
                                                    <option value="Rio">Rio Negro</option>
                                                    <option value="Sal">Salta</option>
                                                    <option value="Juan">San Juan</option>
                                                    <option value="Luis">San Luís</option>
                                                    <option value="Cruz">Santa Cruz</option>
                                                    <option value="Santa">Sante Fe</option>
                                                    <option value="Santia">Santiado del Estero</option>
                                                    <option value="Fuego">Tierra del Fuego</option>
                                                    <option value="Tuc">Tucumán</option>
                                                </select>
                                                </div>
                                            </div> 
                                            <div className="form-group">
                                                <legend  className="text-center header estilo-titulo-seccion">Datos de pago</legend>
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone4" name="phone" type="text" placeholder="Nombre Titular" className=" estilo-formulario form-control " onChange={(e)=>{setNotitular(e.target.value)}} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone5" name="phone" type="text" placeholder="Apellido Titular" className=" estilo-formulario form-control " onChange={(e)=>{setAptitular(e.target.value)}} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone6" name="phone" type="text" placeholder="Numero de tarjeta" className=" estilo-formulario form-control " onChange={(e)=>{setNumTarjeta(e.target.value)}} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone7" name="phone" type="text" placeholder="Fecha de vencimiento(DD/MM/AAAA)" className=" estilo-formulario form-control "  onChange={(e)=>{setVencimiento(e.target.value)}}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                                <div className="col-md-8">
                                                    <input id="phone8" name="phone" type="text" placeholder="Código de seguridad(CVV/CVC)" className=" estilo-formulario form-control " onChange={(e)=>{setCodigo(e.target.value)}} />
                                                </div>
                                            </div>  
                                    </fieldset>
                                {mail!==mail2 ? <p>Los emails ingresados no son iguales</p> : <p></p> }
                                <button disabled={mail!==mail2} className="mb-4 btn btn-outline-dark btn-lg btn btn-light estilo-titulo-seccion" onClick={()=>{finalizarCompra()}}>Finalizar compra</button> 
                                
                        </div>
                    </div>
                </div>
            </div>     
            
          
        </>
  );
}

export default Pago;

