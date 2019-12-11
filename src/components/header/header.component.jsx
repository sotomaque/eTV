import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top main">
        <div className="header">
            <Link className="logo-container" to="/"><Logo /></Link>
            <div className="options">
                <Link className="option" to="/movies/12312" style={{ color: 'white', textDecoration: 'inherit'}}>Movies</Link>
            </div>
        </div>
    </nav>
    
);

export default Header;