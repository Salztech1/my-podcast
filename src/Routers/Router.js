import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from '../Pages/Hero';
import Home from '../Pages/Home';



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
       <Route path="/hero" element={ <Hero />}/>
        </Routes>
  );
}

export default Router;
