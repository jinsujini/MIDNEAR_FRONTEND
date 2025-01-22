import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; 
import logo from "../../assets/img/logo/header_logo.svg";
import Login from '../User/Login';


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [activeSub1, setActiveSub1] = useState(false);
  const [activeSub2, setActiveSub2] = useState(false);
  const [activeSubCate1, setActiveSubCate1] = useState(false);
  const [activeSubCate2, setActiveSubCate2] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  useEffect(() => {
    setShowLoginModal(false);
  }, [location.pathname]);


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
        <p className="SEARCH">SEARCH</p>
        <p className="LOGIN" onClick={toggleLoginModal} >LOGIN</p>
        <p className="ACCOUNT">ACCOUNT</p>
        <p className="BAG">
          BAG <span>(1)</span>
        </p>
      </div>

      {showLoginModal && (
        <Login onClose={toggleLoginModal} />
      )}

    </div>
  );
};

export default Header;
