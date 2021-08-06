const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world,boy;
var launchingForce = 100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj = new stone(235,420,30);

	mango1= new mango(1100,100,30);
  mango2= new mango(1170,130,30);
	mango3= new mango(1010,140,30);
	mango4= new mango(1000,70,30);
	mango5= new mango(1100,70,30);
	mango6= new mango(1000,230,30);
	mango7= new mango(900,230,40);
	mango8= new mango(1140,150,40);
	mango9= new mango(1100,230,40);
	mango10= new mango(1200,200,40);
	mango11= new mango(1120,50,40);

	treeObj= new tree(1050,580);
	groundObject= new ground(width/2,600,width,20);
	launcherObject = new launcher(stoneObj.body,{x:235,y:420})

  var render = Render.create({
    element:document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes:false
    }
  });

	Engine.run(engine);

}

function draw() {
	background("#98AFC7");
	strokeWeight(2);
	fill("gray");
	textSize(25);
  text("press 'UP_ARROW' to get the Stone again!!    :)",50,50);
  image(boy ,200,340,200,300);
  

	treeObj.display();

	stoneObj.display();

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
	mango11.display();

	groundObject.display();

	launcherObject.display();

  collision(stoneObj,mango1);
  collision(stoneObj,mango2);
  collision(stoneObj,mango3);
  collision(stoneObj,mango4);
  collision(stoneObj,mango5);
  collision(stoneObj,mango6);
  collision(stoneObj,mango7);
  collision(stoneObj,mango8);
  collision(stoneObj,mango9);
  collision(stoneObj,mango10);
  collision(stoneObj,mango11);
}
function mouseDragged() {
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
	launcherObject.fly();
}

function keyPressed() {
	if(keyCode === 38) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
		launcherObject.attach(stoneObj.body);
	}
}

function collision(stoneA,mangoA) {
	mangoBodyPosition = mangoA.body.position;
	stoneBodyPosition = stoneA.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=mangoA.r+stoneA.r) {
  	  Matter.Body.setStatic(mangoA.body,false);
    }
}