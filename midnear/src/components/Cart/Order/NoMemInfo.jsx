import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import OrderList from '../OrderList'
import StepHeader from '../StepHeader'
import PrivacyModal from './PrivacyModal'
import check from '../../../assets/img/cart/check.svg'

const NoMemInfo = () => {    
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
  return (
    <div className='info'>
        <StepHeader />
        <div className='container'>
            <div className='empty'></div>
            <div className='info_content'>
                <div className='mid_text'>주문자 정보</div>
                <p className='min_text_ex'>별표(*)로 표시된 필드가 필수 필드입니다.</p>

                <input type='text' className='min_text' placeholder='홍길동*' />
                <input type='text' className='min_text' placeholder='010-9999-9999*' />
                <input type='text' className='min_text' placeholder='이메일' />

                <div className='bottom'>
                <div className='title'>배송 정보</div>
                <input type='text' className='min_text' placeholder='수취인*' />
                <input type='text' className='min_text' placeholder='수취인 번호*' />
                <input type='text' className='min_text' placeholder='배송 메모를 입력해 주세요.' />
                <div className='post_code'>
                    <input type='text'className='text' placeholder='*우편번호' disabled />
                    <div className='search'>우편번호 검색</div>
                </div>
                <input type='text' className='min_text' placeholder='*주소' disabled/>
                <input type='text' className='min_text' placeholder='상세주소 입력' />
                </div>
                
                <div className='check'>
                    <label className='checkbox'>
                        <input type='checkbox' className='default'/>
                        <img src={check} className='checkImg'/>
                    </label>
                    <p>기본 배송지로 설정</p>
                </div>
                <div className='check'>
                    <label className='checkbox'>
                        <input type='checkbox' className='agree'/>
                        <img src={check} className='checkImg'/>
                    </label>
                    <p className='privacy' onClick={openModal}>[필수] 개인정보 수집 및 이용 동의</p>
                    <PrivacyModal isOpen={isModalOpen} closeModal={closeModal} />
                </div>
                <Link to='/order/pay-succeed'><button className='btn'>결제하기</button></Link>
            </div>
            <OrderList />
        </div>
    </div>
  )
}

export default NoMemInfo