// import React from 'react';
// import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Subheader from './Components/SubHeader/Subheader';
import Home from './Pages/Home/Home'; 

function App() {
  return (
    <>
      <Header />
      <Subheader />
      <Home/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes> */}
    </>
  );
}

export default App;
