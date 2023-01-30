// é ativado quando uma tecla é pressionada
document.addEventListener("keydown", function(event){
        
    //vai aparecer as teclas que o usuario digitou
    //se o usuario permanecer clicando vai rodar infinitas vezes
    
    if(event.key == "Enter"){
        console.log("apertou o enter")
    }else{
        console.log(event.key);
    }
})
//keyup - só vai rodar uma vez
document.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        console.log("soltou o enter")
    }else{
        console.log(e.key);
    }
})