import logo from './logo.svg';
import './App.css';

import ItemListContainer from './components/itemListContainer';
import React from 'react';
import Navbar from './components/navbar';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ItemListContainer texto="Todo bien?" />
    </React.Fragment>
  );
}

export default App;
