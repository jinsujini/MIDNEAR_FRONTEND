import React, { useState } from 'react';

const Category = () => {
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (e, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = e.target.value;
    setInputs(updatedInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']); 
  };

  const handleRemoveInput = (index) => {
    const updatedInputs = inputs.filter((_, i) => i !== index);
    setInputs(updatedInputs);
  };

  return (
    <div className='manager_category container'>
      <div className="title">
        <p className='b'>카테고리 관리</p>
        <p>한번 클릭 시 카테고리 명 수정 더블 클릭 시 하위 카테고리 오픈</p>
      </div>
      <div className="catelist">
        <div className="category">
          <h5>SHOP</h5>
          <div className="item"></div>
        </div>
        {inputs.map((inputValue, index) => (
          <div className="input" key={index}>
            <input
              type='text'
              value={inputValue}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="입력"
              size={inputValue.length + 1 || 2} />
            <div className="minus" onClick={() => handleRemoveInput(index)}>-</div>
          </div>
        ))}
        <div className="plus" onClick={handleAddInput}>+</div>
      </div>
      <div className="btn">완료</div>
    </div>
  );
};

export default Category;
