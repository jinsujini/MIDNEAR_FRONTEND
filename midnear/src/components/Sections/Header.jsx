import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import {motion, AnimatePresence} from 'framer-motion';
import logo from "../../assets/img/logo/header_logo.svg";
import ShoppingCart from '../Cart/ShoppingCart';

const Header = () => {
  const navigate = useNavigate();
  const [activeSub1, setActiveSub1] = useState(false);
  const [activeSub2, setActiveSub2] = useState(false);
  const [activeSubCate1, setActiveSubCate1] = useState(false);
  const [activeSubCate2, setActiveSubCate2] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const goHome = () => {
     navigate('/'); 
  };

  const openCate1 = () => {
    setActiveSub1(!activeSub1);
  };


  const openCate2 = () => {
    setActiveSub2(!activeSub2);
  };
  const openSubCate1 = () => {
    setActiveSubCate1(!activeSubCate1);
  };
  const openSubCate2 = () => {
    setActiveSubCate2(!activeSubCate2);
  };

  const toggleCart = () => {
    setIsCartOpen((prev)=>!prev);
  }
  const cartVariants = {
    hidden: { x: "43.7rem" },
    visible: { x: 0 },
    exit: { x: "43.7rem",  transition: { duration: 1, ease: "easeInOut" }  } 
  };
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  return (
    <div className='header-container'>
    <div className="header">
      <div className="logo" onClick={goHome}>
        <img src={logo} alt="logo" />
      </div>

      <div className="sc1">
        <div className="SHOP">
          <p className={` ${activeSub1 ? 'bold' : ''}`} onClick={openCate1}>
            SHOP
          </p>
          <div className={`sub ${activeSub1 ? 'display' : ''}`}>

            <Link to="/shop/all">ALL SHOP</Link>
            <Link to="/shop/new">NEW</Link>
            <div className="newCloth">
              <p onClick={openSubCate1}>NEW CLOTH</p>
              <div className={`newCloth-sub ${activeSubCate1 ? 'display' : ''}`}>
                <Link to="/shop/newCloth/all">ALL</Link>
                <Link to="/shop/newCloth/top">TOP</Link>
                <Link to="/shop/newCloth/bottom">BOTTOM</Link>
              </div>
            </div>
            <div className="second">
              <p onClick={openSubCate2}>SECOND</p>
              <div className={`second-sub ${activeSubCate2 ? 'display' : ''}`}>
                <Link to="/shop/second/all">ALL</Link>
                <Link to="/shop/second/top">TOP</Link>
                <Link to="/shop/second/bottom">BOTTOM</Link>

              </div>
            </div>
          </div>
        </div>

        <div className="OTHERS">
          <p className={` ${activeSub2 ? 'bold' : ''}`} onClick={openCate2}>
            OTHERS
          </p>

          <div className={`sub ${activeSub2 ? 'display' : ''}`}>
            <Link to="/others/magazine">MAGAZINE</Link>
            <Link to="/others/notice">NOTICE</Link>
          </div>
        </div>
      </div>

      <div className="sc2">
        <p className="SEARCH">SEARCH</p>
        <Link to='user/login' className="LOGIN">LOGIN</Link>
        <p className="ACCOUNT">ACCOUNT</p>
        <p className="BAG" onClick={toggleCart}>
          BAG <span>(1)</span>
        </p>
      </div>
    </div>
    <AnimatePresence>
        {isCartOpen && (
          <>
          <motion.div
            className="ShoppingCart"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backgroundVariants}
          />
          <motion.div
          className={`cart_content ${isCartOpen ? 'open' : ''}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cartVariants}
            transition={{ type: "tween", duration: 1, }} 
          >
            <ShoppingCart toggleCart={toggleCart} />
          </motion.div>
          </>
        )}        
      </AnimatePresence>
    </div>
  );
};

export default Header;
