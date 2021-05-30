const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bird;
var pig1,pig2;
var log1



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(900,320,50,50);
    bird = new Bird(100,100)
    pig1 = new Pig(800,320)
    log1 = new Log(800,300,300,PI/2)
    box3 = new Box(700,250,50,50);
    box4 = new Box(900,250,50,50);
    
    pig2 = new Pig(800,250)
    log2 = new Log(800,200,300,PI/2)
    box5 = new Box(800,150,50,50);
    log3 = new Log(760,110,110,PI/7)
    log4 = new Log(860,110,110,-PI/7)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
}