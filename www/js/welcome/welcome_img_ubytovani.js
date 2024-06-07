var currentubytovani=0; 
var totalubytovani=6; 
var imageubytovani = document.getElementById("uvod_ubytovani");
var imagesubytovani = ["https://galerie.ulidmanu.cz/ubytovani/ubytovani2.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani3.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani4.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani5.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani6.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani7.webp","https://galerie.ulidmanu.cz/ubytovani/ubytovani1.webp"]
window.addEventListener('load', (event) => {
        if(imageubytovani!=null){
                imageubytovani.src = imagesubytovani[currentubytovani];
                setInterval(function changeImage(){
                currentubytovani++;
                if(currentubytovani>totalubytovani){
                        currentubytovani = 0;
                }
                imageubytovani.src = imagesubytovani[currentubytovani];
                }, 2500); 
        }
});