//variaveis
let nome = "John"
console.log(nome)

const idade = 31
//const não tem seu valor alterado

//nomes inválidos de variaveis
// let 2teste = "invalido"
// let @teste = "invalido"

let a = 10,
  b = 20,
  c = 30

console.log(a, b, c)
//nomes permitidos de variaveis
let _teste = "ok"
let $teste = "Ok"

//prompt

//const age = prompt("Digite sua idade: ")
//console.log("você tem " + age + " anos")

//alert

//alert("Clica para fechar")

//math

console.log(Math.max(5, 2, 5, 11, 64, 2))

console.log(Math.floor(5.13))
//console

console.log("log exibe mensagens na console")
console.error("erro!")
console.warn("warm da um aviso na console")

//estruturas de controle

const age = prompt("digite sua idade; ")
if (age >= 18) {
  console.log("Você tem 18 anos ou mais!")
} else {
  console.log("Você tem menos de 18 anos!")
}
