import React, { useRef } from 'react'
import MyPageModal from '../MyPageModal'
import defaultimage from '../../../assets/img/orderlist/default.svg'
import { Link } from 'react-router-dom'; 

const OrderListBasic = () => {

    const modalRef = useRef();

    const showSuccessModal = () => {
        modalRef.current.openModal(
          "정말 주문취소를 하시겠습니까?",
          "/mypage/orderlist/cancel"
        );
      };

  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal />
            <div className='field_container_content'>
                <div>
                    <div className='mypage_title'>주문 내역</div>

                    <input className='order_search' type='text' placeholder='주문한 상품을 검색할 수 있어요!'></input>

                    <div className='order_title'>최신순</div>

                    <div className='ordering_box'>
                        <div className='box_left'>
                            <div className='order_state'>
                                <span className='state'>상품준비중</span>
                                <div className='dot' />
                                <span className='date'>2024.12.25 주문</span>
                            </div>
                            <div className='order_info'>
                                <img src={defaultimage} />
                                <div className='goods_info'>
                                    <p>상품 정보 : yo, okay 나 혹시 몰라 경고하는데 지금 위험해 자꾸 나를 자극 하지마 나도 날 몰라</p>
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
                        <Link to="/mypage/orderlist/detail" className='order_detail'>주문 상세보기 &gt;</Link>
                            <div className='box'>
                                <button className='order_option'>배송조회</button>
                                <button className='order_option' onClick={showSuccessModal}>주문취소</button>
                            </div>
                            
                        </div>
                    </div>
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
                                <Link to="/mypage/orderlist/detail" className='order_detail'>주문 상세보기 &gt;</Link>
                                <button className='order_option'>배송조회</button>
                                <Link to="/mypage/orderlist/option" className='order_option'>교환, 반품 신청</Link>
                                <Link to="/mypage/orderlist/writingReview" className='order_option'>리뷰 작성하기</Link>
                            </div>
                        </div>
                </div>

                <div className='button_area'>
                    <button className='previous'>&lt; 이전</button>
                    <button className='next'>다음 &gt;</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderListBasic