
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin1=new Bin(700,570,150,150)
//	dustbin2=new Bin(500,600,10,100)
//	dustbin3=new Bin(600,646,200,10)

paper=new Paper(200,600,70)

ground=new Ground(300,650,1000,4);



	Engine.run(engine);
  
	
	

}


function draw() {
  rectMode(CENTER);
  background(280);

 
  Engine.update(engine)

  ground.display();
  dustbin1.display();
paper.display();



drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95})

}

}

