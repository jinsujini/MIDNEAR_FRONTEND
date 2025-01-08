import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

const MyPageModal = () => {

  return (
    <div className='mypage'>
    <div className='container'>
        <div className='mypage_menu'>

            <div className='mypage_title'>ACCOUNT</div>

            <div className='category_section'>

                <Link to="/mypage/userinformaiton/confirm" className='menu_section'>내 정보 변경</Link>       

                <Link to="/mypage/userinformaiton/password/change" className='menu_section'>비밀번호 변경</Link>

                <Link to="/mypage/orderlist/" className='menu_section'>주문내역</Link>

                <div className='menu_section'>취소/반품/교환 내역</div>

                <div className='menu_section'>고객지원/1:1문의</div>
                
                <div className='menu_section'>적립금 및 보유 쿠폰 관리</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MyPageModal