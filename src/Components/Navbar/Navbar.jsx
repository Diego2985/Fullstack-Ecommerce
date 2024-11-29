import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/img/logo.png'
import cart_icon_light from '../Assets/img/cart_icon_light.png'
import cart_icon_dark from '../Assets/img/cart_icon_dark.png'
import { Link } from 'react-router-dom'

const Navbar = ({ theme, toggleTheme}) => {
  const [menu,setMenu] = useState("shop");  

  return (
    <div className={`navbar ${theme}`}>
       <div className="nav-logo">
         <img className="logo" src={logo} alt="Logo" />
       </div>
       <ul className={`nav-menu ${theme}`}>
  <li onClick={() => setMenu("shop")}>
    <Link style={{ textDecoration: "none" }} to="/">
      Shop
    </Link>
    {menu === "shop" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("mens")}>
    <Link style={{ textDecoration: "none" }} to="/mens">
      Hombre
    </Link>
    {menu === "mens" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("womens")}>
    <Link style={{ textDecoration: "none" }} to="/womens">
      Mujer
    </Link>
    {menu === "womens" ? <hr /> : null}
  </li>
</ul>
       <div className='nav-login-cart'>
         <Link to='/login'>
           <button className={`login-btn ${theme}`}>Login</button>
         </Link>
         <Link to='/cart' className="cart-container">
           <img className={`cart_icon ${theme}`} 
            src={theme === "light" ? cart_icon_light : cart_icon_dark} alt="cart_icon" />
           <div className='nav-cart-count'>0</div>
         </Link>         
         <label className="theme-switch-wrapper">
           <input type="checkbox" 
           className="theme-switch-checkbox" 
           checked={theme === 'dark'} 
           onChange={toggleTheme} />
           <div className="theme-switch"></div>
         </label>
         
       </div>
    </div>
  )
}

export default Navbar