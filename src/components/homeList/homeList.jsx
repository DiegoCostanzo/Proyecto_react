import Item from "../Item/Item"


const HomeList = ({propProductos}) => {
   
    return (
    <>
       <div>
       {propProductos.map((Producto)=>{
        return <Item key={Producto.id} producto={Producto}/>;
      })} 
      </div>
    </>
    )       
  };
  
  
  export default HomeList ;
  