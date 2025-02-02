import React from 'react'
import { useNavigate} from 'react-router-dom'; 
import StepHeader from '../StepHeader'
import failedImg from '../../../assets/img/cart/failed.svg'

const PayFailed = () => {
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
                    <img src={failedImg} />
                </div>
                <div className='font1'>결제 실패</div>
                <div className='alt2'>결제가 실패되었습니다. 다시 시도해주세요.</div>
                <div className='box1'>다시 결제하기</div>
                <div className='box2' onClick={goHome}>홈으로 돌아가기</div>
            </div>
        </div>
    </div>
  )
}

export default PayFailed