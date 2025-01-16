import React, { useState } from 'react';
import CateItem from './CateItem';

const Category = () => {
  return (
    <div className='manager_category container'>
      <div className="title">
        <p className='b'>카테고리 관리</p>
        <p>더블클릭시 수정 가능, 수정 중 칸을 비워둔 채로 enter키를 누르면 해당 항목이 삭제(해당 항목에 하위 카테고리가 있을 경우 함께 삭제)</p>
      </div>
      <div className="catelist">
        <CateItem type="top" />
        <div className="line"><span></span></div>
        <CateItem type="mid" />
        <div className="line"><span></span></div>
        <CateItem type="bot" />

      </div>
      <div className="btn">완료</div>
    </div>
  );
};

export default Category;
