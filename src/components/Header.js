import React from "react";
import logo from '../wishingwell.png';
import './header.css';

function Header() {
    return (
        <header >
            <img className='header' src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header;


