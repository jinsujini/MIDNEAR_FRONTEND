import React, {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'; 
import Header from '../Sections/Header';
import logo from "../../assets/img/logo/header_logo.svg";

const StepHeader = () => {    
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/'); 
  };
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
      const checkMax =() => {
        setIsMobile(window.innerWidth <= 500);
      };
      checkMax();
      window.addEventListener("resize", checkMax);
      return () => window.removeEventListener("resize", checkMax);
  },[]);
  
  return (
    <div className='step-header'>
        <div className="header2">
            <div className="logo2" onClick={goHome}>
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
            {isMobile && (
              <Header/>
            )}
        </div>
    </div>
  )
}

export default StepHeader