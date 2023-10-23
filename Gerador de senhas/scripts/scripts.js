//seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")
//funções
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () =>{
  const symbols = "!@#$%¨&*():{}[],|=+-_"
  return symbols[Math.random()*symbols.length]
}
//eventos
generatePasswordButton.addEventListener("click", () => {})
