import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyPageModal = () => {
  const navigate = useNavigate();

  const goToConfirm = () => {
    navigate('/mypage/userinformaiton/confirm'); 
  };

  const goToEnter = () => {
    navigate('/mypage/userinformaiton/password/change'); 
  };

  const goToOrderList = () => {
    navigate('/mypage/orderlist/');
  };

  return (
    <div className='mypage'>
    <div className='container'>
        <div className='mypage_menu'>

            <div className='mypage_title'>ACCOUNT</div>

            <div className='category_section'>

                <div className='menu_section' onClick={goToConfirm}>내 정보 변경</div>       

                <div className='menu_section' onClick={goToEnter}>비밀번호 변경</div>

                <div className='menu_section' onClick={goToOrderList}>주문내역</div>

                <div className='menu_section'>취소/반품/교환 내역</div>

                <div className='menu_section'>고객지원/1:1문의</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MyPageModal