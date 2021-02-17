import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCounts from '../controlItems/ItemCounts';
import './estiloItemDetail.css'; 



const ItemDetail = ({detail}) => {
    const {id} = useParams();

    const [irCart,setIrCart] = useState(false);

    const onAdd = (control) =>{
        console.log(control);
        setIrCart(true);
    }

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
                <p className="estilo-detalle">ID del producto: {id}</p>
                {irCart ? <Link to="/Cart"><button type="button" className="mt-4 btn btn-primary btn-lg btn-block">Terminar mi compra</button></Link> : <ItemCounts inicial={1} stock={5} onAdd={onAdd} />}
                
            </div>
        </section>
    </>
    )       
  };
  
  
  export default ItemDetail;
  