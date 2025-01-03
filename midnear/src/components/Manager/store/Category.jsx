import React, { useState } from 'react';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [textSize, setTextSize] = useState('2');
  const [inputs, setInputs] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTextSize(e.target.value.length + 1 || 2);
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
          <div className="input">
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              placeholder="입력"
              size={textSize} />
            <div className="minus" onClick={() => handleRemoveInput(index)}>-</div>
          </div>
        ))}

        <div className="plus" onClick={handleAddInput}>+</div>

      </div>
      <div className="btn">완료</div>

    </div>
  )
}

export default Category
