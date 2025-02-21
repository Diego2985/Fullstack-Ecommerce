import React from 'react'
import './NewsLetter.css'

const NewsLetter = ({theme}) => {
  return (
    <div className={`newsletter ${theme}`}>
        <h1>Recibí ofertas Exclusivas a tu email</h1>
        <p>Subscribite para recibir noticias y mantente actualizado</p>
     <div>
        <input type="email" placeholder='Tu email'/>
        <button>Subscribir</button>
     </div>    
    </div>        
  )
}

export default NewsLetter