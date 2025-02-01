import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PrivacyModal from './PrivacyModal'
import check from '../../../assets/img/cart/check.svg'
import StepHeader from '../StepHeader'

const NewAddress = () => {    
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const selectAdd = () => {
        navigate('/order/delivery/select-address');
    };

    const newAdd = () => {
        navigate('/order/delivery/new-address');
    };


  return (
    <div className='address'>
    <StepHeader />
    <div className='container'>
        <div className='find'>
            <div className='title'>배송 정보 변경</div>
            <div className='select_content'>
                <div className='unactivate_box' onClick={selectAdd}>
                    배송지 선택
                </div>
                <div className='activate_box' onClick={newAdd}>
                    신규입력
                </div>
                <div className='empty'></div>
            </div>

                <div className='bottom'>
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
                <button className='btn'>저장</button>
           
        </div>
        
    </div>
    </div>
  )
}

export default NewAddress