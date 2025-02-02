import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";

const Modal = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ message: "" });
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    openModal: (message, redirect = null) => {
      setModalContent({ message, redirect });
      setIsOpen(true);
    },
    closeModal: () => {
      setIsOpen(false);
    },
  }));

  const handleConfirm = () => {
    setIsOpen(false);
    if (modalContent.redirect) {
      navigate(modalContent.redirect);
    }
  };

  if (!isOpen) return null;

  return (
    <div className='modal_box'>
      <div className='modal_content'>
        <p>{modalContent.message}</p>
        <button onClick={handleConfirm}>확인</button>
      </div>
    </div>
  );
});

export default Modal;