import React, { useState } from 'react';

const PaymentComponent = () => {
    const [selectedTab, setSelectedTab] = useState('쿠폰'); // 기본 탭을 쿠폰으로 설정
    const [couponName, setCouponName] = useState(''); // 쿠폰 이름
    const [couponPercentage, setCouponPercentage] = useState(''); // 쿠폰 % 
    const [userId, setUserId] = useState(''); 
    const [selectedUsers, setSelectedUsers] = useState([]); 
    const [textReviewPoint, setTextReviewPoint] = useState(''); 
    const [photoReviewPoint, setPhotoReviewPoint] = useState(''); 

    const users = Array.from({ length: 100 }, (_, index) => `user${index + 1}`); // 100명 데이터 가정
    const [currentPage, setCurrentPage] = useState(0); 
    const usersPerPage = 10; 

    const handleUserSelect = (user) => {
        setSelectedUsers((prev) =>
            prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]
        );
    };

    const handleSelectAll = () => {
        const startIdx = currentPage * usersPerPage;
        const endIdx = startIdx + usersPerPage;
        setSelectedUsers(users.slice(startIdx, endIdx)); // 현재 페이지의 유저들만 선택
    };

    const handleDeselectAll = () => setSelectedUsers([]);

    const handlePayment = () => {
        console.log('쿠폰 이름:', couponName);
        console.log('쿠폰 %:', couponPercentage);
        console.log('선택된 사용자:', selectedUsers);
        alert('쿠폰 지급이 완료되었습니다.');
    };

    const handleCouponPercentageChange = (e) => {
        let value = Number(e.target.value);
        if (value < 0) value = 1;
        if (value > 100) value = 100;
        setCouponPercentage(value);
    };

    const startIdx = currentPage * usersPerPage;
    const endIdx = startIdx + usersPerPage;
    const paginatedUsers = users.slice(startIdx, endIdx); // 현재 페이지의 유저만 가져오기

    return (
        <div className="payment-container">
            <div className="payment-header">
                <h2>쿠폰 지급 관리</h2>
                <div className="payment-action-buttons">
                    <button 
                        onClick={() => setSelectedTab('쿠폰')} 
                        className={selectedTab === '쿠폰' ? 'active' : ''}
                    >
                        쿠폰
                    </button>
                    <button 
                        onClick={() => setSelectedTab('개별 쿠폰')} 
                        className={selectedTab === '개별 쿠폰' ? 'active' : ''}
                    >
                        개별 쿠폰
                    </button>
                </div>
            </div>

            {selectedTab === '쿠폰' && (
                <div className="payment-fields">
                    <label htmlFor="couponName">쿠폰 이름</label>
                    <input type="text" className='couponinput' id="couponName" value={couponName} onChange={(e) => setCouponName(e.target.value)} placeholder="지급 사유 입력" />

                    <label htmlFor="couponPercentage">할인 퍼센트</label>
                    <input type="number"  id="couponPercentage" className='couponpercent' value={couponPercentage} onChange={handleCouponPercentageChange} placeholder="할인율" />
                </div>
            )}

            {selectedTab === '개별 쿠폰' && (
                <div className="payment-fields">
                    <label htmlFor="userId">사용자 아이디 검색</label>
                    <div className="input-group">
                        <input 
                            type="text" 
                            id="userId" 
                            value={userId} 
                            onChange={(e) => setUserId(e.target.value)} 
                            placeholder="사용자 아이디 입력" 
                        />
                        <div className="search-icon">🔍</div>
                    </div>
                    <div className="cp-table-container">
                        <table className="cp-user-table">
                            <tbody>
                                {paginatedUsers.map((user) => (
                                    <tr key={user}>
                                        <td>{user}</td>
                                        <td style={{ width: '35px' }}>
                                            <input type="checkbox" checked={selectedUsers.includes(user)} onChange={() => handleUserSelect(user)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="cp-pagination">
                        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
                            이전
                        </button>

                        {[...Array(Math.ceil(users.length / usersPerPage))].map((_, index) => (
                            <button 
                                key={index} 
                                onClick={() => setCurrentPage(index)} 
                                className={currentPage === index ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button 
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(users.length / usersPerPage) - 1))} 
                            disabled={endIdx >= users.length}
                        >
                            다음
                        </button>
                    </div>

                    <div className="payment-action-buttons">
                        <button onClick={handleSelectAll}>전체 선택</button>
                        <button onClick={handleDeselectAll}>전체 해제</button>
                    </div>

                    <label htmlFor="couponName">쿠폰 이름</label>
                    <input type="text" className='couponinput' id="couponName" value={couponName} onChange={(e) => setCouponName(e.target.value)} placeholder="쿠폰 이름을 입력하세요" />

                    <label htmlFor="couponPercentage">할인 퍼센트</label>
                    <input type="number"  id="couponPercentage" className='couponpercent' value={couponPercentage} onChange={handleCouponPercentageChange} placeholder="할인율" />
                </div>
            )}

            <button className="payment-button" onClick={handlePayment}>지급</button>
        </div>
    );
};

export default PaymentComponent;