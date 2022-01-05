
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var vertical_bar_1;
var vertical_bar_2;

function preload()
{
	
}

function setup() {
	createCanvas(1000,900);
	engine = Engine.create();
  	world = engine.world;
	
	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.5,
		friction:0,
		density: 1.2
	}

	ground = new Ground(500,800,1000,15)
	vertical_bar_1 = new Ground(850,690,10,200)
	vertical_bar_2 = new Ground(600,690,10,200)
	ball = Bodies.circle(100,10,20,ball_options);
  	World.add(world,ball);

	ellipseMode(RADIUS);
	

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  vertical_bar_1.show();
  vertical_bar_2.show();
  ellipse(ball.position.x,ball.position.y,15);
  Engine.update(engine);

  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:25,y:0});
	}
}



