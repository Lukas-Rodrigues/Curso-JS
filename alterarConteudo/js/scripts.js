var title = document.querySelector("#title");
console.log(title);
//innerhtml
title.innerHTML = "testando o texto alterado"
console.log(title);

//textcontent - mais recomendado
var subtitle = document.querySelector(".subtitle");
console.log(subtitle);
subtitle.textContent = "Subtitulo alterado";