//função

function soma(a, b) {
  return a + b
}

console.log(soma(1, 3))

//escopo de função

let y = 10

function testEscopo() {
  let y = 24
  console.log(`escopo dentro da função é:  ${y}`)
}
testEscopo()

console.log(`y fora da função é: ${y} `)

//arrow function

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Número par")
    return
  }
  console.log("Impar")
}

parOuImpar(1)
parOuImpar(4)

//arrow function resumida

const raizQuadrada = (x) => x * x
console.log(raizQuadrada(4))

//recursividade

const untilTen = (n, m) => {
  if (n < 10) {
    console.log("a função parou de executar")
  } else {
    const x = n - m
    console.log(x)
    untilTen(x, m)
  }
}
untilTen(100, 7)

function factorial(x) {
  if (x === 0) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}
const num = 6
const result = factorial(num)
console.log(result)
