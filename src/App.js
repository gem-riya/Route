import React from 'react'
import {BrowserRouter, Route, Routes  } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from './components/Header/Head';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Category from './pages/Category';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route  path='/category' element={<Category/>} />
          
        </Routes>


        
      </BrowserRouter>
    </>
  );
}

export default App;
