import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Sections/Footer';
import Manager from './components/Manager/Manager';
import ManagerHeader from './components/Manager/Header';
import Header from './components/Sections/Header';
import AllShop from './components/Home/Shop/AllShop';

function App() {
  const location = useLocation();
  const isManagerRoute = location.pathname.startsWith('/manager');


  return (
    <>
      {isManagerRoute ? <ManagerHeader /> : <Header />}

      <Routes>
        {/*유저 페이지*/}
        <Route path='/' element={<Home />} />
        <Route path='/all-shop' element={<AllShop />} />

        {/* 관리자 페이지 */}
        <Route path="/manager/*" element={<Manager />}/>
      </Routes>
      <Footer />
    </>
  );
}

const RootApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default RootApp;
