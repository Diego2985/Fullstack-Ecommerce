import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = ({ theme } ) => {
  

  return (
    <div className={`loginsignup ${theme}`}>
      <div className="loginsignup-container">
        <h1 className="loginsignup-title">Registrarse</h1>
       <form> 
        <div className="loginsignup-fields">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />         
        </div>
        <button type="submit">Continuar</button>
      </form>
        <p className="loginsignup-subtitle">No tenés una cuenta? <span>Acceder aqui</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p className="loginsignup-terms">Acepto los términos y condiciones</p>
        </div>
      </div>  
    </div>
  )
}

export default LoginSignup