var bunny,bunny_walking;
var ground,groundImage;
var creature,creatureImage;
var shell1,shell2,shell3,shell4;


function preload() {
  bunny_walking =   loadAnimation("images/bunny2.png","images/bunny.png");
  groundImage = loadImage("images/background.png")
  creatureImage = loadImage("images/creature.png")
  shell1 = loadImage("images/shell1.png");
  shell2 = loadImage("images/shell2.png");
  shell3 = loadImage("images/shell3.png");
  shell4 = loadImage("images/shell4.png");
}
function setup() {
  createCanvas(1000,700);

ground = createSprite(200,250,400,100);
  ground.addImage("ground",groundImage);
 ground.x = ground.width/2;
  ground.velocityX = -1;
  ground.scale=1.7; 
 
bunny = createSprite(50,500,20,50);
bunny.addAnimation("running",bunny_walking);
bunny.visible=true;

}

function draw() {
  background(255,255,255);  
  spawnObstacles();
  
 if(ground.x < 150){
   ground.x = ground.width/2;
} 

  drawSprites();
}

function spawnObstacles(){
  
  if(frameCount % 90 == 0){
    creature = createSprite(400,400,50,50);
    creature.addImage("creature",creatureImage)
    creature.scale=0.2;
    creature.velocityX= -5;
    creature.lifetime = 200;
  }
 
  if(frameCount % 300 === 0) {
    var shell = createSprite(600,500,10,40);
      shell.scale=0.2
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: shell.addImage(shell1);
              break;
      case 2: shell.addImage(shell2);
              break;
      case 3: shell.addImage(shell3);
              break;
      case 4: shell.addImage(shell4);
              break;
         default: break;
    }
    shell.velocityX=-2;
    shell.lifetime=500
}
}