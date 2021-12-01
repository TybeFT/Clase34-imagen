const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var edificio1;
var ground1;
var breakingball;
var cadena;
var brazo;

function setup(){
    createCanvas(1500,800);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(750,800,1500,20);

    edificio1 = new Edificio(900,700,50,100);
    edificio2 = new Edificio(900,500,50,100);
    edificio3 = new Edificio(900,300,50,100);
    edificio4 = new Edificio(900,100,50,100);
    edificio5 = new Edificio(900,0,50,100);

    breakingball = new Ball(200,200,80,80);

    cadena = new Chain(breakingball.body,{x: 550, y: 50});

    //brazo = new Brazo(40,650);

}

function draw(){
    background("Black");

    Engine.update(engine);

    ground1.display();

    edificio1.display();
    edificio2.display();
    edificio3.display();
    edificio4.display();
    edificio5.display();

    cadena.display();

    breakingball.display();

    //brazo.display();
}

function mouseDragged(){
    Matter.Body.setPosition(breakingball.body,{x:mouseX,y:mouseY});
}