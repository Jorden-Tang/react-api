import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeListAxios from './components/PokeListAxios'
import HomePage from './components/homePage'
import WordPage from './components/WordPage'
import NumberPage from './components/NumberPage'
import StyleWordPage from './components/StyleWordPage'
import {Router} from '@reach/router';
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <SearchForm></SearchForm>
      {/* <Router>
      </Router> */}
    </div>
  );
}

export default App;
