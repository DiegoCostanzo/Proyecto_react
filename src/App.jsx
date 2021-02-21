import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import React from 'react';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import PaginaPrincipal from './containers/PaginaPrincipal';
import Nosotros from './containers/Nosotros';
import Contacto from './containers/Contacto';
import Cart from './components/cart/Cart';
import CartContext from './contex/CartContext';






const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <CartContext>
        <Navbar/>
          <Switch>
            <Route exact path="/categoria/:categoriaID" className="container mt-4">
              <ItemListContainer/>
            </Route>
            <Route exact path="/detalle/:id">
              <ItemDetailContainer/>
            </Route>
            <Route exact path="/PaginaPrincipal">
             <PaginaPrincipal/>
            </Route>
            <Route exact path="/Nosotros">
             <Nosotros/>
            </Route>
            <Route exact path="/Contacto">
             <Contacto/>
            </Route>
            <Route exact path="/Cart">
             <Cart></Cart>
            </Route>
        </Switch>
      </CartContext>
    </BrowserRouter>
    </>
  );
}

export default App;
