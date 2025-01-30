import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Sections/Footer';
import Manager from './components/Manager/Manager';
import ManagerHeader from './components/Manager/Header';
import Header from './components/Sections/Header';
import None from './components/Sections/None';
import Detail from './components/Manager/Goods/Detail';

function App() {
  const location = useLocation();
  const isManagerRoute = location.pathname.startsWith('/manager');


  return (
    <>
      {isManagerRoute ? <ManagerHeader /> : <Header />}

      <Routes>
        {/* 유저 페이지 */}
        <Route path="/" element={<Home />} />

        {/* 관리자 페이지 */}
        <Route path="/manager/*" element={<Manager />}/>
        <Route path="/manager/Goods/Detail/:name" element={<Detail />} />
        <Route path='*' element={<None />}/>

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
