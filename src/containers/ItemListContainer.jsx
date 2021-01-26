import 'bootstrap/dist/css/bootstrap.min.css';
import './estiloContainer.css'



const ItemListContainer = ({greeting}) => {
  return (
        <>
            <div className="estilo-mensaje">
                <h1>{greeting}</h1>
            </div>
        </>
  );
}

export default ItemListContainer;
