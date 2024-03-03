var pocetBalicek1 = 1;
var pocetBalicek2 = 1;
var pocetBalicek3 = 1;

var img1 = document.getElementById("balicek1img");
var img2 = document.getElementById("balicek2img");
var img3 = document.getElementById("balicek3img");

var balicek1 = document.getElementById("balicek1");
var balicek2 = document.getElementById("balicek2");
var balicek3 = document.getElementById("balicek3");

var balicekClose = document.getElementById("balickyCLose");

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
  balicekClose.style.display = "block";

  var id = event.currentTarget.id;
  var rozbaleno;

  if (id == "balicek1") {
    rozbaleno = document.getElementById("balicek1Rozbaleno");
  } else if (id == "balicek2") {
    rozbaleno = document.getElementById("balicek2Rozbaleno");
  } else if (id == "balicek3") {
    rozbaleno = document.getElementById("balicek3Rozbaleno");
  }

  event.currentTarget.classList.add("active");

  document.getElementById("balicek1").classList.add("zmensen");
  document.getElementById("balicek2").classList.add("zmensen");
  document.getElementById("balicek3").classList.add("zmensen");

  document.getElementById("balicky").classList.add("zmensen");


  rozbaleno.style.display = "flex";
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
  balicekClose.style.display = "none";

  document.getElementById("balicek1Rozbaleno").style.display = "none";
  document.getElementById("balicek2Rozbaleno").style.display = "none";
  document.getElementById("balicek3Rozbaleno").style.display = "none";
  document.getElementById("balicek1Rozbaleno").classList.remove("active");
  document.getElementById("balicek2Rozbaleno").classList.remove("active");
  document.getElementById("balicek3Rozbaleno").classList.remove("active");

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
