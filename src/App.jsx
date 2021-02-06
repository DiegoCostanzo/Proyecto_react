import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';






const App = () => {
  return (
    <>
        <Navbar/>
        <div className="container mt-4">
        <ItemListContainer/>
        </div>
        <div>
        <ItemDetailContainer/>
        </div>
    </>
  );
}

export default App;
