var pocetBalicek1 = 1;
var pocetBalicek2 = 1;
var pocetBalicek3 = 1;

var img1 = document.getElementById("balicek1img");
var img2 = document.getElementById("balicek2img");
var img3 = document.getElementById("balicek3img");

var balicek1 = document.getElementById("balicek1");
var balicek2 = document.getElementById("balicek2");
var balicek3 = document.getElementById("balicek3");

var rozbaleno1 = document.getElementById("balicek1Rozbaleno");
var rozbaleno2 = document.getElementById("balicek2Rozbaleno");
var rozbaleno3 = document.getElementById("balicek3Rozbaleno");

var balicekClose = document.getElementById("balickyCLose");

var balicky = document.getElementById("balicky");

function balicekclicked(cislo){

   balicekClose.style.display = "block";

   var localbalicekactive;
   var localbalicek2;
   var localbalicek3;

   var localrozbalenoactive;
   var localrozbaleno2;
   var localrozbaleno3;

   balicek1.style.height = "8vh";
   balicek2.style.height = "8vh";
   balicek3.style.height = "8vh";

   switch(cislo) {
      case 1:
         localbalicekactive = balicek1;
         localbalicek2 = balicek2;
         localbalicek3 = balicek3;
            
         localrozbalenoactive = rozbaleno1;
         localrozbaleno2 = rozbaleno2;
         localrozbaleno3 = rozbaleno3;
        break;
      case 2:
         localbalicekactive = balicek2;
         localbalicek2 = balicek1;
         localbalicek3 = balicek3;
            
         localrozbalenoactive = rozbaleno2;
         localrozbaleno2 = rozbaleno1;
         localrozbaleno3 = rozbaleno3;
        break;
      case 3:
         localbalicekactive = balicek3;
         localbalicek2 = balicek1;
         localbalicek3 = balicek2;
            
         localrozbalenoactive = rozbaleno3;
         localrozbaleno2 = rozbaleno2;
         localrozbaleno3 = rozbaleno1;
         break;
   } 

      if(window.innerWidth<1000){
         document.getElementById("balicek1p").innerText= "Verlängertes Wochenende";
         document.getElementById("balicek2p").innerText= "Fünftägiger Aufenthalt";
         document.getElementById("balicek3p").innerText= "Eine Woche Urlaub"; 
      }
      else{
         document.getElementById("balicek1p").innerText= "Ein längeres Wochenende in der Stolové Hory ";
         document.getElementById("balicek2p").innerText= "Fünftägiger Touristen-und Besichtigungsaufenthalt in der Machovsko Region";
         document.getElementById("balicek3p").innerText= "Eine Woche Urlaub in der Broumovsko Region"; 
      }

      if(window.innerWidth>600){
         img1.style.height = "0%";
         img2.style.height = "0%";
         img3.style.height = "0%";

         localbalicekactive.style.top = "27vh";
         localbalicek2.style.top = "27vh";
         localbalicek3.style.top = "27vh";

         localbalicekactive.style.fontSize = "2.5vh";
         localbalicek2.style.fontSize = "2.5vh";
         localbalicek3.style.fontSize = "2.5vh";

         localbalicekactive.style.color = "#4b6b85";
         localbalicek2.style.color = "#000000";
         localbalicek3.style.color = "#000000";

         localrozbalenoactive.style.display = "block";
         localrozbaleno2.style.display = "none";
         localrozbaleno3.style.display = "none";

         localrozbalenoactive.style.opacity = "1";
         localrozbaleno2.style.opacity = "0";
         localrozbaleno3.style.opacity = "0";

         localbalicekactive.style.backgroundColor = "#9eb5c9a6";   
         localbalicek2.style.backgroundColor = "#9eb5c94b"; 
         localbalicek3.style.backgroundColor = "#9eb5c94b";

         balicek1.style.left= "0vw";
         balicek2.style.left= "38vw";
         balicek3.style.right= "0vw";

      }else{
         localbalicekactive.style.color = "#4b6b85";
         localbalicek2.style.color = "#000000";
         localbalicek3.style.color = "#000000";

         localbalicekactive.style.backgroundColor = "#9eb5c9a6";   
         localbalicek2.style.backgroundColor = "#9eb5c94b"; 
         localbalicek3.style.backgroundColor = "#9eb5c94b"; 

         localbalicekactive.style.width= "30vw";
         localbalicek2.style.width= "30vw";
         localbalicek3.style.width= "30vw";

         localbalicekactive.style.height= "5vh";
         localbalicek2.style.height= "5vh";
         localbalicek3.style.height= "5vh";

         localrozbalenoactive.style.display = "block";
         localrozbaleno2.style.display = "none";
         localrozbaleno3.style.display = "none";

         localrozbalenoactive.style.opacity = "1";
         localrozbaleno2.style.opacity = "0";
         localrozbaleno3.style.opacity = "0";

         localbalicekactive.style.fontSize= "1.8vh";
         localbalicek2.style.fontSize= "1.8vh";
         localbalicek3.style.fontSize= "1.8vh";

         balicky.style.flexDirection = "row";
         balicky.style.width = "90vw";
         balicky.style.marginTop = "10vh";
         balicky.style.marginLeft = "0vw";

         img1.style.height = "0%";
         img2.style.height = "0%";
         img3.style.height = "0%";
      }
   }



