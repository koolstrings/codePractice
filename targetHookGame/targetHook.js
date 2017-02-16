
var mover = [],
    gameWidth = 400,
    gameHeight = 600,
    count = 3,
    target;
    score = 35;
    targetColor = "red"
    targetSize = 45;

function setup() {
    createCanvas(gameWidth,gameHeight);
    for(var i=0; i<10; i++){
      mover[i] = new Mover();
    }
    target = createVector(gameWidth-150,gameHeight-150)
    console.log("your current score is 35 and target is 50")
}

function draw() {
    fill('grey');
    rect(0,0,gameWidth,gameHeight)
    fill(targetColor);
    noStroke();
    ellipse(target.x,target.y,targetSize,targetSize);
    for(var a=0; a<count; a++){
      mover[a].update(a);
      mover[a].checkEdges();
      mover[a].display(a);        
      mover[a].checkScore(a);
    }
}

function Mover(){
    this.location = createVector(random(gameWidth),random(gameHeight));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(-0.001,0.01);
    this.mousePos = createVector(mouseX, mouseY)
    this.dir = p5.Vector.sub(this.mousePos, this.location)
    this.col = {r:random(255),g:random(255),b:random(255)}
    this.spaceX = 15//random(15)-random(15)
    this.spaceY = 15//random(15)-random(15)
}

Mover.prototype.update = function(a){    
  this.mousePos = createVector(mouseX, mouseY)
  this.dir = p5.Vector.sub(this.mousePos, this.location)
  this.dir.normalize();
  for(var i=0;i<count;i++){   
    if(a == ceil(count/2)){
        this.dir.mult(.7);
    }else{
        this.dir.mult(.5);
    }
  }
  
  this.acceleration = this.dir;
  
  this.velocity.add(this.acceleration);
  this.velocity.limit(6);
  this.location.add(this.velocity);
}

Mover.prototype.display = function(i) {
    if(i == ceil(count/2)){
        fill('white');
    }else{
        fill(this.col.r,this.col.g,this.col.b);
    }
    stroke(0);
    ellipse(this.location.x+this.spaceX,this.location.y+this.spaceY,35,35);
}

Mover.prototype.checkEdges = function() {
    if (this.location.x > gameWidth/2) {
      this.location.x--;
    } else if (this.location.x < 0) {
      this.location.x++;
    }
 
    if (this.location.y > gameHeight/2) {
      this.location.y--;
    } else if (this.location.y < 0) {
      this.location.y++;
    }
  }

Mover.prototype.checkScore = function(a){ 
    if(dist(this.location.x,this.location.y,target.x,target.y)<(targetSize/2)){
        if(a == ceil(count/2)){
            score += 2
            targetSize++
            if(targetSize>100){
                targetSize = 100
            }
        }else{
            score--
            targetSize--
            if(targetSize<1){
                targetSize = 1
            }
        }
        console.clear();
        console.log(score)
    }
    if(score>80){
        alert("you win");
        targetColor = "green"
    }
    else if(score<=0){
        alert('you lost!')
        targetColor = "grey"
    }
    if(targetSize>45){
        targetSize = 45
    }
}