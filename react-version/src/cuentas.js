const account1 = {
  owner: 'Juan Sánchez',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'María Portazgo',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Estefanía Pueyo',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Javier Rodríguez',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

const createUserName = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner // Juan Sánchez
      .toLowerCase() // juan sánchez
      .split(' ') // Llevas la cadena a un array ['juan','sánchez']. name, es cada elemento.
      .map((name) => name[0]) // De cada campo, pillamos el primer caracter - 0. En este caso j, s. Toma el string como un array y pilla el 0
      .join('') // unimos la j y la s
  })
}

createUserName(accounts)

export default accounts
