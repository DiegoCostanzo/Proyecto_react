
import {  useParams } from 'react-router-dom';
import ItemDetail from '../detalleProducto/ItemDetail';


const DetailList = ({detail}) => {
    const {id} = useParams();
  
  return (
  <>
  <div > 
      {detail.map((Producto)=>{
        if(Producto.id == id){
        return  <ItemDetail key={Producto.id} detail={Producto}/>;  
        }else{
          return null;
        }
      })}
  </div>
  </>
  )       
};


export default DetailList;