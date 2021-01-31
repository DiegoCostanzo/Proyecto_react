import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCounts from '../components/controlItems/ItemCounts';
import './estiloContainer.css'



const ItemListContainer = () => {
  return (
        <>
           
           <div className="card estilo-tarjeta" >
            <img src="/images/caja_trenzada.jpg" className="card-img-top estilo-imagen" alt="Imagen del producto caja trenzada"/>
              <div className="card-body">
                <h4 className="card-title">Caja trenzada</h4>
                <p className="card-text">Medidas:32x13x22cm Color:Blanco/Marrón/Negro</p>
                <ItemCounts inicial={1} stock={5} onAdd={""} />
            </div>
          </div>

        </>
  );
}

export default ItemListContainer;
