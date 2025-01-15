import React from 'react'
import { Link } from 'react-router-dom'
import OrderList from '../OrderList'
import StepHeader from '../StepHeader'
import Coupon from './Coupon'

const MemInfo = () => {
  return (
    <div className='member'>
    <div className='info'>
        <StepHeader />
        <div className='container'>
            <div className='empty'></div>
            <div className='info_content'>
                <div className='mid_text'>주문자 정보</div>
                <p className='min_text_ex'>별표(*)로 표시된 필드가 필수 필드입니다.</p>

                <input type='text' className='min_text' placeholder='홍길동*' />
                <input type='text' className='min_text' placeholder='010-9999-9999*' />
                <input type='text' className='min_text' placeholder='이메일' />

                <div className='bottom'>
                  <div className='title'>배송 정보</div>
                  {/** 기본 배송지 없을 때  
                  <p className='min_text_ex'>입력된 배송 정보가 존재하지 않습니다.</p>
                  <Link to='/order/delivery/new-address'><button className='add-btn'>배송 정보 추가하기</button></Link>
                 */}
                  {/** 기본 배송지 있을 때 */}
                  <div className='default_add'>
                    <div className='userInfo'>
                      <div>
                        <p className='b_txt'>홍길동</p>
                        <p className='g_txt'>010-1233-1222</p>
                      </div>
                      <Link to='/order/delivery/select-address'><div className='change-btn'>변경</div></Link>
                    </div>
                    
                    <p className='b_txt'>서울특별시 서대문구 성산로 8길 9-9 (연희동)</p>
                    <p className='b_txt'>ㅇㅇ아파트 109동 109호(종 1234)</p>
                    <p className='g_txt'>(123098)</p>
                    <p className='m_txt'>배송메모</p>
                    <input className='memo' placeholder='배송 메모를 입력해 주세요.'/>
                    <div>

                    </div>
                  </div>
                </div>

                <div className='point'>
                  <div className='use-coupon'><Coupon/></div>
                  <p className='mid_text_ex'>포인트 사용 / 보유 포인트: 10,000 포인트</p> 
                  <div className='use-point'>
                    <input type='text' className='use-text' placeholder='예) 9,999사용'></input>
                    <div className='use-btn'>전액 사용</div>
                  </div>
                  <Link to='/order/pay-succeed'><button className='btn'>결제하기</button></Link>
                </div>
            </div>
            <OrderList />
        </div>
    </div>
    </div>
  )
}

export default MemInfo