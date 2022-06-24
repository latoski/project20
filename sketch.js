
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
(background);
Engine.update(engine);

{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic=true
		block1=Bodies.circle(220,10,10,block1-options);
		World.add(world,block1);
		block2=Bodies.rectangle(110,50,10,10,block2_options);
		World.add(world,block2);

		block3=Bodies.rectangle(350,50,10,10,block3_options);
		World.add(world,block3);

		var block1_options={
			restituition:0.5,
			frictions:0.0.2,
			frictionAir:0
			var block2_options={
				restituition:0.7
				frictions:0.0.1
frictionAir:0.01
var block3_options={
	restituition:0.0.1
frictions:1
frictionsAir:0.3
	Engine.run(engine);
  


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



