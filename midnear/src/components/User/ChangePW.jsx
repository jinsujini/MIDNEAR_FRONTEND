import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/img/user/login/eye.svg';
import noneye from '../../assets/img/user/login/eye_open.svg';

const ChangePW = () => {
    const navigate = useNavigate();
    const [pwType, setPwType] = useState({
        type: 'password',
        visible: false,
    });

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmValid, setIsConfirmValid] = useState(true);
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('');

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

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleValidation = () => {
        const isPasswordEmpty = newPassword.trim() === '';
        const isConfirmEmpty = confirmPassword.trim() === '';
        const isMatch = newPassword === confirmPassword;

        setIsPasswordValid(!isPasswordEmpty);
        setIsConfirmValid(!isConfirmEmpty && isMatch);

        if (!isPasswordEmpty && !isConfirmEmpty && isMatch) {
            setMessage('* 인증에 성공하였습니다.');
            setMessageClass('success_message');
        } else {
            setMessage(
                isPasswordEmpty
                    ? '새 비밀번호를 입력해 주세요.'
                    : isConfirmEmpty
                    ? '비밀번호 확인을 입력해 주세요.'
                    : '비밀번호가 일치하지 않습니다.'
            );
            setMessageClass('error_message');
        }
    };

    const handleChangePWSubmit = () => {
        if (messageClass === 'success_message') {
            navigate('/user/change/success');
        } else {
            handleValidation();
        }
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
                        <input
                            type={pwType.type}
                            className={`min_text ${isPasswordValid ? '' : 'invalid'}`}
                            placeholder='새 비밀번호*'
                            value={newPassword}
                            onChange={handlePasswordChange}
                        />
                        <span onMouseDown={handlePwState}>
                            <img
                                src={pwType.visible ? noneye : eye}
                                className='eye_icon'
                                alt='toggle visibility'
                            />
                        </span>
                    </div>

                    <div className='user_container'>
                        <input
                            type='password'
                            className={`min_text ${isConfirmValid ? '' : 'invalid'}`}
                            placeholder='비밀번호 확인*'
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        <button className='pw_check' onClick={handleValidation}>
                            확인
                        </button>
                    </div>

                    {message && <p className={messageClass}>{message}</p>}
                </div>

                <button
                    className='user_btn'
                    style={{
                        color: messageClass === 'success_message' ? 'var(--white)' : 'inherit',
                        backgroundColor: messageClass === 'success_message' ? '#333' : 'inherit',
                        cursor: messageClass === 'success_message' ? 'pointer' : 'default',
                    }}
                    disabled={messageClass !== 'success_message'}
                    onClick={handleChangePWSubmit}
                >
                    비밀번호 변경하기
                </button>
            </div>
        </div>
    );
};

export default ChangePW;
