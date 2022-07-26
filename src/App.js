import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
     
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <ItemListContainer />
        </div>
        <div>
        <ItemCount stock={15} initial={0}/>
      </div>
    </div >
  );
}

export default App;
