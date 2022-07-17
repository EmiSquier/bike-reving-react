import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      <div>
          <Navbar />
        <div>
          <h1>Bienvenidos a Moto Fest!</h1>
          <h2>Accesorios, repuestos, indumentaria, todo, para vos y tu moto, en el mismo lugar.</h2>
        </div>
      </div >
      <div>
        <ItemListContainer />
        <ItemCount />
      </div>
    </div>
  );
}

export default App;
