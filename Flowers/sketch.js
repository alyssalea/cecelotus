var x = 100;
var y = 200;

function preload () {
  flower = loadImage("assets/lo.jpg")
  lotus = loadImage("assets/LotusFlower.png")
}

function setup() {
  createCanvas(900,900)
  
}

function draw() {
  scale(1)
  background(flower)
  image(lotus,x,y)
  if(keyIsDown (DOWN_ARROW))
  y = y + 20;
  
  if(keyIsDown (UP_ARROW))
  y = y - 20;
  
  if(keyIsDown (RIGHT_ARROW))
  x = x + 10;
  
  if(keyIsDown (LEFT_ARROW))
  x = x - 10;
}