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
