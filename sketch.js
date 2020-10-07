var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400); 
  
ground = createSprite(300,370,1200,20);
 monkey = createSprite(100,370,20,20);
  monkey.addAnimation("monkeyrunning", monkey_running);
  monkey.scale=0.1;
  monkey.velocityY=-3;
  
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
background ("lightblue");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : "+score,240,50);
 
   
  if(keyDown("space"))
     
     {
       
       monkey.velocityY=-10;       
     }
  
  monkey.velocityY=monkey.velocityY+0.8
if(ground.x<0)
 {
 ground.x = ground.width/2
 } 
  
 monkey.collide(ground);
  
  
  if(monkey.isTouching(bananaGroup))
  {
  bananaGroup.destroyEach();
  score=score+1
  }
  if(monkey.isTouching(obstacleGroup))
  {
  score=score -1
  }
   food();
 spawnObstacles(); 
drawSprites();
  
}






function spawnObstacles()
{
 if (frameCount % 60 === 0)
 {
   var obstacle = createSprite(600,348,10,40);
   
   obstacle.velocityX = -6 
   
   obstacle.addImage(obstacleImage)
      
       
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.07;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}

function food()
{
 if (frameCount  %  80===0){
    var banana = createSprite(600,400,40,10);
    banana.velocityX=-6;
    banana.y= Math.round(random(120,200))
    banana.addImage(bananaImage); 
    banana.scale=0.1;
    bananaGroup.add(banana);
     }

}




