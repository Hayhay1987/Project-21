const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

engine = Engine.create();
world = engine.world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = new Ground(400, 700, 800, 30);
	left  = new Ground(500, 650, 20, 120);
	right  = new Ground(700, 650, 20, 120);

	//Create the Bodies Here.

	ball_options = {
		restitution: 0.95, 
		frictionAir: 0.01,
		density: 1.2
	}
	ball = Bodies.circle(100, 100, 14, ball_options)
	World.add(world, ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  fill("white")
  ellipse(ball.position.x, ball.position.y, 25, 25)

  ground.display();
  left.display();
  right.display();

  if (keyWentDown(UP_ARROW)) {
	  Body.applyForce(ball, ball.position, {x: 25, y: -15})
  }
  drawSprites();
 
}
