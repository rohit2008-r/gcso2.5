var bullet,wall,thickness
var speed,weight




function setup() {
  createCanvas(1600,400);
  speed=random(223,231);
  thickness=random(22,83)

  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapecolor="white"
  bullet.velocityX=speed;

 wall=createSprite(1200, 200, thickness, height/2);
 wall.Shapcolor=(80,80,80)
}

function draw() {
  background(0,0,0);
  if(hasCollided(bullet,wall)) {
    
  var damage=0.5*weight*speed*speed/thickness * thickness* thickness;
  if(damage>10){
    wall.shapeColor="green"
  }
  if(damage<10 ){
    wall.shapeColor="red"
    }
    
    }
  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}