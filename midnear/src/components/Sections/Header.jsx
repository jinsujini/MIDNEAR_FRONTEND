import React, { useState, useEffect } from 'react';
import logo from "../../assets/img/logo/header_logo.svg";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [activeSub1, setActiveSub1] = useState(false);
  const [activeSub2, setActiveSub2] = useState(false);

  const goHome = () => {
    navigate('/');
  }

  const openCate1 = () => {
    setActiveSub1(!activeSub1);
  }

  const openCate2 = () => {
    setActiveSub2(!activeSub2);
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" onClick={goHome} />
      </div>

      <div className="sc1">
        <p className={`SHOP ${activeSub1 ? 'bold' : ''}`}
          onClick={openCate1}
        >
          SHOP
        </p>
          <div className={`sub ${activeSub1 ? 'display' : ''}`}>
            <p>ALL SHOP</p>
            <p>NEW</p>
            <p>NEW CLOTH</p>
            <p>SECOND</p>
          </div>

        <p className={`SUPPORT ${activeSub2 ? 'bold' : ''}`}
          onClick={openCate2}
        >
          SUPPORT
        </p>

          <div className={`sub ${activeSub2 ? 'display' : ''}`}>
            <p>MAGAZINE</p>
            <p>NOTICE</p>
          </div>

      </div>
      <div className="sc2">
        <p className="SEARCH">SEARCH</p>
        <p className="LOGIN">LOGIN</p>
        <p className="ACCOUNT">ACCOUNT</p>
        <p className="BAG">
          BAG <span>(1)</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
