// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/img/logoXV2.png`} alt="Logo" class="logo"></img>
                </Link>
                <h1 href="#home">React APP</h1>
            </div>
            <nav class="header-right">
                <ul class="header-list">
                    <li class="header-item"><a class="header-link" href="#home">Inicio</a></li>
                    <li class="header-item"><a class="header-link" href="#about">Acerca de</a></li>
                    <li class="header-item"><a class="header-link" href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;
