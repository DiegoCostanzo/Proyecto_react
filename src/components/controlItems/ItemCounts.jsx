import React, {useState} from 'react';
import './estiloItemCounts.css';


const ItemCounts = ({inicial,stock,onAdd}) => {
  let [control, setControl] = useState(1);
  
  const handlerOnAdd = () =>{

    onAdd(control);

  }


  return (
        <>
          <div className="estilo-controles">
            <button disabled={control===inicial} onClick = {()=>{setControl(control=control-1)}} className="btn btn-primary" type="button">-</button>
            <p className="mt-2"> {control} </p>
            <button disabled={control===stock}  onClick = {()=>{setControl(control=control+1)}} className="btn btn-primary" type="button" >+</button>
          </div>
          <div>
          <button disabled={control===stock} onClick={handlerOnAdd} type="button" className="mt-4 btn btn-primary btn-lg btn-block">Agregar al carrito</button>
          </div>
        </>
  );
}

export default ItemCounts;
