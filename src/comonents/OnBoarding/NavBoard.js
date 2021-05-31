import React from 'react';
import './styles/NavBoard.scss'
import Logo from '../../assets/img/Logo.png'

const NavBoard = () => {
    return (
        <div className="NavBoard">
            <img alt="logo" src={Logo} />
        </div>
    );
};

export default NavBoard;