import React from 'react'

const GoodsManagement = () => {
    return (
        <div className='goodsManagement container'>
            <div className="hd">
                <div className="title">상품 관리</div>
                <div className="serch_wrap"></div>
            </div>
            <div className="table">
                <div className="header">
                    <div className="category">카테고리</div>
                    <div className="name">상품명</div>
                    <div className="color">색상</div>
                    <div className="price">판매가</div>
                    <div className="dis_persent">할인율</div>
                    <div className="dis_price">할인가</div>
                    <div className="status"> 판매상태</div>
                    <div className="size">사이즈 별 재고 수량</div>
                    <div className="day">등록 일시</div>
                    <div className="check">선택</div>
                </div>
            </div>

        </div>
    )
}

export default GoodsManagement
