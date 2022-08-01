import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';

function App(props) {
  return (

    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div >
  );
}

export default App;
