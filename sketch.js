const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,Ground,bin;

function preload(){

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new ground(400,650,800,10);

	bin = new dustbin(550,625,100,120);
	
	ball = new paper(100,500,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Ground.display();
  bin.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === '24'){
		Matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

