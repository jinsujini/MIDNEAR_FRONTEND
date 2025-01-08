import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindPW = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('phone');
    const [PhoneCodeInput, setPhoneCodeInput] = useState(false);
    const [EmailCodeInput, setEmailCodeInput] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setPhoneCodeInput(false);
        setEmailCodeInput(false);
    };

    const goToFindID = () => {
        navigate('/user/find/id');
    };

    const goToFindPW = () => {
        navigate('/user/find/pw');
    };

    const handlePhoneRequest = (e) => {
        e.preventDefault();
        setPhoneCodeInput(true);
    };

    const handleEmailRequest = (e) => {
        e.preventDefault();
        setEmailCodeInput(true);
    };
    

  return (
    <div className='container'>
        <div className='find'>
            <div className='select_content'>
                <div className='unactivate_box' onClick={goToFindID}>
                    아이디 찾기
                </div>
                <div className='activate_box' onClick={goToFindPW}>
                    비밀번호 찾기
                </div>

            </div>

            <div className="radio-group">
                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    value="phone"
                    checked={selectedOption === 'phone'}
                    onChange={handleOptionChange}
                />
                <span className="radio-text">휴대폰 번호로 찾기</span>
                </label>
                {selectedOption === 'phone' && (
                    <div className="form-group">
                        <input type="text" className="min_text" placeholder="이름*" />
                        <div className='user_container'>
                            <input type="text" className="min_text" placeholder="휴대전화 (-없이)" />
                            <button className="certi_btn" onClick={handlePhoneRequest}>인증요청</button>
                        </div>
                    </div>
                )}
                {PhoneCodeInput && (
                    <div className="user_container">
                        <input type="text" className="min_text" placeholder="6자리코드" />
                        <button className="certi_btn">확인</button>
                    </div>
                )}

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    value="email"
                    checked={selectedOption === 'email'}
                    onChange={handleOptionChange}
                />
                <span className="radio-text">이메일로 찾기</span>
                </label>
                {selectedOption === 'email' && (
                    <div className="form-group">
                        <input type="text" className="min_text" placeholder="이름*" />
                        <div className='user_container'>
                            <input type="email" className="min_text" placeholder="이메일 주소*" />
                            <button className="certi_btn" onClick={handleEmailRequest}>인증요청</button>
                        </div>
                    </div>
                )}
                {EmailCodeInput && (
                    <div className="user_container">
                        <input type="text" className="min_text" placeholder="6자리코드" />
                        <button className="certi_btn">확인</button>
                    </div>
                )}

            </div>

            <button className='user_btn'>비밀번호 찾기</button>
        </div>
    </div>
  )
}

export default FindPW