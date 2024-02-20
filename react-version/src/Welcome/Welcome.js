import './Welcome.css'

// Función que recibe unas propiedades y retorna texto
// Las propiedades son props, entre ellas owner:user
function Welcome({ user }) {
  // Obtenemos nombre de usuario sin apellido
  const name = (user = user.split(' ')[0])
  // Esta vacio o tiene usuario.
  // Si existe user o si no
  return (
    <>
      <p className="welcome">
        {user ? `Bienvenido ${user}` : 'Log in to get started'}
      </p>
      <img src="logo.png" alt="Logo" className="logo" />
    </>
  )
}

export default Welcome
