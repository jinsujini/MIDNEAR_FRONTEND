import React, { useRef, useState } from 'react';
import MyPageModal from '../MyPageModal';
import OrderItem from './Orderitem';
import search from '../../../assets/img/orderlist/search.svg'
import defaultimage from '../../../assets/img/orderlist/default.svg';
import { Link } from 'react-router-dom';

const OrderListBasic = () => {
  const modalRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const showSuccessModal = () => {
    modalRef.current.openModal("정말 주문취소를 하시겠습니까?", "/mypage/orderlist/cancel");
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container">
      <div className="field_container">
        <MyPageModal ref={modalRef} />
        <div className="field_container_content">
          <div>
            <div className="mypage_title">주문 내역</div>
            <div className='search-bar-order'>
                <input className="order_search" type="text" placeholder="주문한 상품을 검색할 수 있어요!" />
                <img src={search} className="search-button" />
            </div>
            

            <div className="order_title">최신순</div>

            <OrderItem
              state="상품준비중"
              date="2024.12.25 주문"
              image={defaultimage}
              info="상품 정보 : 예시 상품"
              price="₩ 99,999"
              quantity={1}
              actions={
                <>
                  <Link to="/mypage/orderlist/detail" className="order_detail">주문 상세보기 &gt;</Link>
                  <button className="order_option">배송조회</button>
                  <button className="order_option" onClick={showSuccessModal}>주문취소</button>
                </>
              }
            />

            <OrderItem
              state="배송완료"
              date="2024.12.25 주문"
              image={defaultimage}
              info="상품 정보: 배송 완료 상품"
              price="₩ 99,999"
              quantity={1}
              actions={
                <>
                  <Link to="/mypage/orderlist/detail" className="order_detail">주문 상세보기 &gt;</Link>
                  <button className="order_option">배송조회</button>
                  <Link to="/mypage/orderlist/option" className="order_option">교환, 반품 신청</Link>
                  <Link to="/mypage/orderlist/writingReview" className="order_option">리뷰 작성하기</Link>
                </>
              }
            />
          </div>

          <div className="pagination">
            <button
              className="page-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {'<'}
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="page-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListBasic;
