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
                <ItemCounts inicial={1} stock={5} onAdd={""} />
            </div>
        </div>
    </>
    )       
  };
  
  
  export default Item;
  