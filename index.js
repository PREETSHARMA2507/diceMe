
var random=Math.random();
var value1=Math.floor((random*6)+1);
if(value1===5){
    document.querySelector(".img1").src="./images/dice5.png";
}
else if(value1===2){
    document.querySelector(".img1").src="./images/dice2.png";

}
else if(value1===3){
    document.querySelector(".img1").src="./images/dice3.png";
}
else if(value1===4){
    document.querySelector(".img1").src="./images/dice4.png";
}
else if(value1===6){
    document.querySelector(".img1").src="./images/dice6.png";
}
else if(value1===1){
    document.querySelector(".img1").src="./images/dice1.png";
}
var n=Math.random();
var value2=Math.floor((n*6)+1);
{
    if(value2===5){
        document.querySelector(".img1").src="./images/dice5.png";
    }
    else if(value2===2){
        document.querySelector(".img2").src="./images/dice2.png";
    
    }
    else if(value2===3){
        document.querySelector(".img2").src="./images/dice3.png";
    }
    else if(value2===4){
        document.querySelector(".img2").src="./images/dice4.png";
    }
    else if(value2===6){
        document.querySelector(".img2").src="./images/dice6.png";
    }
    else if(value2===1){
        document.querySelector(".img2").src="./images/dice1.png";
    }
}
    if(value1>value2){
        document.querySelector(".wining-text").innerHTML="PLAYER 1 WINS 🚩";
    }
    else if(value1===value2){
        document.querySelector(".wining-text").innerHTML="TIE-UP 😒";

    }
    else{
        document.querySelector(".wining-text").innerHTML="PLAYER 2 WINS 🚩";
    
    }