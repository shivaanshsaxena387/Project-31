const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var DivisionHeight = 300;
function setup(){
    var canvas = createCanvas(800,780);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,width-50,1200,20);
    //To create the divisions:-
    for (var k = 0; k<=width; k = k + 150)
    {
        divisions.push(new Division(k,height-DivisionHeight/2,10,DivisionHeight));
    }
    //To create the plinkos:-
    for(var j = 75; j<=width; j = j + 120)
    {
        plinkos.push(new Plinko(j,75,20));
    }
    for(var j = 50; j <=width; j = j + 120)
    {
        plinkos.push(new Plinko(j,175,20));
    }
    for (var j = 75; j <=width; j=j+120) 
    {
    
       plinkos.push(new Plinko(j,275,20));
    }

     for (var j = 50; j <=width-10; j=j+120) 
    {
    
       plinkos.push(new Plinko(j,375,20));
    }
    Engine.run(engine);
}
function draw()
{
    background('Fuchsia');
    Engine.update(engine);
    
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      }
    
     for (var j = 0; j < particles.length; j++) {
      
        particles[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
      }
      for (var i = 0; i < plinkos.length; i++) {
     
        plinkos[i].display();
        
      }
    ground.display();
}