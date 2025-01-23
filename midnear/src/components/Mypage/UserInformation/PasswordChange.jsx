import React from 'react'
import MyPageModal from '../MyPageModal'

const PasswordChange = () => {
  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal/>
            <div className='field_container_content'>
                <div className='mypage_title'>비밀번호 변경</div>

                <input type='password' className='mypage_input_field_top' placeholder='새 비밀번호'></input>
                <input type='password' className='mypage_input_field' placeholder='비밀번호 확인'></input>
                <button className='submit_button'>비밀번호 변경하기</button>
            </div>
        </div>
    </div>
  )
}

export default PasswordChange