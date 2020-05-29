var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 60, 30);
 movingrect= createSprite(600, 200, 30, 60);
 fixedrect.velocityX=2;
 
}

function draw() {
  background(0); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;

if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
    fixedrect.velocityX=-1*fixedrect.velocityX;
  }
  if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      fixedrect.velocityY=-1*fixedrect.velocityY;
    }
  
  drawSprites();
}