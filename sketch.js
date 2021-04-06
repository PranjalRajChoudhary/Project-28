
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var stone,tree,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,640);
stone = new Stone(107,478);
tree = new Tree(1100,390);
boy = new Boy(200,550);
rope = new Rope(boy.body,stone.body);
mango1 = new Mango(900,300);
mango2 = new Mango(1000,200);
mango3 = new Mango(1000,350);
mango4 = new Mango(1000,290);
mango5 = new Mango(1100,280);
mango6 = new Mango(1100,180);
mango7 = new Mango(1180,200);
mango8 = new Mango(1180,300);
mango9 = new Mango(1260,330);
mango10 = new Mango(1250,270);

  textSize(20);

	Engine.run(engine);
 
  
  
}


function draw() {
  background("grey");

  fill("red");
  text("PRESS SPACE KEY TO GET A SECOND CHANCE TO PLAY!",50,50);


  Engine.update(engine);
  

  ground.display();
  
  boy.display();
  tree.display();
  rope.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  
  

  drawSprites();

 

  
}
function mouseDragged(){
  Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
    rope.attach(stone.body);
  }
}
function detectCollision(body1,body2){

mangoBodyPosition = body2.body.position;
stoneBodyPosition = body1.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=100){
Matter.Body.setStatic(body2.body,false);

}

}


