import React, { useEffect } from 'react'
import './Footer.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import footer_logo from '../Assets/img/logo.png'
import facebook_icon from '../Assets/img/facebook.png'
import instagram_icon from '../Assets/img/instagram.png'
import whatsapp_icon from '../Assets/img/whatsapp.png'

const Footer = ({theme}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000});
  }, []);

  return (
    <div className={`footer ${theme}`} data-aos="fade-up">
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
        <p>© {new Date().getFullYear()} JD Studio Web. Todo los derechos reservados</p>
      </div>
    </div>
  )
}

export default Footer