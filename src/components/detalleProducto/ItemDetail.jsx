import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCounts from '../controlItems/ItemCounts';
import './estiloItemDetail.css'; 
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';
import { useControlled } from '@material-ui/core';


const ItemDetail = ({detail}) => {
    const {id} = useParams();
    const [irCart,setIrCart] = useState(false);
    const {addCart, product,removerItem} = useContext(cartContext) 
    const onAdd = (control) =>{   
        setIrCart(true);
        addCart([detail,control]);    
    }
  
    return (
    <>
        <section className="mt-5 grid" >
            <div>
                <img src={detail.imagen} className="card-img-top estilo-imagen" alt="Imagen del producto caja trenzada"/>   
            </div> 
            <div className="card-body">
                <h2 className="card-title estilo-titulo">{detail.nombre}</h2>
                <p className="card-text estilo-descripcion"><strong>Detalle:</strong>{detail.descripcion}</p>
                <p className="card-text estilo-descripcion "><strong>Precio:</strong> <strong className="estilo-precio">${detail.precio}</strong></p>
                <p className="estilo-detalle"><strong>Descripcion:</strong>{detail.detalle}</p>
                <p className="estilo-detalle"><strong>ID del producto:</strong> {id}</p>
                {irCart ? <Link to="/Cart" className="estilo-link"><button type="button" className="mt-4 btn btn-outline-dark btn-lg btn btn-light btn-block">Terminar mi compra</button></Link> : <ItemCounts inicial={1} stock={5} onAdd={onAdd} />}
            </div>
        </section>
    </>
    )       
  };
  
  
  export default ItemDetail;
  