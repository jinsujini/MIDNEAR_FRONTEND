import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindID = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('phone');

    const handleOptionChange = (e) => {
       setSelectedOption(e.target.value);
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
                            <button className="certi_btn" >인증요청</button>
                        </div>
                    </div>
                )}

            </div>
            
            <button className='user_btn_id'>아이디 찾기</button>
            </div>
    </div>
  )
}

export default FindID