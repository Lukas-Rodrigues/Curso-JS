var btn = document.querySelector("#btn");
console.log(btn);

// vai passar o tipo do evento e uma callback
btn.addEventListener("click", function(){
    console.log("Clicouuu")
    this.style.color = "red"
})

//click afetando outros elementos

var btn2 = document.querySelector("#sumir");
btn2.addEventListener("click",function(){
    var title = document.querySelector("#title")
    setTimeout(function(){
        title.style.display = "none";
    },1000)
    
    setTimeout(function(){
        title.style.display = "";
    },1000)
});


//double click
var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("dbclick",function () {
    console.log("click Duplooooo")
})