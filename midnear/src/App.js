import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Sections/Footer';
import Manager from './components/Manager/Manager';
import ManagerHeader from './components/Manager/Header';
import Header from './components/Sections/Header';
import PasswordEnter from './components/Mypage/UserInformation/PasswordEnter';
import PasswordConfirm from './components/Mypage/UserInformation/PasswordConfirm';
import InfoChange from './components/Mypage/UserInformation/infoChange';
import PasswordChange from './components/Mypage/UserInformation/PasswordChange';
import WritingReview from './components/Mypage/OrderList/WritingReview';
import OrderListBasic from './components/Mypage/OrderList/OrderListBasic';
import OrderDetail from './components/Mypage/OrderList/OrderDetail';

function App() {
  const location = useLocation();
  const isManagerRoute = location.pathname.startsWith('/manager');


  return (
    <>
      {isManagerRoute ? <ManagerHeader /> : <Header />}

      <Routes>
        {/* 유저 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="/mypage/userinformaiton/confirm" element={<PasswordConfirm />} />
        <Route path="/mypage/userinformaiton/userinfo/changing" element={<InfoChange />} />
        <Route path="/mypage/userinformaiton/password/change" element={<PasswordEnter />} />
        <Route path="/mypage/userinformaiton/password/changing" element={<PasswordChange />} />
        <Route path="/mypage/orderlist/writingReview" element={<WritingReview />} />
        <Route path="/mypage/orderlist/" element={<OrderListBasic />} />
        <Route path="/mypage/orderlist/detail" element={<OrderDetail />} />

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
