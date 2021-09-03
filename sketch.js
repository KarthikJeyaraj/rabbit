var garden,rabbit;
var gardenImg,rabbitImg;
var apple_Img

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_Img= loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  console.log(frameCount)
  

  drawSprites();

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if(select_sprites == 1) {
      createApples()
    }

  
  }

}
function createApples(){
    
  var apple
  apple = createSprite(random(50,350),40, 10, 10);
  apple.scale=0.09
  apple.addImage(apple_Img)
  apple.velocityY=3

  
  


  }





