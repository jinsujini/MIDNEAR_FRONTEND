import React from 'react'
import { useNavigate } from 'react-router-dom';
import kakao from '../../assets/img/user/login/kakao_logo.svg'
import naver from '../../assets/img/user/login/naver_logo.svg'
import google from '../../assets/img/user/login/google_logo.svg'
import cancel from '../../assets/img/user/login/cancel.svg'

const Login = () => {
    const navigate = useNavigate();

    const goToFindID = () => {
        navigate('/user/find/id');
    };
    
    const goToJoin = () => {
        navigate('/user/join');
    };

    const Back = () => {
        navigate('/');
    };

  return (
    <div className='background'>
        <div className='login_content'>
            <div className='login'>
                <div className='login_nav'>
                    <img src={cancel} className='x' onClick={Back}/>

                    <div className="sc2">
                        <p className="SEARCH">SEARCH</p>
                        <p className="LOGIN">LOGIN</p>
                        <p className="ACCOUNT">ACCOUNT</p>
                        <p className="BAG">
                        BAG <span>(1)</span>
                        </p>
                    </div>
                </div>
                <div className='mid_text'>LOGIN</div>
                <p className='min_text_ex'>별표(*)로 표시된 필드가 필수 필드입니다.</p>

                <input type='text' className='min_text' placeholder='이메일*' />

                <input type='password' className='min_text' placeholder='비밀번호*' />

                <div className='button_container'>
                    <button className='kakao_btn'>
                        <img src={kakao} />
                        카카오 로그인
                    </button>
                    <button className='naver_btn'>
                        <img src={naver} />
                        네이버 로그인
                    </button>

                    <button className='google_btn'>
                        <img src={google} />
                        구글 로그인
                    </button>
                </div>

                <button className='user_btn'>LOGIN</button>

                <div className='option_content'>
                    <div className='check_field'>
                        <input type='checkbox' className='keep_login'/>
                        <p>로그인 상태 유지</p>
                    </div>
                    <div className='option'>
                        <p className='option_text' onClick={goToFindID}>아이디 / 비밀번호를 잊으셨나요?</p>
                        <p className='option_text' onClick={goToJoin}>회원가입하기</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login