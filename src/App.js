import './App.css';
import {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';

import SearchForm from './Components/SearchForm/SearchForm';
import Details from './Components/Details/Details';

function App() {
  return (
    <Routes>
        <Route path="/" element={<SearchForm/>}/>
        <Route path="https://frontend-9vuf.onrender.com/details" element={<Details/>}/>
    </Routes>
  );
}

export default App;
