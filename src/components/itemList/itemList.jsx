import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import './estiloItemList.css'; 



const ItemList = ({propProductos}) => {
  const {categoriaID} = useParams();
  
  return (
  <>
  <div > 
      {propProductos.map((Producto)=>{
        if(Producto.categoria === categoriaID){
        return <Item key={Producto.id} producto={Producto}/>;
        }else{
          return null;
        }
      })}
  </div>
  </>
  )       
};


export default ItemList;
