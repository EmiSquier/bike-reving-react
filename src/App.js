import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
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
