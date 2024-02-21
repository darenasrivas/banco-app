import './Login.css'
import { useRef } from 'react'

// Recibo del padre en onLogin

function Login({ onLogin }) {
  const userRef = useRef(null)
  const pinRef = useRef(null)

  const handleLogin = (e) => {
    // Con preventdefault no llama al servidor, si no que hace lo que le marco
    e.preventDefault()
    const user = userRef.current.value
    const pin = Number(pinRef.current.value)
    // Llamo a la función del padre, pasandole user y pin como parametros
    onLogin(user, pin)
  }

  return (
    <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
        ref={userRef}
      />
      <input
        type="text"
        placeholder="PIN"
        maxlength="4"
        className="login__input login__input--pin"
        ref={pinRef}
      />
      <button className="login__btn" onClick={handleLogin}>
        &rarr;
      </button>
    </form>
  )
}

export default Login
