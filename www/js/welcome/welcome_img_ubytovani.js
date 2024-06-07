var currentubytovani=0; 
var totalubytovani=6; 
var imageubytovani = document.getElementById("uvod_ubytovani");
var imagesubytovani = ["galerie/ubytovani/ubytovani2.webp","galerie/ubytovani/ubytovani3.webp","galerie/ubytovani/ubytovani4.webp","galerie/ubytovani/ubytovani5.webp","galerie/ubytovani/ubytovani6.webp","galerie/ubytovani/ubytovani7.webp","galerie/ubytovani/ubytovani1.webp"]
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