function closeBalicek(){
   balicekClose.style.display = "none";

   if(window.innerWidth<1000){
      document.getElementById("balicek1p").innerText= "Ein längeres Wochenende in der Stolové Hory (auf Deutsch bekannt als das Heuscheuergebirge)";
         document.getElementById("balicek2p").innerText= "Fünftägiger Touristen- und Besichtigungsaufenthalt in der Machovsko Region";
         document.getElementById("balicek3p").innerText= "Eine Woche Urlaub in der Broumovsko Region"; 
   } 
   else{
      document.getElementById("balicek1p").innerText= "Ein längeres Wochenende in der Stolové Hory (auf Deutsch bekannt als das Heuscheuergebirge)";
         document.getElementById("balicek2p").innerText= "Fünftägiger Touristen- und Besichtigungsaufenthalt in der Machovsko Region";
         document.getElementById("balicek3p").innerText= "Eine Woche Urlaub in der Broumovsko Region"; 
   }

   rozbaleno1.style.display = "none";
   rozbaleno1.style.display = "none";
   rozbaleno1.style.display = "none";

   rozbaleno1.style.opacity = "0";
   rozbaleno2.style.opacity = "0";
   rozbaleno3.style.opacity = "0";

   if(window.innerWidth>600){
      balicek1.style.top= "35vh";
      balicek2.style.top= "35vh";
      balicek3.style.top= "35vh";
   
      balicek1.style.left= "5vw";
      balicek2.style.left= "38vw";
      balicek3.style.right= "5vw";
   
      balicek1.style.width= "23vw";
      balicek2.style.width= "23vw";
      balicek3.style.width= "23vw";
   
      balicek1.style.height= "45vh";
      balicek2.style.height= "45vh";
      balicek3.style.height= "45vh";
   
      balicek1.style.color = "#000000";
      balicek2.style.color = "#000000";
      balicek3.style.color = "#000000";
   
      balicek1.style.fontSize = "1.5vw";
      balicek2.style.fontSize = "1.5vw";
      balicek3.style.fontSize = "1.5vw";
   
      balicek1.style.zIndex = "1500";
      balicek2.style.zIndex = "1500";
      balicek3.style.zIndex = "1500";
   
      balicek1.style.backgroundColor = "#9eb5c94b";   
      balicek2.style.backgroundColor = "#9eb5c94b"; 
      balicek3.style.backgroundColor = "#9eb5c94b"; 
   
      img1.style.height = "100%";
      img2.style.height = "100%";
      img3.style.height = "100%";
   }
   else{  
      img1.style.height = "100%";
      img2.style.height = "100%";
      img3.style.height = "100%";

      balicek1.style.width= "70vw";
      balicek2.style.width= "70vw";
      balicek3.style.width= "70vw";
   
      balicek1.style.height= "26vh";
      balicek2.style.height= "26vh";
      balicek3.style.height= "26vh";
   
      balicek1.style.color = "#000000";
      balicek2.style.color = "#000000";
      balicek3.style.color = "#000000";
   
      balicek1.style.fontSize = "18px";
      balicek2.style.fontSize = "18px";
      balicek3.style.fontSize = "18px";
   
      balicek1.style.zIndex = "1500";
      balicek2.style.zIndex = "1500";
      balicek3.style.zIndex = "1500";
   
      balicek1.style.backgroundColor = "#9eb5c94b";   
      balicek2.style.backgroundColor = "#9eb5c94b"; 
      balicek3.style.backgroundColor = "#9eb5c94b"; 

      balicky.style.flexDirection = "column";
      balicky.style.width = "90vw";
      balicky.style.marginTop = "20vw";
      balicky.style.marginLeft = "5vw";
   }

   
}

