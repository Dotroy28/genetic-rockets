var population;
var lifespan = 400;
var lifeP;
var generationCount;
var count= 0;
var target;
var maxforce = 1;
var generation=0;

var rx = 100;
var ry=150;
var rw=200;
var rh=10;

function setup(){
    createCanvas(400,300);
    
    rocket = new Rocket();
    population = new Population();
    lifeP = createP();
    generationCount=createP();
    firstGeneration =createP();
    target = createVector(width/2,50);
}

function draw(){
    background(0);
    population.run();
    //lifeP.html("Timer: "+count);
    //generationCount.html("Generation: "+generation);

    count++;

    
    
    if (count >= lifespan || population.allRocketsCrashed()) {
        population.evaluate();
        population.selection();
        count = 0; // Reset count to restart the simulation
        generation++;
    }

    fill(255);
    rect(rx,ry,rw,rh);

    ellipse(target.x,target.y,16,16);

    // if(population.rocketComplete()){
    //     firstGeneration.html("Generations to reach target: "+generation);
    // }
}