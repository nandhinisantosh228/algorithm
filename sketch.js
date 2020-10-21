var fixedRect,movingRect;

function setup() {

  createCanvas(800,400);
  fixedRect=createSprite(200, 100, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(200,300,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  movingRect.velocityY=-3;
  fixedRect.velocityY=3;
}
function draw() {
  background(0,0,0);  

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2)
    {
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
    if( fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2
      && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2)
      {
        movingRect.velocityY=movingRect.velocityY*(-1);
        fixedRect.velocityY=fixedRect.velocityY*(-1);
      }
    

  /*if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }*/

  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  drawSprites();
}