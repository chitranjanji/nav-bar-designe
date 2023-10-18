var menu = document.querySelector("#menu")
var  load = document.querySelector("#load")
var line1 = document.querySelector("#line1")
var line2 = document.querySelector("#line2")
var line3 = document.querySelector("#line3")

var flag = 0
menu.addEventListener("click",function(){
    if(flag==0){
        load.style.top ="10%"
        line1.style.rotate ="50deg"
        line1.style.transformOrigin ="0% 0%"
        line3.style.rotate ="-55deg"
        line3.style.transformOrigin ="0% 0%"
        line2.style.opacity ="0"
        flag = 1

    }else{
        load.style.top ="-100%"
        line1.style.rotate ="0deg"
        line1.style.transformOrigin ="0% 0%"
        line3.style.rotate ="0deg"
        line3.style.transformOrigin ="0% 0%"
        line2.style.opacity ="1"
        flag = 0
    }
})