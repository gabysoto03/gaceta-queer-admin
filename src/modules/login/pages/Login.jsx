import { useState } from 'react'
import logoWhite from '../../../assets/logo_white.png'
import './../styles/Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Login:', { email, password })
  }

  return (
    <div className="login-container">
      
      {/* Sección izquierda con logo */}
      <div className="login-left">
        <div className="login-logo-container">
          <img src={logoWhite} alt="gaceta Queer" className="login-logo" />
        </div>
      </div>

      {/* Sección derecha con formulario */}
      <div className="login-right">
        <div className="login-form-container">
          <h1 className="login-title">Iniciar sesión</h1>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-input-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                required
              />
            </div>

            <div className="login-input-group">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Iniciar sesión
            </button>
          </form>

          <a href="#" className="login-forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
