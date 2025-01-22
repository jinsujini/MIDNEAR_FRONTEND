import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal/Modal';

const FindID = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('phone');
    const [PhoneCodeInput, setPhoneCodeInput] = useState(false);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [verificationMessage, setVerificationMessage] = useState('');
    const [code, setCode] = useState('');
    const [isCodeValid, setIsCodeValid] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const goToFindPW = () => {
        navigate('/user/find/pw');
    };

    const goToFindID = () => {
        navigate('/user/find/id');
    };

    const handlePhoneRequest = (e) => {
        e.preventDefault();
        if (isPhoneValid && isNameValid) {
            setPhoneCodeInput(true);
            setVerificationMessage('인증번호가 전송되었습니다.');
        } else {
            handleValid(); // Trigger validation
        }
    };

    const handleValid = () => {
        const isPhoneEmpty = phone.trim() === '';
        setIsPhoneValid(!isPhoneEmpty);

        const isNameEmpty = name.trim() === '';
        setIsNameValid(!isNameEmpty);
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
        setIsCodeValid(e.target.value.trim().length === 6);
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
                        
                        {/* 이름 입력칸 */}
                        <input 
                            type="text" 
                            className={`min_text ${isNameValid ? '' : 'invalid'}`} 
                            placeholder="이름*" 
                            value={name}
                            onChange={(e) => { 
                                setName(e.target.value);
                                handleValid();
                            }}
                        />
                        
                        {/* 이름 유효성 검사 메시지 */}
                        {!isNameValid && <p className="error_message">이름을 정확하게 입력해 주세요.</p>}

                        <div className='user_container'>
                            
                            {/* 휴대폰 번호 입력칸 */}
                            <input 
                                type="text" 
                                className={`min_text ${isPhoneValid ? '' : 'invalid'}`} 
                                placeholder="휴대전화 (-없이)" 
                                value={phone}
                                onChange={(e) => { 
                                    setPhone(e.target.value);
                                    handleValid();
                                }}
                            />

                            {/* 인증 요청 버튼 */}
                            <button 
                                className="certi_btn" 
                                onClick={handlePhoneRequest} 
                                disabled={!isPhoneValid || !isNameValid}
                            >
                                인증요청
                            </button>
                        </div>

                        {/* 휴대폰 번호 유효성 검사 메시지 */}
                        {!isPhoneValid && <p className="error_message">휴대폰 번호를 정확하게 입력해 주세요.</p>}
                        
                        {/* 인증 번호 전송 메시지 */}
                        {verificationMessage && <p className="success_message">{verificationMessage}</p>}
                    </div>
                )}

                {PhoneCodeInput && (
                    <div className="user_container">
                        <input
                            type="text"
                            className="min_text"
                            placeholder="6자리코드"
                            value={code}
                            onChange={handleCodeChange}
                        />
                        <button
                            className="certi_btn"
                            disabled={!isCodeValid}
                        >
                            확인
                        </button>
                    </div>
                )}
            </div>
            
            <button className='user_btn'>아이디 찾기</button>
        </div>
    </div>
  )
}

export default FindID;
