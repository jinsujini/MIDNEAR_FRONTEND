import React from 'react'
import MyPageModal from '../MyPageModal'
import defaultimage from '../../../assets/img/orderlist/default.svg'

const OrderDetail = () => {
  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal />
            <div className='field_container_content'>
                <div className='mypage_title'>주문 상세</div>

                <div className='order_num'>
                    <div className='order_title'>2024.12.25 주문</div>
                    <div className='order_title'>주문번호 1111010101010101001</div>
                </div>
                

                <div className='ordering_box'>
                    <div className='box_left'>
                        <div className='order_state'>
                            <span className='state'>배송 완료</span>
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
                        <button className='order_option'>배송조회</button>
                        <button className='order_option'>교환, 반품 신청</button>
                        <button className='order_option'>리뷰 작성하기</button>
                    </div>
                </div>
            </div>

            <div className='order_section_line' />

            <div class="order_info">
                <h2 class="mypage_middle_text">수취인 정보</h2>
                <div class="order_info__item">
                    <span class="order_info__label">받는 사람</span>
                    <span class="order_info__value">홍길동</span>
                </div>
                <div class="order_info__item">
                    <span class="order_info__label">연락처</span>
                    <span class="order_info__value">010-9999-9999</span>
                </div>
                <div class="order_info__item">
                    <span class="order_info__label">받는 주소</span>
                    <span class="order_info__value">주소주소주소____</span>
                </div>
                <div class="order_info__item">
                    <span class="order_info__label">배송요청사항</span>
                    <span class="order_info__value">부재시 문 앞</span>
                </div>
            </div>

            <div class="payment-info">
                <h2 class="payment-info__title">결제 정보</h2>
                <div class="payment-info__details">
                    <div class="payment-info__item">
                        <span class="payment-info__label">결제수단</span>
                        <span class="payment-info__value">00카드 / 일시불</span>
                    </div>
                    <div class="payment-info__item">
                        <span class="payment-info__label">총 상품가격</span>
                        <span class="payment-info__value">99,999 원</span>
                    </div>
                    <div class="payment-info__item">
                        <span class="payment-info__label">배송비</span>
                        <span class="payment-info__value">0 원</span>
                    </div>
                    <div class="payment-info__item">
                        <span class="payment-info__label">총 결제금액</span>
                        <span class="payment-info__value payment-info__value--highlight">99,999 원</span>
                    </div>
                </div>

                <h2 class="payment-info__title">결제영수증 정보</h2>
                <div class="payment-info__receipt">
                    <p class="payment-info__description">해당 주문건에 대해 구매 카드영수증 확인이 가능합니다.</p>
                    <p class="payment-info__description">해당 주문건에 대해 거래명세서 확인이 가능합니다.</p>
                </div>

                <div class="payment-info__actions">
                    <button class="payment-info__button">카드영수증</button>
                    <button class="payment-info__button">거래명세서</button>
                    <button class="payment-info__button payment-info__button--delete">주문내역 삭제</button>
                    <button class="payment-info__button payment-info__button--back">주문목록 돌아가기</button>
                </div>
            </div>


        
            <div className='button area'>
                <button className='previous'>&lt; 이전</button>
                <button className='next'>다음 &gt;</button>
            </div>
        </div>
    </div>
  )
}

export default OrderDetail