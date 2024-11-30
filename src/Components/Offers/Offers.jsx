import React from 'react'
import './Offers.css'
import image_offer from '../Assets/img/image_offer.png'

const Offers = ({ theme }) => {
   
  return (
    <div className={`offers ${theme}`}>
      <div className="offers-left">
         <h1>Exclusivo</h1>
         <h1>Ofertas para vos</h1>
         <p>SOLO PRODUCTOS MAS VENDIDOS</p>
         <button>Compra Ahora</button>
      </div>
      <div className="offers-right">
         <img src={image_offer} alt=" "/>
         
      </div>
    </div>
  )
}

export default Offers

