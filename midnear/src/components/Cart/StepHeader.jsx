import React from 'react'
import { useNavigate, Link } from 'react-router-dom'; 
import logo from "../../assets/img/logo/header_logo.svg";

const StepHeader = () => {    
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/'); 
  };
  
  return (
    <div className='step-header'>
        <div className="header">
            <div className="logo" onClick={goHome}>
                <img src={logo} alt="logo" />
            </div>

            <div className='center'>
                <div className='title'>결제</div> 
                <div className='step'>
                    <p className='login'>[1] 로그인</p>
                    <p className='delivery-info'>[2] 배송정보</p>
                    <p className='pay'>[3] 결제완료</p>
                </div>
                <div className='title'></div>
            </div>

            <div className='continue'><p onClick={goHome}>쇼핑 계속하기</p></div>
        </div>
    </div>
  )
}

export default StepHeader