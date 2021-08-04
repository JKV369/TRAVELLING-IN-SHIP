var ship, ship_moving;
var sea, sea_moving;
function preload(){
ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
sea_moving = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);

    

    sea = createSprite(200,200,400,400);
    sea.addAnimation("waves",sea_moving);
    sea.scale=0.3;
    sea.x=200;

    ship = createSprite(100,250,100,100);
    ship.addAnimation("moving",ship_moving);
    ship.scale=0.2;
    ship.x=100;
}

function draw() {
  background("blue");
 
  sea.velocityX=-2
  console.log(sea.x)
  
  if (sea.x<0){
    sea.x = 200;
  }




  drawSprites();
}