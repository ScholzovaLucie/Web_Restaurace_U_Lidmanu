var img1 = document.getElementById("balicek1img");
var img2 = document.getElementById("balicek2img");
var img3 = document.getElementById("balicek3img");

var balicek1 = document.getElementById("balicek1");
var balicek2 = document.getElementById("balicek2");
var balicek3 = document.getElementById("balicek3");

var balicky = document.getElementById("balicky");

balicek1.addEventListener("click", (event) => {
  balicekclicked(event);
});

balicek2.addEventListener("click", (event) => {
  balicekclicked(event);
});

balicek3.addEventListener("click", (event) => {
  balicekclicked(event);
});

function balicekclicked(event) {
  var id = event.currentTarget.id;
  var rozbaleno;

  if (id == "balicek1") {
    rozbaleno = document.getElementById("balicek1Rozbaleno");
    close("balicek2", "balicek2Rozbaleno");
    close("balicek3", "balicek3Rozbaleno");
  } else if (id == "balicek2") {
    rozbaleno = document.getElementById("balicek2Rozbaleno");
    close("balicek1", "balicek1Rozbaleno");
    close("balicek3", "balicek3Rozbaleno");
  } else if (id == "balicek3") {
    rozbaleno = document.getElementById("balicek3Rozbaleno");
    close("balicek2", "balicek2Rozbaleno");
    close("balicek1", "balicek1Rozbaleno");
  }

  event.currentTarget.classList.add("active");

  document.getElementById("balicek1").classList.add("zmensen");
  document.getElementById("balicek2").classList.add("zmensen");
  document.getElementById("balicek3").classList.add("zmensen");

  document.getElementById("balicky").classList.add("zmensen");


  rozbaleno.style.display = "grid";
  rozbaleno.style.opacity = "1";
  rozbaleno.classList.add("active");


  if (window.innerWidth < 1000) {
    document.getElementById("balicek1p").innerText = "Verlängertes Wochenende";
    document.getElementById("balicek2p").innerText = "Fünftägiger Aufenthalt";
    document.getElementById("balicek3p").innerText = "Eine Woche Urlaub";
  } else {
    document.getElementById("balicek1p").innerText =
      "Ein längeres Wochenende in der Stolové Hory ";
    document.getElementById("balicek2p").innerText =
      "Fünftägiger Touristen-und Besichtigungsaufenthalt in der Machovsko Region";
    document.getElementById("balicek3p").innerText =
      "Eine Woche Urlaub in der Broumovsko Region";
  }

}

function closeBalicek() {
  document.getElementById("balicky").classList.remove("zmensen");

  close("balicek1", "balicek1Rozbaleno");
  close("balicek2", "balicek2Rozbaleno");
  close("balicek3", "balicek3Rozbaleno");

  if (window.innerWidth < 1000) {
    document.getElementById("balicek1p").innerText =
      "Ein längeres Wochenende in der Stolové Hory (auf Deutsch bekannt als das Heuscheuergebirge)";
    document.getElementById("balicek2p").innerText =
      "Fünftägiger Touristen- und Besichtigungsaufenthalt in der Machovsko Region";
    document.getElementById("balicek3p").innerText =
      "Eine Woche Urlaub in der Broumovsko Region";
  } else {
    document.getElementById("balicek1p").innerText =
      "Ein längeres Wochenende in der Stolové Hory (auf Deutsch bekannt als das Heuscheuergebirge)";
    document.getElementById("balicek2p").innerText =
      "Fünftägiger Touristen- und Besichtigungsaufenthalt in der Machovsko Region";
    document.getElementById("balicek3p").innerText =
      "Eine Woche Urlaub in der Broumovsko Region";
  }

  
}

function close(nameBalicek, nameRozbaleno){
  if(nameBalicek){
    document.getElementById(nameBalicek).classList.remove("zmensen");
    document.getElementById(nameBalicek).classList.remove("active");
  }
  if(nameRozbaleno){
    document.getElementById(nameRozbaleno).style.display = "none";
    document.getElementById(nameRozbaleno).style.opacity = "0";
  }
  
}
