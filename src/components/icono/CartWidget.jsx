import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import './estiloCartWidget.css';


const CartWidget = () => {
  return (
        <>
            <div className="nav-link estilo-icono">
                <FaShoppingCart/>
            </div>
        </>
  );
}

export default CartWidget;
