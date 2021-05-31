
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var iron,rubber,hammer,plane,stone;
var sand1,sand2,sand3,sand4,sand5,sand6;

function preload()
{

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

  plane = new Plane(600,height,1200,20);
  stone = new Stone(700,320,100,100);
  hammer = new Hammer(10,100);
  iron = new Iron(300,350);
  rubber = new Rubber(600,450);

  sand1 = new Sand(550,450,10);
  sand2 = new Sand(565,450,10);
  sand3 = new Sand(580,450,10);
  sand4 = new Sand(595,450,10);
  sand5 = new Sand(610,450,10);
  sand6 = new Sand(625,450,10);


}


function draw() {
  background("cyan");


 plane.display();
 stone.display();
 hammer.display();
 iron.display();
 rubber.display();

 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();

}



