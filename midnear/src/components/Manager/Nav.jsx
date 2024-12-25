import React, { useState } from 'react';


const Nav = () => {
    const [activeProduct, setActiveProduct] = useState(false);
    const [activeCuppon, setActiveCuppon] = useState(false);
    const [activeStore, setActiveStore] = useState(false);
    const [activeGraph, setActiveGraph] = useState(false);
    const [activeNotice, setActiveNotice] = useState(false);
    const [activeMagazine, setActiveMagazine] = useState(false);
    const [activeOnebyone, setActiveOnebyone] = useState(false);
    const [activeSales, setActiveSales] = useState(false);
    const [activeBlock, setActiveBlock] = useState(false);

    const onProduct = () =>{
        setActiveProduct(!activeProduct);
    }

    const onCuppon = () =>{
        setActiveCuppon(!activeCuppon);
    }

    const onStore = () =>{
        setActiveStore(!activeStore);
    }

    const onGraph = () =>{
        setActiveGraph(!activeGraph);
    }

    const onNotice = () =>{
        setActiveNotice(!activeNotice);
    }

    const onMagazine = () =>{
        setActiveMagazine(!activeMagazine);
    }

    const onOnebyone = () => {
        setActiveOnebyone(!activeOnebyone);
    }

    const onSales = () => {
        setActiveSales(!activeSales);
    }

    const onBlock = () => {
        setActiveBlock(!activeBlock);
    }

    return (
        <div className='Nav'>
            <div onClick={onProduct} className={` ${activeProduct ? 'display' : ''}`}>
                <p>상품</p>

            </div>
            <div className={`product ${activeProduct ? 'display' : ''}`}>
                <p>상품 추가</p>
                <p>상품 관리</p>
                <p>코디 상품 관리</p>
                <p>SHIPPING & RETURNS</p>
            </div>
            <div onClick={onCuppon} className={` ${activeCuppon ? 'display' : ''}`}>
                <p>쿠폰/포인트 지급관리</p>

            </div>
            <div className={`cuppon ${activeCuppon ? 'display' : ''}`}>
                <p>포인트 지급관리</p>
                <p>쿠폰 지급관리</p>
            </div>
            <div onClick={onStore} className={` ${activeStore ? 'display' : ''}`}>
                <p>스토어관리</p>

            </div>
            <div className={`store-manager ${activeStore ? 'display' : ''}`}>
                <p>메인화면 이미지 수정</p>
                <p>로고 수정</p>
                <p>카테고리 관리</p>
                <p>개인정보처리방침 관리</p>
                <p>이용약관 관리</p>
                <p>주소 및 사업자 정보 관리</p>
            </div>
            <div onClick={onGraph} className={` ${activeGraph ? 'display' : ''}`}>
                <p>통계</p>

            </div>
            <div className={`graph ${activeGraph ? 'display' : ''}`}>
                <p>매출 확인</p>
            </div>
            <div onClick={onNotice} className={` ${activeNotice ? 'display' : ''}`}>
                <p>공지</p>

            </div>
            <div className={`notice ${activeNotice ? 'display' : ''}`}>
                <p>공지사항 목록</p>
                <p>공지사항 작성</p>
            </div>
            <div onClick={onMagazine} className={` ${activeMagazine ? 'display' : ''}`}>
                <p>매거진</p>

            </div>
            <div className={`magazine ${activeMagazine ? 'display' : ''}`}>
                <p>매거진 목록 및 작성성</p>
            </div>
            <div onClick={onOnebyone} className={` ${activeOnebyone ? 'display' : ''}`}>
                <p>1:1문의</p>

            </div>
            <div className={`onebyone ${activeOnebyone ? 'display' : ''}`}>
                <p>1:1문의 목록</p>
            </div>
            <div onClick={onSales} className={` ${activeSales ? 'display' : ''}`}>
                <p>판매관리</p>

            </div>
            <div className={`sales ${activeSales ? 'display' : ''}`}>
                <p>주문 통합 검색</p>
                <p>주문확인/배송관리</p>
                <p>구매확정 내역</p>
                <p>취소관리</p>
                <p>반품관리</p>
                <p>무통장결제</p>
                <p>교환관리</p>
            </div>
            <div onClick={onBlock} className={` ${activeBlock ? 'display' : ''}`}>
                <p>판매 방해 고객관리</p>

            </div>
            <div className={`blockedusers ${activeBlock ? 'display' : ''}`}>
                <p>고객 ID 조회</p>
                <p>판매방해 고객 List</p>
            </div>


        </div>
    )
}

export default Nav







