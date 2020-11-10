var particles, plinko, divisions, ground;
var Width, height;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
 


  for (var j = 40; j <= Width; j = j+50){
    plinkos.push(new PLinko(j,75));
  }


  for (var j = 15; j <= Width-10; j = j+50){
    plinkos.push(new PLinko(j,175));
  }

  for (var j = 65; j <= Width+10; j = j+50){
    plinkos.push(new PLinko(j,275));
  }
 
  for (var j = 80; j <= Width+20; j = j+50){
    plinkos.push(new PLinko(j,375));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2-10),10,10))
  }

  if(particle != null){
    particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score=scord+500;
         particle=null;
         if(count>=5) gamestate ="end"
       }
     }

  }

  drawSprites();
}

function mousepressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX, 10, 10, 10)
  }
}

