
var currentsvatba=0; 
var totalsvatba=7; 
var imagesvatba = document.getElementById("uvod_svatby");
var imagessvatba = ["galerie/svatba/svatba3.webp","galerie/svatba/svatba4.webp","galerie/svatba/svatba5.webp","galerie/svatba/svatba6.webp","galerie/svatba/svatba7.webp","galerie/svatba/svatba8.webp","galerie/svatba/svatba9.webp","galerie/svatba/svatba1.webp"]
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