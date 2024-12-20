import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Footer from './components/Sections/Footer';
import Goods from './components/Manager/Goods';
import Header from './components/Sections/Header';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/*유저 페이지*/}
        <Route path='/' element={<Home />} />


        {/*관리자 페이지*/}
        <Route path='/manager' element={<Goods />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
