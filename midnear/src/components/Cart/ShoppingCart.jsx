import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Close from '../../assets/img/product/close.svg'
import OrderList from './OrderList'
import Header from '../Sections/Header'

const ShoppingCart = ({ cartList, toggleCart, isCartOpen}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    const checkMax =() => {
      setIsMobile(window.innerWidth <= 500);
    };
    checkMax();
    window.addEventListener("resize", checkMax);
    return () => window.removeEventListener("resize", checkMax);
  },[]);

  const handleLinkClick = (onClickAction) => {
    if(isCartOpen){
      toggleCart();
    } 
    onClickAction(); 
  };
  return (
    <div className='cart_content'>
      <div className='cart'>
        <div className='cart_nav'>
          <img src={Close} className='close2' onClick={toggleCart}/>
          <div className="sc3">
            <p className="SEARCH">SEARCH</p>
            <p className="LOGIN">LOGIN</p>
            <p className="ACCOUNT">ACCOUNT</p>
            <p className="BAG">
              BAG <span>({cartList.length})</span>
            </p>
          </div>

          {isMobile && (
            <Header onLinkClick={(onClickAction) => handleLinkClick(onClickAction)} />
          )}
      </div>
      < OrderList productList={cartList} toggleCart={toggleCart} point={0}/>
     </div>
    </div>
  )
}

export default ShoppingCart