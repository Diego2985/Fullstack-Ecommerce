import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/img/logo.png'
import cart_icon_light from '../Assets/img/cart_icon_light.png'
import cart_icon_dark from '../Assets/img/cart_icon_dark.png'
import { Link } from 'react-router-dom'
import { FaBars, FaLock, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false); // Nuevo estado para el menú móvil

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (menuName) => {
    setMenu(menuName);
    setMenuOpen(false); // Cierra menú al hacer clic
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className="nav-header">
        <div className="nav-logo">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        {/* Botón hamburguesa */}
        <div className="hamburger" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Menú */}
      <ul className={`nav-menu ${theme} ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => handleLinkClick("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Tienda
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => handleLinkClick("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Hombre
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => handleLinkClick("womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Mujer
          </Link>
          {menu === "womens" ? <hr /> : null}
        </li>
      </ul>

      {/* Login / Carrito / Tema */}
      <div className='nav-login-cart'>
            <Link to='/login' className="login-icon-link">
              <FaLock className="text-xl" />
              <span className="login-text">Acceder</span>
            </Link>     


        <Link to='/cart' className="cart-container">
          <img className={`cart_icon ${theme}`}
            src={theme === "light" ? cart_icon_light : cart_icon_dark} alt="cart_icon" />
          <div className='nav-cart-count'>0</div>
        </Link>

        <label htmlFor="theme-switch" className="theme-switch-wrapper">
           <input
             type="checkbox"
             id="theme-switch"
             className="theme-switch-checkbox hidden"
             checked={theme === 'dark'}
             onChange={toggleTheme}
           />
           <span className="theme-switch"></span>
           <span className="theme-switch-label">
             {theme === 'dark' ? '🌙 Oscuro' : '☀️ Claro'}
           </span>
         </label>
      </div>
    </div>
    
  );
};

export default Navbar;
