var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  dogImage=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(300,300)
  dog.addImage(dogImage)
  dog.scale=0.5
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}
  drawSprites();
  

}



