import React from 'react'
import MyPageModal from '../MyPageModal'
import defaultimage from '../../../assets/img/orderlist/default.svg'
import { Link } from 'react-router-dom'; 

const SelectContents = () => {
  return (
    <div className='container'>
      <div className='field_container'>
      <MyPageModal/>
        <div className='load_bar'>
            <span>[1] 상품 확인</span>
            <div className='load_bar_line' />
            <p>[2] 사유 선택</p>
            <div className='load_bar_line' />
            <p>[3]확인 신청</p>
        </div>

        <div className='mypage_title'>교환 환불 신청</div>

        <div className='order_num'>
            <div className='order_title'>2024.12.25 주문</div>
            <div className='order_title'>주문번호 1111010101010101001</div>
        </div>

        <div className='ordered_box'>
              <div className='box_left'>
                  <div className='order_state'>
                      <span className='state'>배송완료</span>
                      <div className='dot' />
                      <span className='date'>2024.12.25 주문</span>
                  </div>
                  <div className='order_info'>
                      <img src={defaultimage} />
                      <div className='goods_info'>
                          <p>숨이 자꾸 멎는다 네가 날 향해 걸어온다 나를 보며 웃는다 너도 내게 끌리는지</p>
                          <div className='price'>
                              <span>₩ 99,999</span>
                              <div className='dot' />
                              <span>1개</span>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='line' />

              <div className='box_right'>
                  <div className='box'>
                      <Link to="/mypage/orderlist/option/exchange" className='order_option'>교환 신청</Link>
                      <Link to="/mypage/orderlist/option/refund" className='order_option'>반품 신청</Link>
                  </div>
              </div>
      </div>

      <button className='next_level'>다음 단계</button>


    </div>
    </div>
  )
}

export default SelectContents;
