import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyPageModal from '../MyPageModal'

const PasswordEnter = () => {
  const navigate = useNavigate(); 

  const goToPasswordChange = () => {
    navigate('/mypage/userinformaiton/password/changing');
  };

  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal/>
            <div className='field_container_content'>
                <div className='mypage_title'>비밀번호 변경</div>
                <div className='clarify'>비밀번호 변경을 위해 현재 비밀번호를 입력해주세요.</div>

                <input type='password' className='mypage_input_field' placeholder='현재 비밀번호*'></input>
                <button className='submit_button' onClick={goToPasswordChange}>확인</button>
            </div>
        </div>
    </div>
  )
}

export default PasswordEnter