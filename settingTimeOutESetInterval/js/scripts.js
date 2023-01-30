//vai receber uma funçãodps de um tempo
//só vai executar uma vez só
setTimeout(function() {
    console.log("TEstando")
}, 5000);


//setinterval
//vai ficar executando a cada 6 segundos 
setInterval(function(){
    console.log("testando setInternal")
}, 6000)



//clearTimeOut
var x=0;
var myTime = setTimeout(function() {
    console.log("O x é 0")
}, 1500);
if(x>0){
    clearTimeout(myTime);
    console.log("O x passou de zero")
}

//clearSetintrval
var myInterval = setInterval(function() {
    console.log("imprimindo interval")
}, 500);

setTimeout(function() {
    console.log("não precisamos mais repetir")
    clearInterval(myInterval)
},1500)