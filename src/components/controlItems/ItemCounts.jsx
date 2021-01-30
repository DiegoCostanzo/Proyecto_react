import React, {useState} from 'react';
import './estiloItemCounts.css';


const ItemCounts = () => {
  let [control, setControl] = useState(0);
  return (
        <>
          <div className="estilo-controles">
            <button onClick = {()=>{setControl(control=control-1)}} className="btn btn-primary" type="button">-</button>
            <p className="mt-2"> {control} </p>
            <button onClick = {()=>{setControl(control=control+1)}} className="btn btn-primary" type="button" >+</button>
          </div>
        </>
  );
}

export default ItemCounts;
