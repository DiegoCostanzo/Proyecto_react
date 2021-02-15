import ItemCounts from '../controlItems/ItemCounts';
import './estiloItemDetail.css'; 



const ItemDetail = ({detail}) => {
    
    return (
    <>
        <section className="mt-5 grid" >
            <div>
                <img src={detail.imagen} className="card-img-top estilo-imagen" alt="Imagen del producto caja trenzada"/>   
            </div> 
            <div className="card-body">
                <h2 className="card-title estilo-titulo">{detail.nombre}</h2>
                <p className="card-text estilo-descripcion">{detail.descripcion}</p>
                <p className="card-text estilo-precio">${detail.precio}</p>
                <p className="estilo-detalle">{detail.detalle}</p>
                <ItemCounts inicial={1} stock={5} onAdd={""} />
            </div>
        </section>
    </>
    )       
  };
  
  
  export default ItemDetail;
  