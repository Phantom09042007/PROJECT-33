var BackgroundIMG,Background;
var P1,P1IMG;

function preload(){
  BackgroundIMG = loadImage("snow3.jpg");
  P1IMG = loadImage("P1IMG.png")

}

function setup() {
  createCanvas(1100,800);
  Background = createSprite(400, 280,20,20);
  P1 = createSprite(500,450,20,20)
  


  
}

function draw() {
  Background.addImage(BackgroundIMG); 
  P1.addImage(P1IMG);
  P1.scale = 1.5;
  snow = new Snow(random(100,1000),100,10,10);
  snow.display();
  drawSprites();
}