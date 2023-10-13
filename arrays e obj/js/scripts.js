//arrays
const list = [1, 4, 6, 2, 4]

//propriedades

const numbers = [5, 3, 1]

console.log(numbers.length)
console.log(numbers["length"])
console.log(numbers[2])

//loop em array
const random = [1, 3, 56, 8, 4, 76, 5]

for (let i = 0; i < random.length; i++) {
  const element = random[i]
  console.log(element)
}

//json

const myJson = '{"name": "John", "age": 25, "skills: ["C#","Github","Ubuntu"]}'
console.log(myJson)
console.log(typeof myJson)

//classes basicas

const cachorro = {
  raca: null,
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor alemão"

//função como classe

function criarCachorro(nome, raca) {
  const cachorro = Object.create({})
  cachorro.nome = nome
  cachorro.raca = raca

  return cachorro
}

const bob = criarCachorro("bob", "vira lata")

class dog {
  constructor(nome, raca) {
    this.nome = nome
    this.raca = raca
  }
}

const jeff = new dog("thor", "pinscher")
console.log(jeff)