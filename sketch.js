
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Sprite,Sprite1,Sprite2
var groundSprite
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	Sprite=createSprite(619,640,150,10);

	Sprite1=createSprite(689,600,10,70);

	Sprite2=createSprite(549,600,10,70);
	groundSprite=createSprite(width/2, height-50, width,10);
	groundSprite.shapeColor=color('yellow')
	
ground=Bodies.rectangle(width/2,height-50,width,10,{isStatic:true})
World.add(world,ground)

	ball=new Paper();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  ball.display();
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y
  KeyPressed()
drawSprites();
}

function KeyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	
	
	
	}
	
	
	
	}

