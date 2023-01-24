import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import All from './all.js';
import Breakfast from './breakfast.js';
import Lunch from './lunch.js';
import Shakes from './shakes.js';
import Nopage from './nopage.js';
import data from './data';
import './index.css';

function App(){

  return (
    <Router>
      <Routes>
        <Route path='/' element={<All data={data}/>} />
        <Route path='breakfast' element={<Breakfast d={data}/>} />
        <Route path='lunch' element={<Lunch d={data}/>} />
        <Route path='shakes' element={<Shakes d={data}/>} />
        <Route path='*' element={<Nopage d={data}/>} />
      </Routes>
    </Router>
  );
}

function Navbar(){

  return <>
  <nav>
       <ul className='nav-links'>
          <li><a href='/'>All</a></li>
       
          <li><a href='/breakfast'>Breakfast</a></li>
          <li><a href='/lunch'>Lunch</a></li>
          <li><a href='/shakes'>Shakes</a></li>
       
        </ul>
    </nav>
    </>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    
  </React.StrictMode>
);
