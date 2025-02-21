import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/img/logo.png'
import facebook_icon from '../Assets/img/facebook.png'
import instagram_icon from '../Assets/img/instagram.png'
import whatsapp_icon from '../Assets/img/whatsapp.png'

const Footer = ({theme}) => {
  return (
    <div className={`footer ${theme}`}>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Compañia</li>
        <li>Productos</li>
        <li>Oficinas</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
           <img src={facebook_icon} alt="" />
        </div>
        <div className="footer-icons-container">
           <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
           <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - Todo los derechos reservados</p>
      </div>
    </div>
  )
}

export default Footer