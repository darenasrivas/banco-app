import './Welcome.css'

// Función que recibe unas propiedades y retorna texto

function Welcome() {
  return (
    <>
      <p className="welcome"> Log in to get started</p>
      <img src="logo.png" alt="Logo" className="logo" />
    </>
  )
}

export default Welcome
