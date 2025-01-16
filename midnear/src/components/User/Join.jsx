import React, { useState } from 'react';
import eye from '../../assets/img/user/login/eye.svg'
import noneye from '../../assets/img/user/login/eye_open.svg'

const Join = () => {
    const [pwType, setPwType] = useState({
        type: 'password',
        visible: false,
    });
    const [showCodeInput, setShowCodeInput] = useState(false);

    const handlePwState = (e) => {
        e.preventDefault();
        setPwType((prevState) => ({
          type: prevState.visible ? 'password' : 'text',
          visible: !prevState.visible,
        }));
    };

    const handleCertiRequest = (e) => {
        e.preventDefault();
        setShowCodeInput(true);
    };
    

  return (
    <div className='container'>
        <div className='join'>
            <div className='mid_text'>회원가입</div>
            <p className='min_text_ex'>별표(*)로 표시된 필드가 필수 필드입니다.</p>


            <input type='text' className='min_text' placeholder='이름*' />

            <div className='user_container'>
                <input type='text' className='min_text' placeholder='아이디*' />
                <button className='certi_btn'>중복확인</button>
            </div>

            <div className="user_container">
                <input type={pwType.type} className="min_text" placeholder="비밀번호*" />
                <span onMouseDown={handlePwState}>
                    <img src={pwType.visible ? noneye : eye} className="eye_icon" alt="toggle visibility" />
                </span>
            </div>

            <input type='password' className='min_text' placeholder='비밀번호 확인*' />

            <input type='text' className='min_text' placeholder='배송지' />

            <input type='text' className='min_text' placeholder='이메일' />

            <div className='user_container'>
                <input type='text' className='min_text' placeholder='휴대폰(-없이)*' />
                <button className='certi_btn' onClick={handleCertiRequest}>인증요청</button>
            </div>

                {showCodeInput && (
                    <div className="user_container">
                        <input type="text" className="min_text" placeholder="6자리코드" />
                        <button className="certi_btn">확인</button>
                    </div>
                )}

            <button className='user_btn'>회원가입</button>

        </div>
    </div>
  )
}

export default Join