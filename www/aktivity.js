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

var up = document.getElementById("up_restaurace");
var downarrow = document.getElementById("down_restaurace");
var myScrollFunc = function () {
        if(window.innerWidth>600){
              
                var y = window.scrollY;
                if (y >= 200) {
                        up.style.display = "block";
                
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



var currentuvod=0; 
var totaluvod=3; 
var imageuvod = document.getElementById("uvod1");
var imagesuvod = ["https://galerie.ulidmanu.cz/uvod/uvod1.webp","https://galerie.ulidmanu.cz/uvod/uvod2.webp","https://galerie.ulidmanu.cz/uvod/uvod3.webp" ,"https://galerie.ulidmanu.cz/uvod/uvod4.webp",]

window.addEventListener('load', (event) => {
        if(imageuvod!=null){
                imageuvod.src = imagesuvod[currentuvod];
                setInterval(function changeImage(){
                currentuvod++;
                if(currentuvod>totaluvod){
                        currentuvod = 0;
                }
                if(window.innerWidth>600)
                        imageuvod.src = imagesuvod[currentuvod];
                else
                        imageuvod.src = imagesuvodmobil[currentuvod];
                }, 2500); 
        }
});


var currentrestaurace=0; 
var imagerestaurace = document.getElementById("restaurace1");
var imagesrestaurace = ["https://galerie.ulidmanu.cz/restaurace/restaurace2.webp","https://galerie.ulidmanu.cz/restaurace/restaurace3.webp" ,"https://galerie.ulidmanu.cz/restaurace/restaurace4.webp","https://galerie.ulidmanu.cz/restaurace/restaurace5.webp","https://galerie.ulidmanu.cz/restaurace/restaurace1.webp","https://galerie.ulidmanu.cz/restaurace/br1733.webp","https://galerie.ulidmanu.cz/restaurace/007_HZ6_4294_Setkani_U_Lidmanu_MASJABLON_podzim22.webp","https://galerie.ulidmanu.cz/restaurace/010_HZ6_4311_Setkani_U_Lidmanu_MASJABLON_podzim22.webp"]
var totalrestaurace=imagesrestaurace.length-1; 
window.addEventListener('load', (event) => {
        if(imagerestaurace!=null){
                imagerestaurace.src = imagesrestaurace[currentuvod];
                setInterval(function changeImage(){
                currentrestaurace++;
                if(currentrestaurace>totalrestaurace){
                        currentrestaurace = 0;
                }
                imagerestaurace.src = imagesrestaurace[currentrestaurace];
                }, 2500); 
        }
});

var currentubytovani=0; 
var totalubytovani=6; 
var imageubytovani = document.getElementById("ubytovani1");
var imagesubytovani = ["https://galerie.ulidmanu.cz/ubytovani/ubytovani2.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani3.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani4.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani5.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani6.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani7.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani1.webp"]
window.addEventListener('load', (event) => {
        if(imageubytovani!=null){
                imageubytovani.src = imagesubytovani[currentuvod];
                setInterval(function changeImage(){
                currentubytovani++;
                if(currentubytovani>totalubytovani){
                        currentubytovani = 0;
                }
                imageubytovani.src = imagesubytovani[currentubytovani];
                }, 2500); 
        }
});


var currentsvatba=0; 
var totalsvatba=7; 
var imagesvatba = document.getElementById("svatba1");
var imagessvatba = ["https://galerie.ulidmanu.cz/svatba/svatba3.webp","https://galerie.ulidmanu.cz/svatba/svatba4.webp","https://galerie.ulidmanu.cz/svatba/svatba5.webp","https://galerie.ulidmanu.cz/svatba/svatba6.webp","https://galerie.ulidmanu.cz/svatba/svatba7.webp","https://galerie.ulidmanu.cz/svatba/svatba8.webp","https://galerie.ulidmanu.cz/svatba/svatba9.webp","https://galerie.ulidmanu.cz/svatba/svatba1.webp"]
window.addEventListener('load', (event) => {
        if(imagesvatba!=null){
                imagesvatba.src = imagessvatba[currentuvod];
                setInterval(function changeImage(){
                currentsvatba++;
                if(currentsvatba>totalsvatba){
                        currentsvatba = 0;
                }
                imagesvatba.src = imagessvatba[currentsvatba];
                }, 2500);    
        }
        
});


var currentjablon=0; 
var totaljablon=3; 
var imagejablon = document.getElementById("jablon1");
var imagesjablon = ["https://galerie.ulidmanu.cz/jablon/jablon2.webp","https://galerie.ulidmanu.cz/jablon/jablon3.webp","https://galerie.ulidmanu.cz/jablon/jablon4.webp","https://galerie.ulidmanu.cz/jablon/jablon1.webp"]
window.addEventListener('load', (event) => {
        if(imagejablon!=null){
                setInterval(function changeImage(){
                currentjablon++;
                if(currentjablon>totaljablon){
                        currentjablon = 0;
                }
                imagejablon.src = imagesjablon[currentjablon];
                }, 2500); 
        }
});



