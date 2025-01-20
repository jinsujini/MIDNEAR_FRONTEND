import React, { useState } from 'react';
import CateItem from './CateItem';
import PlusCate from './PlusCate';

const Category = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);

  const toggleAll = () => {
    setIsAllOpen((prev) => !prev);
  };

  return (
    <div className="manager_category container">
      <div className="title">
        <p className="b">카테고리 관리</p>

        <div className="btns">
          <div className="all-open" onClick={toggleAll}>
            {isAllOpen ? '전체 접기' : '전체 펼치기'}
          </div>
          
        </div>
      </div>
      <div className="top">
        <CateItem name="SHOP" isOpen={isAllOpen}>
          <div className="mid">
            <CateItem name="ALL SHOP" isOpen={isAllOpen} />
            <CateItem name="NEW" isOpen={isAllOpen} />
            <CateItem name="NEW CLOTH" isOpen={isAllOpen}>
              <div className="bot">
                <CateItem name="ALL" isOpen={isAllOpen} />
                <CateItem name="TOP" isOpen={isAllOpen} />
                <CateItem name="BOTTOM" isOpen={isAllOpen} />
                <PlusCate />
              </div>
            </CateItem>
            <PlusCate />
          </div>
        </CateItem>
      </div>
      <div className="top">
        <CateItem name="SHOP" isOpen={isAllOpen}>
          <div className="mid">
            <CateItem name="ALL SHOP" isOpen={isAllOpen} />
            <CateItem name="NEW" isOpen={isAllOpen} />
            <CateItem name="NEW CLOTH" isOpen={isAllOpen}>
              <div className="bot">
                <CateItem name="ALL" isOpen={isAllOpen} />
                <CateItem name="TOP" isOpen={isAllOpen} />
                <CateItem name="BOTTOM" isOpen={isAllOpen} />
                <PlusCate/>
              </div>
            </CateItem>
            <PlusCate/>
          </div>
        </CateItem>
        <PlusCate/>
      </div>
      <div className="btn">완료</div>
    </div>
  );
};

export default Category;