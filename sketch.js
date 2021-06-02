var gameState = "play"


var tower
var ghost
var door,climber,invi,canvas

function preload() {
  
  towerImage=loadImage("bg.png");
  doorImage=loadImage("asteroid.png");
  ghostImage = loadImage("download.png") 
  
}

function setup (){
  createCanvas(displayWidth,displayHeight)
  
  tower = createSprite(displayWidth/2,displayHeight + 200,10000090,10000000);
  tower.velocityY=3
  tower.addImage(towerImage);
  
  
  doorsGroup = createGroup();
  
  
  ghost = createSprite(displayWidth/2,500,40,40)
  ghost.addImage(ghostImage)
  ghost.scale=0.8
  

 
}

function draw(){
  background("white")
  
  if(gameState === "play"){
    
    
    
  
  if(tower.y>550){
    tower.y=200
  }
  

    if(keyDown("right")){
    ghost.x = ghost.x + 5
  }
  
  if(keyDown("left")){
    ghost.x = ghost.x - 5
  }
 
  
 
  
  
  
  
  
  if(doorsGroup.isTouching(ghost) || ghost.y>600){
    ghost.destroy()
    gameState ="end"
    
  }
  

  doors();
  
  drawSprites();
  }
  
  if(gameState === "end"){
    strokeWeight(5)
    stroke("black")
    fill('red')
    textSize(55)
    text("Gameover",displayWidth/2,displayHeight/2)
  }
  
}

function doors(){
  if(frameCount%120 === 0){
    door = createSprite(Math.round(random(displayWidth/2-1000,displayWidth/2+1000)),-50,20,40);
    door.addImage(doorImage)
    door.velocityY=3
    door.lifetime=220
    

    
    
    
    ghost.depth = door.depth + 1
    
  
    doorsGroup.add(door)
  }
  
  
}