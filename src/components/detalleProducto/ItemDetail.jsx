import ItemCounts from '../controlItems/ItemCounts';
import './estiloItemDetail.css'; 


const ItemDetail = ({detail}) => {
    
    return (
    <>
        <div className="mt-5" >
        <img src={detail[0].imagen} className="card-img-top estilo-imagen" alt="Imagen del producto caja trenzada"/>
            <div className="card-body">
                <h4 className="card-title">{detail [0].nombre}</h4>
                <p className="card-text">{detail[0].descripcion}</p>
                <ItemCounts inicial={1} stock={5} onAdd={""} />
            </div>
        </div>
    </>
    )       
  };
  
  
  export default ItemDetail;
  