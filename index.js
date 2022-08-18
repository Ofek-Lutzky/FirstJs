function generateRandom(){
    var num1To6 = Math.floor(Math.random()*6) +1 ;
    return num1To6;
}


var rnd1 = generateRandom();
var newImg1 = "images/dice" + rnd1 + ".png";

var rnd2 = generateRandom();
var newImg2 = "images/dice" + rnd2 + ".png";


// var image1 =  document.querySelectorAll("img")[0]; we could put the same class and use it this way
// image1.setAttribute("src" , newImg1);change the src in other way

document.querySelector(".img1").src = newImg1;
document.querySelector(".img2").src = newImg2;


if (rnd1 > rnd2){
    document.querySelector("h1").innerHTML = '🏁 Player 1 Wins!';
}
else if (rnd2 > rnd1){
    document.querySelector("h1").innerHTML = 'Player 2 Wins! 🏁';
}
else{
    document.querySelector("h1").innerHTML = 'Draw!';
}