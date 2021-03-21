const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2,box3,box4,ground,pig1,pig3,log1,log2;

var bird,box5,log4,log5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);

    log2 = new Log(810,180,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810,220);

    bird = new Bird(100,100);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150,PI/7);
    log5 = new Log(870,120,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log2.display();

    bird.display();
    box5.display();
    log4.display();
    log5.display();
}