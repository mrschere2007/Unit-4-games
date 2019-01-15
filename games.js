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

    var wins = 0;
    var losses = 0;  

     

    $("#crystal1").click(function(){
        totalNumber = totalNumber + crystal1;
        $("#totalNumber").text(totalNumber);
        checkWin();
    });

    $("#crystal2").click(function(){
        totalNumber = totalNumber + crystal2;
        $("#totalNumber").text(totalNumber);
        checkWin();
    });

    $("#crystal3").click(function(){
        totalNumber = totalNumber + crystal3;
        $("#totalNumber").text(totalNumber);
        checkWin();
    });

    $("#crystal4").click(function(){
        totalNumber = totalNumber + crystal4;
        $("#totalNumber").text(totalNumber);
        checkWin();
    });

    function checkWin() {
        if (randomNumber === totalNumber) {
            wins++;
            alert("You Win!");
            startGame();
        } else if (randomNumber < totalNumber){
            losses++; 
            alert("You Lose!");
            startGame();
        }
    }

    // Game starts over 
    function startGame(){
        var randomNumber  = Math.floor(Math.random() * 70) + 50;
        $("#randomNumber").text(randomNumber);
        console.log("test")
    
        var totalNumber = 0;
        $("#totalNumber").text(totalNumber);
    
        var crystal1 = Math.floor(Math.random() * 12) + 1;
        var crystal2 = Math.floor(Math.random() * 12) + 1;
        var crystal3 = Math.floor(Math.random() * 12) + 1;
        var crystal4 = Math.floor(Math.random() * 12) + 1;
    }
   


        

       


})