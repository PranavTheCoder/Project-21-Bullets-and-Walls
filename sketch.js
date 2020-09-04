var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,25,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "red";
  
}

function draw() {
  background(1);
  
  if (hasCollided(bullet,wall)) 
  {
  bullet.velocityX = 0;
    
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage > 10) 
    {
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10) 
    {
      wall.shapeColor = color(0,255,0);
     }

  }

  hasCollided(bullet,wall);

  drawSprites();
}

function hasCollided(bullet,wall) 
{
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge) 
{
  return true;
}
  return false;
}