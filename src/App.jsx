import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';






const App = () => {
  return (
    <>
        <Navbar/>
        <div className="container mt-4">
        <ItemListContainer/>
        </div>
    </>
  );
}

export default App;
