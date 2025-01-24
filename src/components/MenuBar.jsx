import React from 'react'
import { Link, useLocation } from "react-router-dom";
import linkedInLogo from "../images/linkedInLogo.png";

function MenuBar () {

    let linkedInUrl = 'https://www.linkedin.com/in/caren-miranda-cs/';
    const openInNewTab = () => {
        window.open(linkedInUrl , '_blank', 'noopener,noreferrer');
    }

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
    <div className="header">
        <Link to="/" className="pageTitle"> Caren Miranda
        </Link>
        {/* Navigation bar */}
        <nav class="nav">
            <ul class="menu">
                {/* <li className={isActive('/') ? "active" : ''}><Link to="/">Home</Link></li> */}
                <li className={isActive('/Experiences') ? "active" : ''}><Link to="/Experiences">Experiences</Link></li>
                <li className={isActive('/About') ? "active" : ''}><Link to="/About">About</Link></li>
                {/* <li className={isActive('/Contact') ? "active" : ''}><Link to="/Contact">Contact</Link></li> */}
                <div className="logo">
                    <Link onClick={openInNewTab}>
                    <img src={linkedInLogo} alt="LinkedIn Profile" />
                    </Link>
                </div>
            </ul>
        </nav>
    </div>
    );
}

export default MenuBar