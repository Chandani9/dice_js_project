var randomNumber1 = Math.floor(math.randome() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice 1-6

var randomImageSource = "images/" + randomDiceImage; //iamges dice1.png to dice6 to png change source attribute

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML ="PLAYER1 WINS";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="PLAYER2 WINS";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
