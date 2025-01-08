import React, { useState, useEffect } from 'react';
import '../../assets/sass/manager/_qna.scss';

const TableComponent = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('전체');
    const [sortOrder, setSortOrder] = useState('최신순');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchFilteredData('전체', '최신순', '');
    }, []);

    const fetchFilteredData = async (filter, sortOrder, searchQuery) => {
        const allData = [
            {
                id: 1,
                writer: '김철수',
                title: '배송 지연 문의',
                content: '상품 배송이 지연되고 있습니다.',
                date: '2025-01-07 14:00',
                views: 20,
                answered: true,
            },
            {
                id: 2,
                writer: '이영희',
                title: '환불 요청',
                content: '환불이 처리되지 않았습니다.',
                date: '2025-01-06 13:00',
                views: 15,
                answered: false,
            },
            {
                id: 3,
                writer: '박지수',
                title: '상품 상태 문의',
                content: '상품에 문제가 있습니다.',
                date: '2025-01-05 12:00',
                views: 30,
                answered: true,
            },
        ];

        const today = new Date();

        let filteredData = allData.filter((item) => {
            const itemDate = new Date(item.date);
            switch (filter) {
                case '오늘':
                    return itemDate.toDateString() === today.toDateString();
                case '1주일':
                    return itemDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
                case '1개월':
                    return itemDate >= new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                case '3개월':
                    return itemDate >= new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
                default:
                    return true;
            }
        });

        if (searchQuery) {
            filteredData = filteredData.filter((item) =>
                item.writer.includes(searchQuery) || item.title.includes(searchQuery)
            );
        }

        filteredData = filteredData.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === '최신순' ? dateB - dateA : dateA - dateB;
        });

        setData(filteredData);
    };

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);
        fetchFilteredData(selectedFilter, sortOrder, searchQuery);
    };

    const handleSortChange = (event) => {
        const selectedSortOrder = event.target.value;
        setSortOrder(selectedSortOrder);
        fetchFilteredData(filter, selectedSortOrder, searchQuery);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        fetchFilteredData(filter, sortOrder, query);
    };

    const handleCheckboxChange = (id) => {
        setSelectedIds((prevSelectedIds) =>
            prevSelectedIds.includes(id)
                ? prevSelectedIds.filter((selectedId) => selectedId !== id)
                : [...prevSelectedIds, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedIds.length === currentItems.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(currentItems.map((item) => item.id));
        }
    };

    const handleDeselectAll = () => {
        setSelectedIds([]);
    };

    const handleDeleteSelected = () => {
        // 삭제 확인 팝업
        const confirmDelete = window.confirm("정말로 선택한 항목을 삭제하시겠습니까?");
        if (confirmDelete) {
            setData((prevData) => prevData.filter((item) => !selectedIds.includes(item.id)));
            setSelectedIds([]);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="qna-container">
            <div className="qna-header1">
                <div className="qna-title">1:1 문의 내역</div>
                <div className="qna-controls">
                    <select className="qna-dropdown" value={filter} onChange={handleFilterChange}>
                        <option value="오늘">오늘</option>
                        <option value="1주일">1주일</option>
                        <option value="1개월">1개월</option>
                        <option value="3개월">3개월</option>
                        <option value="전체">전체</option>
                    </select>
                    <select className="qna-dropdown" value={sortOrder} onChange={handleSortChange}>
                        <option value="최신순">최신순</option>
                        <option value="오래된순">오래된순</option>
                    </select>
                    <div className="qna-search-box">
                        <div className="qna-square-box">작성자</div>
                        <input
                            type="text"
                            className="qna-search-bar"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>

            <div className="qna-table-container">
                <table className="qna-table">
                    <thead>
                        <tr>
                            <th>작성자</th>
                            <th>제목</th>
                            <th>내용</th>
                            <th>일시</th>
                            <th>조회수</th>
                            <th>답글 여부</th>
                            <th>선택</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.writer}</td>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.date}</td>
                                <td>{item.views}</td>
                                <td>{item.answered ? '답변 완료' : '미답변'}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        {currentItems.length === 0 && (
                            <tr>
                                <td colSpan="7">데이터가 없습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="qna-pagination">
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
            </div>

            <div className="qna-btn-group">
                <div className="qna-action-buttons">
                    <button onClick={handleSelectAll}>답글 완료한 것만 보기</button>
                    <button onClick={handleDeselectAll}>답글 대기중인 것만 보기</button>
                </div>

                <div className="qna-action-buttons">
                    <button onClick={handleSelectAll}>전체 선택</button>
                    <button onClick={handleDeselectAll}>전체 해제</button>
                    <button className="qna-delete-btn" onClick={handleDeleteSelected}>
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TableComponent;