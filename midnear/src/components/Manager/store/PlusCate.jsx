import React from 'react';

const PlusCate = ({ onClick }) => {
  return (
    <div className='pluscate' onClick={onClick}>
      <div className="plus_btn">+</div>
      <p>카테고리 추가</p>
    </div>
  );
};

export default PlusCate;
