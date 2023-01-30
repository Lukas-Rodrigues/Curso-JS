//inserir no bdody

var novoParagrafo = document.createElement("p")
var texto = document.createTextNode("Testeeeeeeee");
novoParagrafo.appendChild(texto)

console.log(novoParagrafo)

var body = document.querySelector('body')
body.appendChild(novoParagrafo)
