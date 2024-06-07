
var currentuvod=0; 
var totaluvod=3; 
var imageuvod = document.getElementById("uvod_onas");
var imagesuvod = ["galerie/uvod/uvod1.webp","galerie/uvod/uvod2.webp","galerie/uvod/uvod3.webp" ,"galerie/uvod/uvod4.webp",]

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