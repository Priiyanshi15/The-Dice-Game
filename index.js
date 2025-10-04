var score1 = Math.floor(6*Math.random()) + 1;
var score2 = Math.floor(6*Math.random()) + 1;
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
if(score1 === score2){
    document.querySelector("h1").innerHTML = "It's a draw!";
    document.querySelector(".image1 img");
    var newImage1 = document.querySelector(".image1 img");
    newImage1.src = images[score1 - 1];

    var newImage2 = document.querySelector(".image2 img");
    newImage2.src = images[score2 - 1];
}

else if(score1 > score2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
    var newImage1 = document.querySelector(".image1 img");
    newImage1.src = images[score1 - 1];

    var newImage2 = document.querySelector(".image2 img");
    newImage2.src = images[score2 - 1];
}

else{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
    var newImage1 = document.querySelector(".image1 img");
    newImage1.src = images[score1 - 1];
    
    var newImage2 = document.querySelector(".image2 img");
    newImage2.src = images[score2 - 1];
}