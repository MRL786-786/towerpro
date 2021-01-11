const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground
var polygon;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world
  ground = new Ground(170, 200, 320, 20);
  polygon = new Polygon(110, 100, 20, 20);
}
