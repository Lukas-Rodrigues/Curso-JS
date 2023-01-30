//criar um elemento

var el = document.createElement("h3")
el.classList = "testando classe"
var text = document.createTextNode("testandooo")
el.appendChild(text)


//selecionar elemento que quero trocar
var title = document.querySelector("#title")
console.log(title)

//selecionar o pai do el
var pai = title.parentNode;

//trocar os elementos de fato
pai.removeChild(el,title)