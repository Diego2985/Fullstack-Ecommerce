import React from 'react';
import './Hero.css'
import arrow_icon from '../Assets/img/arrow.png'



const Hero = ({ theme = 'light' }) => {

  return (
    <div className={`hero ${theme}`}>
       <div className="hero-left">
         <h2 className={`hero-title ${theme}`}>NUEVOS PRODUCTOS</h2>
           <div className="hero-icon">
                    <p className={`hero-text ${theme}`}>nuevas</p>
                    <p className={`hero-text ${theme}`}>coleciones</p>
                    <p className={`hero-text ${theme}`}>para todos</p>
              </div>
              <div className="hero-latest-btn">
               <div>Ultimas coleciones</div>
               <img src={arrow_icon} alt="Icono de flecha" />
          </div> 
       </div>       
                   
    </div>
  )
}

export default Hero

