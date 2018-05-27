$(document).ready(function(){ 

     

var crystal={
    blue:
    {
        name:"Blue",
        value:0
    },
    green:
    {
        name:"Green",
        value:0
    },
    red:
    {
        name:"Red",
        value:0
    },
    yellow:
    {
        name:"Yellow",
        value:0
    }
};

var yourScore=0;
var targetScore=0;


var winCount=0;
var lossCount=0;

var getRandom=function(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

var startGame=function(){
    
yourScore=0;

targetScore=getRandom(19,120);



crystal.blue.value =  getRandom(1,12);
crystal.green.value = getRandom(1,12);
crystal.red.value = getRandom(1,12);
crystal.yellow.value = getRandom(1,12);



$("#yourScore").html(yourScore);
$("#targetScore").html(targetScore);


console.log("___________________________________");
console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value + "| green: " + crystal.green.value + "| red: " + crystal.red.value + "| yellow: " + crystal.yellow.value);
console.log("______________________________________");


}


var addValues =function(crystal){

    yourScore = yourScore + crystal.value;

    $("#yourScore").html(yourScore);

    checkWin();


    console.log("Your Score: " + yourScore);

}

var checkWin= function(){
    if(yourScore > targetScore){
        alert("You are a loser!")
        console.log("You lost");
        lossCount++;

        $("#lossCount").html(lossCount);
        startGame();
    }

    else if (yourScore == targetScore){
        alert("YOU ARE A WINNER!");
        console.log("You won");
        winCount++;

        $("#winCount").html(winCount);
        startGame();
    }


}





startGame();
$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#red").click(function() {
    addValues(crystal.red);
});
$("#green").click(function() {
    addValues(crystal.green);
});
$("#yellow").click(function() {
    addValues(crystal.yellow);
});


})
