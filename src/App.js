import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Headers } from './components/Headers';
import Home from './components/Home';
import TaxMaster from './components/TaxMaster';
import Headers2 from './components/Headers2';
import CreateInvoice from './components/CreateInvoice';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className='col-auto'>
          <Headers/>
        </div>
        <div className='col'> 
          <Headers2/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Create_Tax' element={<TaxMaster/>}/> 
            <Route path='/Create_invoice' element={<CreateInvoice/>}/> 
            <Route path='/Signup' element={<Signup/>}/> 
            <Route path='/Login' element={<Login/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
