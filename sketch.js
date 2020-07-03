var banana, bananaImage; 
var obstacles,obstacleImage;
var scene,backImage,groundImage,ground,iGround;
var monkeyImage,monkey;
var bananaGroup,obstaclesGroup;
var score = 0;



function preload(){
  
  obstacleImage = loadImage("stone.png");
  bananaImage = loadImage("Banana.png");
  scene = loadImage("jungle.jpg");
  monkey_Image = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  groundImage = loadImage("ground.jpg");
  
  
}


function setup() {
  createCanvas(600,300);
  
  backImage = createSprite(600,300,20,30);
  backImage.addImage(scene);
  backImage.velocityX = -3;
  backImage.scale = 1.5;
  backImage.x = backImage.width/2;
  
  ground = createSprite(300,250);
  ground.addImage(groundImage);
  ground.scale = 0.17;
  
  
  iGround = createSprite(300,250,600,5);
  iGround.visible = false;
  
   monkey = createSprite(50,180);
  monkey.addAnimation("monkey",monkey_Image);
  monkey.scale = 0.1;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  
  
  
  
}


function draw(){
  background(220);
 edges = createEdgeSprites();
  
   //score = score + Math.round(getFrameRate()/60);


  
 
  
  
 

  
 
  
if (backImage.x < 0){
      backImage.x = backImage.width/2;
    }
  
  
  
  fill("white");
  textSize(20);
  
 if(keyDown("space") ){
monkey.velocityY = -12;
            }         
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  
  switch(score){
    case 50: monkey.scale = 0.12;
    break;
    case 100: monkey.scale = 0.14;
    break;
    case 150: monkey.scale = 0.16;
    break;
    case 200: monkey.scale = 0.17;
    break;
    default:
    break;
  
  }
  
  console.log(score);
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score + 1;
    
    
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.2;
  }
  
food();
  stone();
  
  
  
  monkey.collide(iGround);
  drawSprites();
   text("score : "+score,400,50);
}

function food(){
  if(frameCount%100 === 0){
    banana = createSprite(550,10);
  banana.addImage(bananaImage);
  banana.scale = 0.5;
  banana.velocityX = -3;
  banana.scale = 0.05;
  banana.lifetime = 120;
  banana.y = random(50,150);
  banana.x = random(150,450);
  
   bananaGroup.add(banana);
    
  }}

function stone(){
  if(World.frameCount % 80 === 0) {
    obstacles = createSprite(550,200);
  obstacles.addImage(obstacleImage);
  obstacles.scale = 0.20;
  
    obstacles.velocityX = -7;
    
    obstacles.lifetime = 110;
    
    obstaclesGroup.add(obstacles);
  }
  
}
