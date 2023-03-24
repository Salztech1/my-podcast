import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './index.css';
import Hero from './Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
  <>
  
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={ <App />}/>
       <Route path="/hero" element={ <Hero />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </>,
  
)


