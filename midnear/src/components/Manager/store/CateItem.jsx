import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CateItem = ({ name, children, isOpen, onAddCategory }) => {
  const [open, setOpen] = useState(isOpen);
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(name);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDoubleClick = () => {
    setEditMode(true);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleSaveName = () => {
    setEditMode(false);
    if (onAddCategory) onAddCategory(newName); 
  };

  return (
    <div className="cateItem">
      <div className="inner" onClick={toggleOpen}>
        <div className={`semo ${open ? 'open' : ''}`}></div>
        <div 
          className="item-name" 
          onDoubleClick={handleDoubleClick}
        >
          {editMode ? (
            <input 
              type="text" 
              value={newName} 
              onChange={handleNameChange}
              onBlur={handleSaveName}
              autoFocus
            />
          ) : (
            newName
          )}
        </div>
      </div>

      {children && (
        <motion.div
          className={`children ${open || isOpen ? 'open' : ''}`}
          initial={false}
          animate={open || isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default CateItem;
