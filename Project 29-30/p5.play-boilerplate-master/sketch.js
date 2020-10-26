const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base1,base2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17;
var box18,box19,box20,box21;
var box22,box23,box24,box25;
var hexagon;
var sling;
var ground;
var gameState = "OnSling";
var score = 0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  base1 = new Base(415,380,228,8);
  base1.color = "yellow";
  base2 = new Base(665,230,170,8);
  base2.color = "yellow";
  box1 = new Box(332,357,25,35);
  box1.color = rgb(57,255,20);
  box2 = new Box(359,357,25,35);
  box2.color = rgb(57,255,20);
  box3 = new Box(386,357,25,35);
  box3.color = rgb(57,255,20);
  box4 = new Box(413,357,25,35);
  box4.color = rgb(57,255,20);
  box5 = new Box(440,357,25,35);
  box5.color = rgb(57,255,20);
  box6 = new Box(467,357,25,35);
  box6.color = rgb(57,255,20);
  box7 = new Box(494,357,25,35);
  box7.color = rgb(57,255,20);
  box8 = new Box(610,205,25,35);
  box8.color = "cyan";
  box9 = new Box(637,205,25,35);
  box9.color = "cyan";
  box10 = new Box(664,205,25,35);
  box10.color = "cyan";
  box11 = new Box(691,205,25,35);
  box11.color = "cyan";
  box12 = new Box(718,205,25,35);
  box12.color = "cyan";
  box13 = new Box(359,323,25,35);
  box13.color = "cyan";
  box14 = new Box(386,323,25,35);
  box14.color = "cyan";
  box15 = new Box(413,323,25,35);
  box15.color = "cyan";
  box16 = new Box(440,323,25,35);
  box16.color = "cyan";
  box17 = new Box(467,323,25,35);
  box17.color = "cyan";
  box18 = new Box(386,289,25,35);
  box18.color = rgb(204,255,0);
  box19 = new Box(413,289,25,35);
  box19.color = rgb(204,255,0);
  box20 = new Box(440,289,25,35);
  box20.color = rgb(204,255,0);
  box21 = new Box(413,253,25,35);
  box21.color = "pink";
  box22 = new Box(637,164,25,35);
  box22.color = "pink";
  box23 = new Box(664,164,25,35);
  box23.color = "pink";
  box24 = new Box(691,164,25,35);
  box24.color = "pink";
  box25 = new Box(664,140,25,35);
  box25.color = rgb(204,255,0);
  ground = new Base(400,400,820,20);
  ground.color = "white";
  hexagon = new Hexagon(150,200,20,20);
  sling = new Sling(hexagon.body,{x:150,y:200});

}

function draw() {

  Engine.update(engine);
  
  rectMode(CENTER);
  background(0);

  base1.display();
  base2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  ground.display();
  hexagon.display();
  sling.display();

  drawSprites();
  noStroke();
  textSize(20);
  fill("cyan");
  text("SCORE : "+score,680,40);
}
function mouseDragged(){
  if(gameState!="launched"){
      Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  gameState = "launched"; 
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
        gameState = "OnSling";
        sling.attach(hexagon.body);
  }
}
