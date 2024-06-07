
var currentsvatba=0; 
var totalsvatba=7; 
var imagesvatba = document.getElementById("uvod_svatby");
var imagessvatba = ["https://galerie.ulidmanu.cz/svatba/svatba3.webp","https://galerie.ulidmanu.cz/svatba/svatba4.webp","https://galerie.ulidmanu.cz/svatba/svatba5.webp","https://galerie.ulidmanu.cz/svatba/svatba6.webp","https://galerie.ulidmanu.cz/svatba/svatba7.webp","https://galerie.ulidmanu.cz/svatba/svatba8.webp","https://galerie.ulidmanu.cz/svatba/svatba9.webp","https://galerie.ulidmanu.cz/svatba/svatba1.webp"]
window.addEventListener('load', (event) => {
        if(imagesvatba!=null){
                imagesvatba.src = imagessvatba[currentsvatba];
                setInterval(function changeImage(){
                currentsvatba++;
                if(currentsvatba>totalsvatba){
                        currentsvatba = 0;
                }
                imagesvatba.src = imagessvatba[currentsvatba];
                }, 2500);    
        }
        
});