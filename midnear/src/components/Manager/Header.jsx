import React from 'react';
import logo from "../../assets/img/logo/header_logo.svg";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    return (
        <div className='manager-header'>
            <div className="logo">
                <img src={logo} alt="logo" onClick={goHome} />
            </div>

        </div>
    )
}

export default Header
