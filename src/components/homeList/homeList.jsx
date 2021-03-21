import Item from "../Item/Item"


const HomeList = ({propProductos}) => {
   
    return (
    <>
       
       <div className="container grid1">
       {propProductos.map((Producto)=>{
        return <Item key={Producto.id} producto={Producto}/>;
      })} 
      </div>
    </>
    )       
  };
  
  
  export default HomeList ;
  