import React from 'react'
import kakao from '../../assets/img/user/login/kakao_logo.svg'
import naver from '../../assets/img/user/login/naver_logo.svg'
import google from '../../assets/img/user/login/google_logo.svg'

const Login = () => {
  return (
    <div className='container'>
        <div className='login_title'>LOGIN</div>
        <p className='min_text_ex'>별표(*)로 표시된 필드가 필수 필드입니다.</p>

        <input type='text' className='login_text' placeholder='이메일*' />

        <input type='password' className='login_text' placeholder='비밀번호*' />

        <div className='button_container'>
            <button className='kakao_btn'>
                <image src={kakao} />
                카카오 로그인
            </button>
            <button className='naver_btn'>
                <image src={naver} />
                네이버 로그인
            </button>

            <button className='google_btn'>
                <image src={google} />
                구글 로그인
            </button>
        </div>

        <button className='login_btn'>LOGIN</button>

        <div className='option_content'>
            <input type='checkbox'/>
            <p className='option_text'>아이디 / 비밀번호를 잊으셨나요?</p>
        </div>

        <p className='option_text'>회원가입하기</p>
        
    </div>
  )
}

export default Login