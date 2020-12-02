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
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
  dustbinObj1= new dustbin(1200,650);
  paperObj= new paper(200,600,15);
  groundObj = new ground(width/2,650,1000,10);
  
  
  

  
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);
  groundObj.display(); 
  paperObj.display();
  dustbinObj1.display();
 
 

  drawSprites();

}

function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:20,y:-20});
  }
}


