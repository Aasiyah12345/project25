
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var dustbinImage
 var paperImage

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);
	Paper=createSprite(width/2, 80, 10,10);
	Paper.scale=0.2


	engine = Engine.create();
	world = engine.world;

	
	paper1=new paper(100,630,30)
	dustbin1=new dustbin(350,600,20,90)
	dustbin2=new dustbin(500,640,300,20)
	dustbin3=new dustbin(650,600,20,90)
	Ground1= new Ground(400,650,800,10)



	

	Engine.run(engine);
  
}


function draw() {
  background(0);

  paper1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  Ground1.display()

  drawSprites();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	 }
   }



