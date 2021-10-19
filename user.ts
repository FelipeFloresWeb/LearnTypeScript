// Exemplo de uso em game
type accountInfo = {
  id: number,
  name: string,
  email?: string // (?) = optional
}

const account: accountInfo = {
  id: 123,
  name: 'felipe',
  email: 'felipe@gmail.com'
}

type charInfo = {
  nickName: string,
  level: number
}

const char:charInfo = {
  nickName: 'Ednirug',
  level: 1
}

// Intersection--------------------------------------------------------------------------------------
type playerInfo = accountInfo & charInfo;

const player: playerInfo = {
  id: 1,
  name: 'Felipe',
  nickName: 'Ednirug',
  level: 1,
  email: 'felipe@gmail.com'
}