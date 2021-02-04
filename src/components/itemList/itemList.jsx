import Item from "../Item/Item";
import './estiloItemList.css'; 



const ItemList = ({propProductos}) => {
  
  return (
  <>
  <div > 
      {propProductos.map((Producto)=>{
        return <Item key={Producto.id} producto={Producto}/>;
      })}
  </div>
  </>
  )       
};


export default ItemList;
