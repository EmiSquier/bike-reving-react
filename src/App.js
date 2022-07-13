import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>   
        <Navbar/>
        <ItemListContainer/>
        <ItemCount/>
      </Router>
    </div >
  );
}

export default App;
