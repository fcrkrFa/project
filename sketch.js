const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var myEngine, myWorld;
var maxDrops = 100;
var allDrops = [];
var t1, t2, t3, t4;

function preload(){
    t1 = loadImage("thunderbolt/1.png")
    t2 = loadImage("thunderbolt/2.png")
    t3 = loadImage("thunderbolt/3.png")
    t4 = loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(400,800);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    for(var i = 0; i < maxDrops; i++)
    {
        allDrops.push(new Drop());
    }
}

function draw(){
    background(0);
    Engine.update(myEngine);

    for(var i = 0; i < allDrops.length; i++)
    {
        allDrops[i].display();
    }

    var rand = Math.round(random(1,4))

    if(frameCount%80 == 0)
    {
        switch(rand)
        {
            case 1: image(t1, random(100,300), random(0,200));
            break;

            case 2: image(t2, random(100,300), random(0,200));
            break;

            case 3: image(t3, random(100,300), random(0,200));
            break;

            case 4: image(t4, random(100,300), random(0,200));
            break;
            
        }
    }
}   

