const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var shot1;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b9,b10;
var polygon1;
var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
engine=Engine.create();
world = engine.world;

  b1=new Box(390,155,30,40);
  b2=new Box(330,235,30,40);
  b3=new Box(360,235,30,40);
  b4=new Box(390,235,30,40);
  b5=new Box(420,235,30,40);
  b6=new Box(450,235,30,40);
  b7=new Box(360,195,30,40);
  b8=new Box(390,195,30,40);
  b9=new Box(420,195,30,40);
  polygon1=new Polygon(50,200);
shot1=new Shot(polygon1.body,{x:100,y:200});
ground=new Ground(385,245,200,10);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  polygon1.display();
  shot1.display();
  ground.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shot1.fly();
}
function keyPressed(){
  if(keyCode===32){
shot1.attach(this.polygon1);
  }
}