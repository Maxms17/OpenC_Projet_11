import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importez useLocation depuis react-router-dom
import logo from '../../assets/LOGO.jpg'
import './Header.css'

function Header() {
    const location = useLocation(); // Obtenez l'objet location du routeur

    return (
        <div className='my-header'>
        <img src={logo} alt='Kasa' className='my-logo' />
        <nav>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Accueil</Link>
            <Link to="/propos" className={location.pathname === '/propos' ? 'active-link' : ''}>A Propos</Link>
        </nav>
        </div>
    );
}

export default Header;
