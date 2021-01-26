import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer';






const App = () => {
  return (
    <>
        <Navbar/>
        <ItemListContainer greeting ={"Bienvenidos a todos!"}/>
    </>
  );
}

export default App;
