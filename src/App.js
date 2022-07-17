import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'

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
        <ItemCount />
      </div>
    </div >
  );
}

export default App;
