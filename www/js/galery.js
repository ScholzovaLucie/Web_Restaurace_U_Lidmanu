var open = 0

function close_galery(){
        resetGalery()
        document.getElementById("close_btn").style.display = "none";   
        document.getElementById("hlavni_strana").style.display = 'flex';
        open = 0
}

function resetGalery(){
        document.getElementById("close_btn").style.display = "flex";   

        document.getElementById("hlavni_prvni").style.boxShadow = "none";
        document.getElementById("hlavni_druhy").style.boxShadow = "none";
        document.getElementById("hlavni_treti").style.boxShadow = "none";
        document.getElementById("hlavni_ctvrty").style.boxShadow = "none";

        var elements = document.getElementsByClassName("galerie_velky");
        for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
        }
}

function small(){
        if(open==0){
                document.getElementById("hlavni_strana").style.display = 'none';
                open = 1    
        } 
}

function kamPrijdete(jazyk){
        small()
        resetGalery();
        document.getElementById("gallery_prvni").style.display = "flex";
}

function kdeSeVyspite(jazyk){
        small()
        resetGalery();
        document.getElementById("gallery_druhy").style.display = "flex";     
}

function KdeSeNajite(jazyk){
        small()
        resetGalery();
        document.getElementById("gallery_treti").style.display = "flex";        
}

function ANO(jazyk){  
        small()
        resetGalery();
        document.getElementById("gallery_ctvrty").style.display = "flex";    
}