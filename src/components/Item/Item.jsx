import { Link } from 'react-router-dom';
import ItemCounts from '../controlItems/ItemCounts';
import './estiloItem.css'; 
import { useState } from 'react';
import {useContext} from 'react';
import {cartContext} from '../../contex/CartContext';

const Item = ({producto}) => {
    const [irCart,setIrCart] = useState(false);
    const {addCart,removerItem} = useContext(cartContext) 
    const onAdd = (control) =>{   
        setIrCart(true);
        addCart([producto,control]);    
    }
    const RemoverItem = () =>{
        removerItem(producto);
        
    } 
    return (
    <>
        <div className="mt-2 card estilo-tarjeta" >
        <img src={producto.imagen} className="card-img-top estilo-imagen" alt="Imagen del producto caja trenzada"/>
            <div className="card-body">
                <h4 className="card-title">{producto.nombre}</h4>
                <p className="card-text">{producto.descripcion}</p>
                <p><Link to={`/detalle/${producto.id}`}>Detalles</Link></p>
                <ItemCounts inicial={1} stock={5} onAdd={onAdd}/>
                <button onClick={RemoverItem} type="button" className="mt-4 btn btn-primary btn-lg btn-block">Eliminar Producto</button>
            </div>
        </div>
    </>
    )       
  };
  
  
  export default Item;
  