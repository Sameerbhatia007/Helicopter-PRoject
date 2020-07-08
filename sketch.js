const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;
var helicopter;


	function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  var ground_options ={
       isStatic: true
  }

    ground = Bodies.rectangle(400,380,800,20, ground_options);
    World.add(world,ground);

var sameer={

    friction: .8,
    restitution: 1,
	density: 0.8
	
    
}

box = Bodies.rectangle(400,200,40,40,sameer);
World.add(world,box);

var helicopter_options={

		isStatic:true
}

helicopter = Bodies.rectangle(400,200,200,100,helicopter_options)
World.add(world,helicopter);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    imageMode(CENTER);
	image(packageIMG,box.position.x,box.position.y,40,40);
	imageMode(CENTER);
	
	image(helicopterIMG,helicopter.position.x,helicopter.position.y,200,100);
	
}



