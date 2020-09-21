var movingrect;
var rect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 80, 30);
  movingrect.velocityX=-4;
  rect=createSprite(200, 200, 50, 80);
  
}

function draw() {

  background(255,255,255); 
  movingrect.shapeColor="green";
  rect.shapeColor="green"; 
  //movingrect.x=mouseX;
  //movingrect.y=mouseY;

  if (movingrect.x-rect.x<rect.width/2+movingrect.width/2 &&
     rect.x-movingrect.x<rect.width/2+movingrect.width/2 &&
     movingrect.y-rect.y<rect.height/2+movingrect.height/2 &&
     rect.y-movingrect.y<rect.height/2+movingrect.height/2 ){
    
    rect.shapeColor="red";
    movingrect.shapeColor="red";
     }
     if (movingrect.x-rect.x<rect.width/2+movingrect.width/2 &&
      rect.x-movingrect.x<rect.width/2+movingrect.width/2 &&
      movingrect.y-rect.y<rect.height/2+movingrect.height/2 &&
      rect.y-movingrect.y<rect.height/2+movingrect.height/2 ){
     
    movingrect.velocityX=movingrect.velocityX*-1;
    movingrect.velocityY=movingrect.velocityY*-1;
      }


     drawSprites();
}