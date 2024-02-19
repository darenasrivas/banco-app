import { useState } from 'react'
// Importamos los datos de las cuentas
import accounts from './cuentas'
import './App.css'
import Welcome from './Welcome/Welcome'
import Login from './Login/Login'
import Balance from './Balance/Balance'
import Movements from './Movements/Movements'
import Summary from './Summary/Summary'

function App() {
  // Mostramos la cuenta 0 - account1
  const [account, setAccount] = useState(accounts[0])
  // Sacamos los movimientos por desestructuración
  const { movements } = account

  // TAREAS
  // 1. Hacer el componente Welcome.
  // Recibe propiedad que es nombre de usuario y muestra: Bienvenido {nombre de usuario}
  // Si está vacio, muestra el Log In to get started

  // 2. Hacer componente Login -> usar useRef como antes

  // 3. Hacer los movimientos
  // Recibe una propiedad que es el array de movimientos
  // muestra una lista de movimientos que son un componente llamado Movement

  return (
    <>
      <nav>
        <Welcome />
        <Login />
      </nav>

      <main className="app">
        <Balance movements={movements} />
        <Movements />
        <Summary movements={movements} />

        <div className="operation operation--transfer">
          <h2>Transfer money</h2>
          <form className="form form--transfer">
            <input type="text" className="form__input form__input--to" />
            <input type="number" className="form__input form__input--amount" />
            <button className="form__btn form__btn--transfer">&rarr;</button>
            <label className="form__label">Transfer to</label>
            <label className="form__label">Amount</label>
          </form>
        </div>

        <div className="operation operation--loan">
          <h2>Request loan</h2>
          <form className="form form--loan">
            <input
              type="number"
              className="form__input form__input--loan-amount"
            />
            <button className="form__btn form__btn--loan">&rarr;</button>
            <label className="form__label form__label--loan">Amount</label>
          </form>
        </div>

        <div className="operation operation--close">
          <h2>Close account</h2>
          <form className="form form--close">
            <input type="text" className="form__input form__input--user" />
            <input
              type="password"
              maxlength="6"
              className="form__input form__input--pin"
            />
            <button className="form__btn form__btn--close">&rarr;</button>
            <label className="form__label">Confirm user</label>
            <label className="form__label">Confirm PIN</label>
          </form>
        </div>

        <p className="logout-timer">
          You will be logged out in <span className="timer">05:00</span>
        </p>
      </main>
    </>
  )
}

export default App
