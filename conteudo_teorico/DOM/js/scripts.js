console.log(document.body)

const listItems = document.getElementsByTagName("li")
console.log(listItems)

const title = document.getElementById("title")
console.log(title)

const classe = document.getElementsByClassName("product")
console.log(classe)

const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
  console.log("Clicou aqui")
})

document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla: ${e.key}`)
})
