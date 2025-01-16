import React, {useState} from 'react'

export const DelModal = ({isOpen, closeModal}) => {
  return (
    <div className='DelModal'>
        <div className='ShippingModal'  style={{display:isOpen ? "flex" : "none"}}>
            <div className='modal'>
                <p>배송 정보를 정말 삭제할까요?</p>
                <div onClick={closeModal}>삭제</div>
            </div>
        </div>
    </div>
  )
}
