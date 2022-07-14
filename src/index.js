import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom';
import './index.css';
import ContactUs from './pages/contactUs/ContactUs';
import Home from './pages/home/Home';
import PFA from './pages/projects/pFA/PFA';
import WorkUs from './pages/projects/workUs/WorkUs';
import Us from './pages/us/Us';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/soyluzdevidaf' element={<Home/>}></Route>
    <Route path='/home' element={<Navigate replace to={"/soyluzdevidaf"}/>}></Route>
    <Route path='/projects' element={<WorkUs/>}></Route>
    <Route path='/projects' element={<PFA/>}></Route>
    <Route path='/us' element={<Us/>}></Route>
    <Route path='/contact' element={<ContactUs/>}></Route>
  </Routes>
  </BrowserRouter>
    
);

