import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Sections/Footer';
import Manager from './components/Manager/Manager';
import ManagerHeader from './components/Manager/Header';
import Header from './components/Sections/Header';
import Join from './components/User/Join';
import Login from './components/User/Login';
import FindID from './components/User/FindID';
import FindPW from './components/User/FindPW';
import ChangePW from './components/User/ChangePW';
import AllShop from './components/Home/Shop/AllShop';
import Successful from './components/User/FindID/Successful';
import Failed from './components/User/FindID/Failed';
import UntilChange from './components/User/FindPW/UntilChange';
import ChangeSuccess from './components/User/FindPW/ChangeSuccess';
import SuccessJoin from './components/User/Join/SuccessJoin';

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
         <Route path="user/join" element={<Join />} />
        <Route path='user/login' element={<Login />} />
        <Route path='user/find/id' element={<FindID />} />
        <Route path='user/find/pw' element={<FindPW />} />
        <Route path='user/change/pw' element={<ChangePW />} />
        <Route path='user/find/id/showid' element={<Successful />} />
        <Route path='user/find/id/nonid' element={<Failed />} />
        <Route path='user/find/pw/change' element={<UntilChange />} />
        <Route path='/user/change/success' element={<ChangeSuccess />} />
        <Route path='/user/join/success' element={<SuccessJoin />} />
        

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