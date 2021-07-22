var snowflake,snowflakeImg
var player;
var bgImg

function preload() {
  
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow2.jpg");
  
}
function setup() {
  createCanvas(2200,900);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -5;
  snowflake.velocityY = 9;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.2;
  }
}
