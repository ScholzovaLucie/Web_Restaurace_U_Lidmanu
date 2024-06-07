
var currentuvod=0; 
var totaluvod=3; 
var imageuvod = document.getElementById("uvod_onas");
var imagesuvod = ["https://galerie.ulidmanu.cz/uvod/uvod1.webp","https://galerie.ulidmanu.cz/uvod/uvod2.webp","https://galerie.ulidmanu.cz/uvod/uvod3.webp" ,"https://galerie.ulidmanu.cz/uvod/uvod4.webp",]

window.addEventListener('load', (event) => {
        if(imageuvod!=null){
                imageuvod.src = imagesuvod[currentuvod];
                setInterval(function changeImage(){
                currentuvod++;
                if(currentuvod>totaluvod){
                        currentuvod = 0;
                }
                imageuvod.src = imagesuvod[currentuvod];
                
                }, 2500); 
        }
});