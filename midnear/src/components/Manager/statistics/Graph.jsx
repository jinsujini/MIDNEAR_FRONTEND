import React, { useEffect, useState } from 'react';

const Graph = ({ cate }) => {
    const [title, setTitle] = useState('일간');

    useEffect(() => {
        if (cate === 'week') setTitle('주간');
        else if (cate === 'year') setTitle('연간');
        else setTitle('일간');
    }, [cate]);

    return (
        <div className="graph">
            <div className="title">
                <p>{title} 매출 확인</p>
                <div className="month">2024년 12월</div>
                <div className="info">
                    <p>결제 금액 <span></span></p>
                    <p>환불 금액 <span></span></p>
                </div>
            </div>
            



        </div>
    );
};

export default Graph;
