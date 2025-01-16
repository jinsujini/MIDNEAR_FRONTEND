import React from 'react'
import MyPageModal from '../MyPageModal'

const InfoChange = () => {
  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal />
            <div className='field_container_content'>
                <div className='mypage_title'>내 정보 변경</div>

                <input type='text' className='mypage_input_field_top' placeholder='이름'></input>
                <input type='text' className='mypage_input_field' placeholder='이메일'></input>
                <input type='text' className='mypage_input_field' placeholder='휴대폰'></input>
                <input type='text' className='mypage_input_field' placeholder='배송지'></input>
                <input type='text' className='mypage_input_field' placeholder='상세 주소'></input>
                

                <button className='submit_button'>변경사항 저장하기</button>
            </div>
        </div>
    </div>
  )
}

export default InfoChange