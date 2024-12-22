import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link를 import
import logo from "../../assets/img/logo/header_logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [activeSub1, setActiveSub1] = useState(false);
  const [activeSub2, setActiveSub2] = useState(false);
  const [activeSubCate1, setActiveSubCate1] = useState(false);
  const [activeSubCate2, setActiveSubCate2] = useState(false);

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


  return (
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
        <Link to="/search" className="SEARCH">SEARCH</Link>
        <Link to="/login" className="LOGIN">LOGIN</Link>
        <Link to="/account" className="ACCOUNT">ACCOUNT</Link>
        <Link to="/bag" className="BAG">
          BAG <span>(1)</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
