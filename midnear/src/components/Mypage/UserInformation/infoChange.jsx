import React from 'react'
import React, { useRef } from 'react'
import MyPageModal from '../MyPageModal'
import Modal from '../../../User/Modal/Modal';

const InfoChange = () => {

  const modalRef = useRef();

    const showSuccessModal = () => {
        modalRef.current.openModal(
          "배송 정보를 정말 삭제할까요?",
          "배송 정보가 삭제되었습니다.",
          "/mypage/userinformaiton/userinfo/changing"
        );
      };


  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal />
            <div className='field_container_content'>
                <div className='mypage_title'>내 정보 변경</div>

                <input type='text' className='mypage_input_field_top' placeholder='이름'></input>
                <input type='text' className='mypage_input_field' placeholder='이메일'></input>
                <input type='text' className='mypage_input_field' placeholder='휴대폰'></input>   

                <button className='submit_button'>변경 사항 저장하기</button>

                <div className='mypage_title'>배송지 관리</div>

                <div className='post_info-container'>
                  <div>
                    <div className='post_info-name'>홍길동</div>
                    <div className='post_info-number'>010-1233-1222</div>
                    <div className='post_info-address'>서울특별시 서대문구 성산로 8길 99-9 (연희동)</div>
                    <div className='post_info-address-detail'>ㅇㅇ아파트 109동 109호 (종 1234)</div>
                    <div className='post_info-post-number'>(123098)</div>
                  </div>

                  <div>
                    <button className='correction'>수정</button>
                    <button className='delete' onClick={showSuccessModal}>삭제</button>
                  </div>
                </div>

                <button className='submit_button'>변경 사항 저장하기</button>

                <Modal ref={modalRef} />
            </div>
        </div>
    </div>
  )
}

export default InfoChange