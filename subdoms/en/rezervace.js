document.getElementById("date_od").addEventListener("click", function() {
    var input1 = document.getElementById("date_od");
    var input2 = document.getElementById("date_do"); 
    if(input1!=null){
        input2.disabled = false;
    }
    else{
        input2.disabled = true;
    }
  });
