import React from 'react'
import { useNavigate} from 'react-router-dom'; 
import StepHeader from '../StepHeader'
import succeedImg from '../../../assets/img/cart/succeed.svg'
const PaySucceed = () => {
    const navigate = useNavigate();
    const goHome = () => {
      navigate('/'); 
    };
  return (    
    <div className='pay'>
        <StepHeader />
        <div className='container'>
            <div className='result'>
            <div className='altImg'>
                <img src={succeedImg} />
            </div>
            <div className='font1'>결제 완료</div>
            <div className='font2'>결제가 정상적으로 완료되었습니다.</div>
            <div className='box1' onClick={goHome}>쇼핑 계속하기</div>
            <div className='box2'>주문 목록 확인하기</div>
            </div>
        </div>
    </div>
  )
}

export default PaySucceed