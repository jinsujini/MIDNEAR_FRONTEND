import React, { useRef } from 'react'

const SelectContents = () => {

    const modalRef = useRef();

    const showSuccessModal = () => {
        modalRef.current.openModal(
          "교환 요청이 완료되었습니다.",
          "/mypage/orderlist/detail"
        );
      };

  return (
    <div className='container'>
        <div className='field_container'>
        <MyPageModal/>
        <div className='load_bar'>
            <span>[1] 상품 확인</span>
            <div className='load_bar_line_selected' />
            <span>[2] 사유 선택</span>
            <div className='load_bar_line_selected' />
            <span>[3]확인 신청</span>
        </div>

        <div className='mypage_title'>확인</div>

        <div className='order_num'>
            <div className='order_title'>교환/환불 상품 정보 및 사유 등이 맞는지 확인해 주세요.</div>
        </div>

        <div className='exchange_box'>
              <div className='box_top'>
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

              <div className='under_line' />

              <div className='box_bottom'>
                  <p>선택한 사유</p>
                  <span>단순 변심</span>
              </div>
      </div>

      <div className='mypage_title'>교환 정보를 확인해 주세요</div>

      <div className='order_num'>
            <div className='order_title'>교환 정보를 꼭 확인해 주세요.</div>
        </div>

        <div className='exchange_box'>
              <div className='box_top'>
                  <div className='order_state'>
                      <span className='state'>교환 상품 선택</span>
                  </div>
                  <div className='order_info'>
                      <img src={defaultimage} />
                      <div className='goods_info'>
                        <p>CUTE SWEATERS</p>
                        <span>₩ 99,999</span>
                            <ul className='size'>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                            </ul>
                        <p>BLACK</p>
                            <ul className='color'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            </ul>
                      </div>
                  </div>
              </div>

              <div className='under_line' />

              <div className='box_bottom'>
                  <p>선택한 사유</p>
                  <span>단순 변심</span>
              </div>
      </div>

      <button className='submit_button' onClick={showSuccessModal}>교환 신청</button>

      <Modal ref={modalRef} />
    </div>
    </div>
  )
}

export default SelectContents;
