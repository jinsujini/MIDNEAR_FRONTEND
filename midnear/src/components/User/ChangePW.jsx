import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/img/user/login/eye.svg'
import noneye from '../../assets/img/user/login/eye_open.svg'

const ChangePW = () => {
    const navigate = useNavigate();
    const [pwType, setPwType] = useState({
        type: 'password',
        visible: false,
      });

    const handlePwState = (e) => {
        e.preventDefault();
        setPwType((prevState) => ({
          type: prevState.visible ? 'password' : 'text',
          visible: !prevState.visible,
        }));
      };

    const goToFindPW = () => {
        navigate('/user/find/pw');
    };

    const goToFindID = () => {
        navigate('/user/find/id');
    };

  return (
    <div className='container'>
        <div className='find'>
            <div className='select_content'>
                <div className='activate_box' onClick={goToFindID}>
                    아이디 찾기
                </div>
                <div className='unactivate_box' onClick={goToFindPW}>
                    비밀번호 찾기
                </div>
            </div>

            <p className='selected_text'>비밀번호 변경</p>

            <div className='user_content'>
                <div className='user_container'>
                    <input type={pwType.type} className='min_text' placeholder='새 비밀번호*' />
                    <span onMouseDown={handlePwState}>
                        <img src={pwType.visible ? noneye : eye} className="eye_icon" alt="toggle visibility" />
                    </span>
                </div>

                <div className='user_container'>
                    <input type='password' className='min_text' placeholder='비밀번호 확인*' />
                    <button className='pw_check'>확인</button>
                </div>
            </div>

            <button className='user_btn'>비밀번호 변경하기</button>
        </div>
    </div>
  )
}

export default ChangePW