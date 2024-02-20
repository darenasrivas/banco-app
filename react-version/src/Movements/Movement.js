import './Movement.css'

// Por destructuración, recibimos el campo position y amount. En lugar de todo con props
function Movement({ position, amount }) {
  const type = amount > 0 ? 'deposit' : 'withdrawal'
  return (
    <div className="movements__row">
      <div className={`movements__type movements__type--${type}`}>
        {/* Posicion empieza en 0 */}
        {position + 1} {type}
      </div>
      <div className="movements__date">3 days ago</div>
      <div className="movements__value">{amount}€</div>
    </div>
  )
}

export default Movement
