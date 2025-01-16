import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CateItem = ({ type }) => {
  const [catename, setCatename] = useState('ALL SHOP');
  const [options, setOptions] = useState(['ALL SHOP', 'NEW']);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelect = (name) => {
    setCatename(name);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEdit = (e) => {
    setCatename(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (type === "top") {
    }
    else {
      if (e.key === 'Enter') {
        if (catename.trim() === '') {
          setOptions(options.filter((option) => option !== catename));
        } else {
          setIsEditing(false);
        }
      }
    }

  };

  return (
    <div className="cateitem">
      <div className="selected" onClick={toggleDropdown} onDoubleClick={handleDoubleClick}>
        {isEditing ? (
          <input
            type="text"
            value={catename}
            onChange={handleEdit}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span>{catename}</span>
        )}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>


      {isOpen && (
        <motion.div
          className="options"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {options.map((option, index) => (
            <div key={index} className="option" onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
          <div className="add" onClick={() => handleSelect("추가")}>추가</div>
        </motion.div>
      )}

    </div>
  );
};

export default CateItem;
