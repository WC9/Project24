
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var floor;
var hammer;
var rubber;


function setup() {
	var canvas = createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	stone = new Rock(200,60,100,70);
  floor = new Ground(500,750);
  hammer = new Hammer(200,200);
  rubber = new Rubber(300,80,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  stone.display();
  floor.display();
  hammer.display();
  rubber.display();

  drawSprites();
 
}



