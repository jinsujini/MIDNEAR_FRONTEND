import React from 'react'

const DeliveryAddress = () => {
  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal />
            <div className='field_container_content'>
                <div className='mypage_title'>&lt; 배송지 관리</div>

                <div className='mypage_address-midtitle'>배송 정보 수정</div>

                <div className='mypage_address-container'>
                    <input type='text' className='mypage_address-field' placeholder='수취인명*'></input>
                    <input type='text' className='mypage_address-field' placeholder='수취인 번호*'></input>
                    <input type='text' className='mypage_address-field' placeholder='배송지 명'></input>  

                    <div className='post_number_field'>
                        <input type='text' className='mypage_address-field' placeholder='*우편 번호'></input>   
                        <button className='certi_btn' onClick={handleCertiRequest}>인증요청</button>
                    </div> 
                    
                    <input type='text' className='mypage_address-field' placeholder='*주소'></input>  
                    <input type='text' className='mypage_address-field' placeholder='상세 주소 입력'></input>  

                    <div className='post_memo-contianer'>
                        <div className='post_memo-title'>배송 메모</div>
                        <div className='post_memo-select'>배송 메모를 선택해 주세요.</div>
                    </div> 

                    <div className='check_field'>
                        <input type='checkbox' className='check'/>
                        <p>기본 배송지로 설정</p>
                    </div>

                    <div className='check_field'>
                        <input type='checkbox' className='check'/>
                        <p className='check-underline'>[필수] 개인정보 수집 및 이용 동의</p>
                    </div>

                    <button className='submit_button-address'>저장</button>

                </div>
                

                
            </div>
        </div>
    </div>
  )
}

export default DeliveryAddress