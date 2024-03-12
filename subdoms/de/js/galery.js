var open = 0

function close_galery(){
        resetGalery()
        document.getElementById("close_btn").style.display = "none";   
        document.getElementById("galerie_prvni").id = "hlavni_strana";
        open = 0
}

function resetGalery(){
        document.getElementById("close_btn").style.display = "flex";   

        document.getElementById("hlavni_prvni").style.boxShadow = "none";
        document.getElementById("hlavni_druhy").style.boxShadow = "none";
        document.getElementById("hlavni_treti").style.boxShadow = "none";
        document.getElementById("hlavni_ctvrty").style.boxShadow = "none";

        document.getElementById("gallery_prvni").style.display = "none";
        document.getElementById("gallery_druhy").style.display = "none";
        document.getElementById("gallery_treti").style.display = "none";
        document.getElementById("gallery_ctvrty").style.display = "none";

}

function small(){
        if(open==0){
                document.getElementById("hlavni_strana").id = "galerie_prvni";
                open = 1    
        } 
}

function kamPrijdete(jazyk){
        small()
        resetGalery();
        document.getElementById("hlavni_prvni").style.boxShadow = "9px 9px 21px 7px rgba(0,0,0,0.70)";
        document.getElementById("gallery_prvni").style.display = "flex";
}

function kdeSeVyspite(jazyk){
        small()
        resetGalery();
        document.getElementById("hlavni_druhy").style.boxShadow = "9px 9px 21px 7px rgba(0,0,0,0.70)";
        document.getElementById("gallery_druhy").style.display = "flex";     
}

function KdeSeNajite(jazyk){
        small()
        resetGalery();
        document.getElementById("hlavni_treti").style.boxShadow = "9px 9px 21px 7px rgba(0,0,0,0.70)";
        document.getElementById("gallery_treti").style.display = "flex";        
}

function ANO(jazyk){  
        small()
        resetGalery();
        document.getElementById("hlavni_ctvrty").style.boxShadow = "9px 9px 21px 7px rgba(0,0,0,0.70)";
        document.getElementById("gallery_ctvrty").style.display = "flex";    
}