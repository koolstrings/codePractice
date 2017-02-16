
var snake;
var head = [];

function setup() {
 createCanvas(screen.availWidth/1.3, screen.availHeight/1.5);
 for(var i=0; i<20; i++){
   snake = new Snake()   
   head[i] = createVector(i,i)
 }
}

function draw() {
 background(255);
 for(var i=0; i<20; i++){
  snake.update();
  snake.checkEdges();
  snake.display();
 }
}

function Snake(){
  this.location = createVector(0,0)
  this.velocity = createVector(0,0)
  this.acceleration = createVector(-0.01,0.1);
  this.mousePos = createVector(mouseX, mouseY) 
  this.dir = p5.Vector.sub(this.mousePos, this.location)
}

Snake.prototype.update = function(){ 
    this.mousePos = createVector(mouseX, mouseY);
    this.dir = p5.Vector.sub(this.mousePos, this.location);
    this.dir.normalize();
    this.dir.mult(0.5);    
    this.acceleration = this.dir;
    
    this.velocity.add(this.acceleration);
    this.velocity.limit(4);   
    this.location.add(this.velocity)
}

Snake.prototype.checkEdges = function(){
  if(this.location.x > screen.availWidth/1.3){
     this.location.x--;   
  }else if(this.location.x < 0){
    this.location.x++
  }
  if(this.location.y >screen.availHeight/1.5){
     this.location.y--   
  }else if(this.location.y < 0){
    this.location.y++
  }  
}

Snake.prototype.display = function() {
  stroke(0);
  fill(175);
  rect(this.location.x,this.location.y,15,15);
}