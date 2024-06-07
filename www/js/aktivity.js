var pos = 0;
document.addEventListener("scroll", (event) => {
        pos = window.scrollY;
});

function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}


function down(){
        var high = window.innerHeight;
        var scrollTo = pos + high;
        document.body.scrollTop = scrollTo; 
        document.documentElement.scrollTop = scrollTo;          
}

var up = document.getElementById("up");
var downarrow = document.getElementById("down");
var myScrollFunc = function () {
        if(window.innerWidth>600){
              
                var y = window.scrollY;
                if (y >= 200) {
                        up.style.display = "flex";
                
                } else {
                        up.style.display = "none";
                } 

        }
       
    };
    
window.addEventListener("scroll", myScrollFunc);



function showNodes(element){
        if(window.innerWidth>600){
                document.getElementById("main").style.color = "#4b6b85"
                document.getElementById("left").style.display = "none";
                document.getElementById("menu").style.display = "none";
        
        }
}


function menoShow() {
       var z = document.getElementById("topnav");
        var main = document.getElementById("main");
        var o = document.getElementById("obrazky");
        if (z.style.display == "" || z.style.display == "none") {
               z.style.display = "flex";
               main.style.display = "none";
               o.style.display = "none";
        } else {
                z.style.display = "none";
                main.style.display = "block";
                o.style.display = "block";
        }
      } 



function menoSecondShow() {
        var z = document.getElementById("topnav");
        var left = document.getElementById("left");
        var pozadi = document.getElementById("pozadi");
        if (x.style.display == "none") {
                z.style.display = "none";
                pozadi.style.display = "none";
                left.style.display = "block";
        } else {
                z.style.display = "block";
                pozadi.style.display = "block";
                left.style.display = "none";
        }
        } 

function menoClose() {
        var z = document.getElementById("topnav");
        var main = document.getElementById("main");
        var o = document.getElementById("obrazky");
        if (z.style.display == "none") {
                z.style.display = "block";
                main.style.display = "none";
                o.style.display = "none";
        } else {
                main.style.display = "block";
                z.style.display = "none";
                o.style.display = "block";

        }
        } 



function menoSecondClose(){
        var y = document.getElementById("left");
        var z = document.getElementById("topnav");
        var o = document.getElementById("canceltopnav");
        if (x.style.display == "block") {
                y.style.display = "block";
                z.style.display = "block";
                o.style.display = "block";
        }   
    
}




