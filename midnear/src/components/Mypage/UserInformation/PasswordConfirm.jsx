import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyPageModal from '../MyPageModal'

const PasswordConfirm = () => {
  const navigate = useNavigate(); 

  const goToInfoChange = () => {
    navigate('/mypage/userinformaiton/userinfo/changing');
  };

  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal/>
            <div className='field_container_content'>
                <div className='mypage_title'>비밀번호 입력</div>
                <div className='clarify'>정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 입력해 주세요.</div>

                <input type='password' className='mypage_input_field' placeholder='비밀번호* '></input>
                <button className='submit_button' onClick={goToInfoChange}>확인</button>
            </div>
        </div>
    </div>
  )
}

export default PasswordConfirm