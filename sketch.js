const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj,dustbinObj1,groundObj;
var world; 

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	paperObj= new Paper(200,600,15);
  groundObj = new Ground(500,650,1000,10);
  
  redBox= createSprite(700, 630,200,20);
  redBox.shapeColor="white";

  redBox2=createSprite(790, 600,20,70);
  redBox2.shapeColor="white";

  redBox3=createSprite(610, 600,20,70);
  redBox3.shapeColor="white";


  
  
}


function draw() {
  Engine.update(engine);
  background(0);
  groundObj.display();
  paperObj.display();
  redBox.display();
  redBox2.display();
  redBox3.display();
 
  rectMode(CENTER);

  drawSprites();

}

function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:85});
  }
}

