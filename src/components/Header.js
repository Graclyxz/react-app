// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div class="logo">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/img/logoXV2.png`} alt="Logo" class="logo"></img>
                    </Link>
                    <h1 href="#">React APP XV</h1>
                </div>
                <div class="button">
                    <label for="btn-menu">Menú</label>
                </div>
                <input type="checkbox" id="btn-menu"></input>
                <nav class="menu">
                    <a href="/">Inicio</a>
                    <a href="#about">Sobre Nosotros</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </div>
        </header>

    );
};

export default Header;
