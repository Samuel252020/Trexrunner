var trex,trex_running,invisibleground,ground,ground_moving,o1,o2,o3,o4,o5,o6,cloud_moving,score;

function preload() {
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_moving = loadImage("ground2.png");
  cloud_moving = loadImage("cloud.png");
  o1 = loadImage("obstacle1.png");
  o2 = loadImage("obstacle2.png");
  o3 = loadImage("obstacle3.png");
  o4 = loadImage("obstacle4.png");
  o5 = loadImage("obstacle5.png");
  o6 = loadImage("obstacle6.png");
  score = 0;
}


function setup() {
  createCanvas(400, 400);
  trex = createSprite(50,350);
  invisibleground = createSprite(200,385,400,5);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  ground = createSprite(200,375,400,10);
  ground.x = ground.width/2;
  ground.addImage("moving",ground_moving);
  invisibleground.visible = false;
  ground.velocityX = -9;  
}

function draw() {
  
  background(100);
  score = score + Math.round(getFrameRate()/60);
  text("score:"+score,130,50);
  
  if(keyDown("space")&&trex.y>350){
    trex.velocityY = -12;    
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(invisibleground);
  if(ground.x < 0) {
  ground.x=ground.width/2;
  }
  spawnClouds();
  spawnObstacles();
  
  drawSprites(); 
}

function spawnClouds(){
  if (frameCount%60 === 0) {
    var cloud =createSprite(400,350);
    cloud.addImage(cloud_moving);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.y = random(280,320);
    cloud.depth = trex.depth;
    trex.depth = trex.depth+1;
    cloud.lifetime=134; 
  }   
}

function spawnObstacles(){
  if (frameCount%60 === 0){
    var obstacles = createSprite(400,360);
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1:obstacles.addImage(o1);
      break;  
      case 2:obstacles.addImage(o2);
      break;
      case 3:obstacles.addImage(o3);
      break;
      case 4:obstacles.addImage(o4);
      break;
      case 5:obstacles.addImage(o5);
      break;
      case 6:obstacles.addImage(o6);
      break;  
    }
    obstacles.scale=0.4;
    obstacles.velocityX = -6;
    obstacles.lifetime = 70;     
  }   
}