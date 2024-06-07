
var currentrestaurace=0; 
var imagerestaurace = document.getElementById("uvod_restaurace");
var imagesrestaurace = ["https://galerie.ulidmanu.cz/restaurace/restaurace2.webp","https://galerie.ulidmanu.cz/restaurace/restaurace3.webp" ,"https://galerie.ulidmanu.cz/restaurace/restaurace4.webp","https://galerie.ulidmanu.cz/restaurace/restaurace5.webp","https://galerie.ulidmanu.cz/restaurace/restaurace1.webp","https://galerie.ulidmanu.cz/restaurace/br1733.webp","https://galerie.ulidmanu.cz/restaurace/007_HZ6_4294_Setkani_U_Lidmanu_MASJABLON_podzim22.webp","https://galerie.ulidmanu.cz/restaurace/010_HZ6_4311_Setkani_U_Lidmanu_MASJABLON_podzim22.webp"]
var totalrestaurace=imagesrestaurace.length-1; 
window.addEventListener('load', (event) => {
        if(imagerestaurace!=null){
                imagerestaurace.src = imagesrestaurace[currentrestaurace];
                setInterval(function changeImage(){
                        currentrestaurace++;
                if(currentrestaurace>totalrestaurace){
                        currentrestaurace = 0;
                }
                imagerestaurace.src = imagesrestaurace[currentrestaurace];
                
                }, 2500); 
        }
});