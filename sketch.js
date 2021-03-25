var database;

var bgImg;

function preload(){
  bgImg = loadImage("Images/Hot Air Ballon-01.png");
  hotAirBalloon = loadAnimation("Images/Hot Air Ballon-02.png","Images/Hot Air Ballon-03.png",
  "Images/Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(1100,700);
  database = firebase.database();
}

function draw() {
  background(bgImg);  

  var balloon = createSprite(300,400,25,25);
  balloon.addAnimation("balloon", hotAirBalloon);

  /*var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readPosition,showError);*/

  drawSprites();
}