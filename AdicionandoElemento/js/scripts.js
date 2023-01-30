var el = document.createElement("div");
el.classList = "divCriada";
var container = document.querySelector('#container')

//inserindo elemento fihlo
container.appendChild(el)

//inserindo antes
var el2 = document.createElement("div");
el2.classList = "div-before";
var el3 = document.querySelector('#container .divCriada')
container.insertBefore(el2,el3)