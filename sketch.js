var gun
var monkey, wolf, bird1, bird2, deer, man, point
var monkeyImage, wolfImage, bird1Image, bird2Image, deerImage, manImage, pointImage
var gunImage, BgImage
var monkeyGroup, wolfGroup, bird1Group, bird2Group, deerGroup, manGroup, pointGroup
function preload(){
monkeyImage=loadAnimation("monkey.png");
wolfImage=loadAnimation("wolf.gif");
bird1Image=loadAnimation("bird1.gif");
bird2Image=loadAnimation("bird2.gif");
deerImage=loadAnimation("deer.gif");
manImage=loadAnimation("runningMan.gif");
pointImage=loadAnimation("20P.gif");
gunImage=loadImage("gun.png")
BgImage=loadImage("background.png")
}
function setup(){
  createCanvas(1300,750);
  gun=createSprite(650,375,100,100);
  gun.addImage(gunImage);
  gun.scale=0.25;
  monkeyGroup=new Group();
  wolfGroup=new Group();
  bird1Group=new Group();
  bird2Group=new Group();
  deerGroup=new Group();
  manGroup=new Group();
  pointGroup=new Group();
}

function draw() {
  background(BgImage); 
  gun.x=mouseX;
  gun.y=mouseY;

  if(mousePressedOver(monkey)){
    monkeyGroup.destroyEach();
  }
  if(mousePressedOver(wolf)){
    wolfGroup.destroyEach();
  }
  if(mousePressedOver(bird1)){
    bird1Group.destroyEach();
  }
  if(mousePressedOver(bird2)){
    bird2Group.destroyEach();
  }
  if(mousePressedOver(deer)){
    deerGroup.destroyEach();
  }
  if(mousePressedOver(man)){
    manGroup.destroyEach();
  }
  if(mousePressedOver(point)){
    pointGroup.destroyEach();
  }



  monkeyGroupSpawn();
  wolfGroupSpawn();
  bird1GroupSpawn();
  bird2GroupSpawn();
  deerGroupSpawn();
  manGroupSpawn();
  pointGroupSpawn();
  drawSprites();
}
function monkeyGroupSpawn(){
  if(frameCount%60===0){
    monkey=createSprite(random(1,400),random(1,300),100,100)
    monkey.addAnimation("monkey",monkeyImage);
    monkey.scale=0.5;
    monkey.lifetime=50;
    monkeyGroup.add(monkey);
  }
}
function wolfGroupSpawn(){
if(frameCount%350===0){
  wolf=createSprite(0,random(580,650),100,100)
  wolf.addAnimation("wolf",wolfImage);
  wolf.scale=0.9;
  wolf.velocityX=random(15,30);
  wolfGroup.add(wolf);
}
}
function bird1GroupSpawn(){
  if(frameCount%200===0){
  bird1=createSprite(0,random(50,400),100,100)
  bird1.addAnimation("bird1",bird1Image);
  bird1.scale=0.3
  bird1.velocityX=random(5,10);
  bird1.velocityY=random(-3,5);
  bird1Group.add(bird1);
  }
} 
function bird2GroupSpawn(){
  if(frameCount%220===0){
    bird2=createSprite(1300,random(50,400),100,100)
    bird2.addAnimation("bird2", bird2Image);
    bird2.scale=0.25
    bird2.velocityX=random(-10,-15)
    bird2.velocityY=random(-3,5);
    bird2Group.add(bird2);
  }
}
function deerGroupSpawn(){
  if(frameCount%400===0){
  deer=createSprite(1300,random(470,540),100,100)
  deer.addAnimation("deer",deerImage);
  deer.scale=0.7;
  deer.velocityX=random(-5,-15);
  deerGroup.add(deer);
  }
}
function manGroupSpawn(){
  if(frameCount%500===0){
    man=createSprite(0,random(530,600),100,100)
    man.addAnimation("man", manImage);
    man.scale=0.8;
    man.velocityX=random(10,20);
    manGroup.add(man);
  }
} 
function pointGroupSpawn(){
  if(frameCount%100===0){
    point=createSprite(random(0,1400),random(0,750),100,100)
    point.addAnimation("point", pointImage);
    point.scale=0.25
    point.velocityX=40
    point.velocityY=random(-5,5);
    pointGroup.add(point);
    
  }
}
