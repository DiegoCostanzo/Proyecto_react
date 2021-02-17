import { Link } from 'react-router-dom';
import ItemCounts from '../controlItems/ItemCounts';
import './estiloItem.css'; 


const Item = ({producto}) => {
    return (
    <>
        <div className="mt-2 card estilo-tarjeta" >
        <img src={producto.imagen} className="card-img-top estilo-imagen" alt="Imagen del producto caja trenzada"/>
            <div className="card-body">
                <h4 className="card-title">{producto.nombre}</h4>
                <p className="card-text">{producto.descripcion}</p>
                <p><Link to={`/detalle/${producto.id}`}>Detalles</Link></p>
                <ItemCounts inicial={1} stock={5}/>
            </div>
        </div>
    </>
    )       
  };
  
  
  export default Item;
  