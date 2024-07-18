import React from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div  className="flex w-full h-screen">
      <div className='w-full flex items-center justify-center lg:w-1/2'>
      
      <Routes>

        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Login />} /> 

        
      </Routes>
    
      </div>

      <div className= 'hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
        <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to bg-pink-500 rounded-full animate-bounce'/>
        <div className='w-full h-1/2 bg-white/10 absolute bottom-0 backdrop-blur-lg  '/>
      </div> 
      
    </div>
    </BrowserRouter>
  );
};

export default App;
