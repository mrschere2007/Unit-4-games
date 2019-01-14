$(document).ready(function(){
    var randomNumber  = Math.floor(Math.random() * 70) + 50;
    $("#randomNumber").text(randomNumber);
    console.log("test")

    var totalNumber = 0;
    $("#totalNumber").text(totalNumber);

    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;

    var win = + 1;
    var losses = + 1;  

     

    $("#crystal1").click(function(){
        totalNumber = totalNumber + crystal1;
        $("#totalNumber").text(totalNumber);
    });

    $("#crystal2").click(function(){
        totalNumber = totalNumber + crystal2;
        $("#totalNumber").text(totalNumber);
    });

    $("#crystal3").click(function(){
        totalNumber = totalNumber + crystal3;
        $("#totalNumber").text(totalNumber);
    });

    $("#crystal4").click(function(){
        totalNumber = totalNumber + crystal4;
        $("#totalNumber").text(totalNumber);
    });

    document.onkeypress = function (event) {
       randomNumber = event.key;
        if (randomNumber === totalNumber) {
            wins++;
        } else {
        
          if ( randomNumber > totalNumber){
              losses++; 

          }
        }

    }


        

       


})