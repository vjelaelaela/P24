
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(700, 650, 1500, 20)
paper = new Paper(100, 100, 40)
b= new Dustbin(1000, 630, 200, 20)
l= new Dustbin(900, 600, 20, 100)
r= new Dustbin(1100, 600, 20, 100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  b.display()
  r.display()
  l.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:100,y:-100})
	}
}

