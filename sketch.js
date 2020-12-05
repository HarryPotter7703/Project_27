
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, rope1, rope2, rope3, rope4, rope5, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var gameState = "ready";

function setup() {
	createCanvas(800, 700);

	var bobDiameter = 50;

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(375, 100,250, 20);
	bobObject1 = new Bob(275, 300);
	bobObject2 = new Bob(325, 300);
	bobObject3 = new Bob(375, 300);
	bobObject4 = new Bob(425, 300);
	bobObject5 = new Bob(475, 300);
	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*1, 0);
	rope3 = new Rope(bobObject3.body, roof.body, bobDiameter*0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, bobDiameter*1, 0);
	rope5 = new Rope(bobObject5.body, roof.body, bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(130);
	Engine.update(engine);


	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
 
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	
	if(gameState === "ready"){
		textStyle("bold");
		textSize(34);
		fill(200, 200,0);
		text("Press the up arrow key",200, 50);
		text("To defy gravity", 250, 550)
	}
	
	
	roof.display();
	drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW)
	{	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:55, y:-15});	}
	
}




