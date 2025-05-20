import React, { useEffect }from 'react';
import './Hero.css';
import arrow_icon from '../Assets/img/arrow.png';
import hero_img from '../Assets/img/hero_image.png';



const Hero = ({ theme = 'light' }) => {
  useEffect(() => {
    window.scrollTo (0, 0);   
  }, []);


  return (
    <div className={`hero-container ${theme}`} data-aos="fade-up">
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

           <div className="hero-right">
        <img src={hero_img} alt="Hero visual" />
      </div>        
    </div>
  )
}

export default Hero

