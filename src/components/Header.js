// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={require('../img/comfy-logo.png')} alt="" />
      </div>
      <div
        className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="menu-content">
          <button onClick={closeMenu}>
            <a href="https://candid-banoffee-fa60e2.netlify.app">Хелпівник</a>
          </button>
          <button>
            <a href="https://max-it-zt.github.io/comfy-zvit-teh/">
              Мій контроль залу!
            </a>
          </button>
          <button onClick={closeMenu}>
            <a
              href="https://elearning.comfy.ua/wallet"
              target="_blank"
              rel="noreferrer"
            >
              Мій Гаманець
            </a>
          </button>
          <button onClick={closeMenu}>
            <a
              href="https://docs.google.com/spreadsheets/d/1Wxgk7YfdiOrgqhAZ-FJKSfee88IIFO-yeGUFCF_af6U/edit#gid=0&range=A2:AG8"
              target="_blank "
              rel="noreferrer"
            >
              Графік на місяць
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
