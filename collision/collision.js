var w = 400;
var h = 100;
var bubble = [];
var count = 25;
var bubbleSize = 30;

function setup() {
  createCanvas(w,h);
  bubble = new Collider()
  for(var a= 0; a<count; a++){
    bubble[a] = new Collider()
  }
}

function draw() {
  background(255)
//    bubble.move();
//    bubble.checkEdges();
//    bubble.display();
  for(var a= 0; a<count; a++){
    bubble[a].move();
    bubble[a].checkEdges();
    for(var b = 0; b<count; b++){
      if(a!=b){
        bubble[a].checkCollision(bubble[b]);
      }
    }
    bubble[a].display();
  }
}

function Collider(){
  this.location = createVector(random(w), random(h))
  this.velocity = createVector(0,0)
  this.color = {r:random(255),g:random(255),b:random(255)}
  this.dia = bubbleSize //random(bubbleSize)
  
  this.move = function(){
      this.acc = createVector(random(1),random(1))  
      this.dir = createVector(random(1),random(1))
      this.acc.sub(this.dir);
      
      this.velocity.add(this.acc);
      this.velocity.limit(2)
      this.location.add(this.velocity)
  }
  
  this.checkEdges = function(){
    if (this.location.x > w-this.dia/2) {
      this.location.x = w-this.dia/2;
    } else if (this.location.x < this.dia/2) {
      this.location.x = this.dia/2;
    }
 
    if (this.location.y > h-this.dia/2) {
      this.location.y = h-this.dia/2;
    } else if (this.location.y < this.dia/2) {
      this.location.y = this.dia/2;
    }
  }
  
  this.checkCollision = function(other){
    var d = dist(this.location.x, this.location.y, other.location.x, other.location.y)
    var space = (this.dia + other.dia)/2
    if(d<space){
        //this.location.add(other.dia/2)
        this.velocity.mult(-1)
        this.dia += (random(1)-random(1))
    }
      if(5<this.dia && this.dia<10){                 
        this.color.r++ && this.color.g++ && this.color.b++
      }
    
  }
  
  this.display = function(){
//    if(this.color.r < 255){
//        noFill();
//        ellipse(this.location.x,this.location.y,100,100)
//    }
    fill(this.color.r,this.color.g,this.color.b)
    //noStroke();
    stroke("grey")
//    if(this.dia<5){
////        this.dia = 3;
////        this.location.x = random(w)
////        this.location.y = h-this.dia
//    }else if(this.dia>45){
////        this.location.x = random(w)
////        this.location.y = this.dia
//    }else{
        ellipse(this.location.x,this.location.y,this.dia,this.dia)        
//    }
  }
  
}
