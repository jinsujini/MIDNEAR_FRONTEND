import React, { useState } from 'react';
import Search from '../../../assets/img/icon/Search.svg';
import Semo from '../../../assets/img/icon/semo.svg';

const GoodsManagement = () => {
    const [terms, setTerms] = useState(['오늘', '1주일', '1개월', '3개월', '1년', '전체']);
    const [sort, setSort] = useState(['최신순', '오래된 순']);
    const [cate, setCate] = useState(['카테고리', '상품명', '색상', '판매가', '할인율', '할인가', '판매상태', '사이즈 별 재고수량', '상세설명', '등록 일시']);
    const [select, setSelect] = useState([0, 0, 0]);
    const [showOptions, setShowOptions] = useState([false, false, false]);

    const handleSelect = (index, valueIndex) => {
        setSelect(prev => {
            const newSelect = [...prev];
            newSelect[index] = valueIndex;
            return newSelect;
        });
        setShowOptions(prev => {
            const newShow = [...prev];
            newShow[index] = false;
            return newShow;
        });
    };

    return (
        <div className='goodsManagement container'>
            <div className="hd">
                <div className="title">상품 관리</div>
                <div className="search_wrap">
   
                    <div className="terms">
                        <div className="inner" onClick={() => setShowOptions([!showOptions[0], false, false])}>
                            <p>{terms[select[0]]}</p>
                            <img src={Semo} alt="" />
                        </div>
                        {showOptions[0] && (
                            <div className="options">
                                {terms.map((term, index) => (
                                    <p key={index} onClick={() => handleSelect(0, index)}>{term}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    
          
                    <div className="sort">
                        <div className="inner" onClick={() => setShowOptions([false, !showOptions[1], false])}>
                            <p>{sort[select[1]]}</p>
                            <img src={Semo} alt="" />
                        </div>
                        {showOptions[1] && (
                            <div className="options">
                                {sort.map((s, index) => (
                                    <p key={index} onClick={() => handleSelect(1, index)}>{s}</p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="category">
                        <div className="cate_name" onClick={() => setShowOptions([false, false, !showOptions[2]])}>
                            <p>{cate[select[2]]}</p>
                        </div>
                        {showOptions[2] && (
                            <div className="options">
                                {cate.map((c, index) => (
                                    <p key={index} onClick={() => handleSelect(2, index)}>{c}</p>
                                ))}
                            </div>
                        )}
                        <div className="ip_wrap">
                            <input type="text" name="search" id="search" />
                            <img src={Search} alt="" />
                        </div>
                    </div>
                </div>
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
                <div className="row">
                    <div className="category"></div>
                    <div className="name"></div>
                    <div className="color">
                        <div className="color_name"></div>
                        <div className="dropdown_icon"></div>
                    </div>
                    <div className="price"></div>
                    <div className="dis_persent"></div>
                    <div className="dis_price"></div>
                    <div className="status"></div>
                    <div className="size"></div>
                    <div className="day"></div>
                    <input type='checkbox' className="check" />
                </div>
            </div>
        </div>
    );
}

export default GoodsManagement;
