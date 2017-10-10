
var snake,
    snakeBody = [],
    keyVector,
    lim = 10,
    sfood,
    ssize = 1,
    snakeAlive = true,
    allowNext = false,
    dataW = 20;

function setup() {
    createCanvas(1000, 600);
    cols = width/dataW,
    rows = height/dataW,
    snake = new Snake()
    keyVector = createVector(0,0)    
    sfood = new SnakeFood(dataW*round(random(cols-1)), dataW*round(random(rows-1)))
    frameRate(lim)
}

function draw() {
    background(10,10,10);
    for(var i=1; i<cols*2+1; i++ ){
        for(var j=1; j<rows*2+1; j++ ){
            stroke(25)
            line((i-1)*dataW/2, (j-1)*dataW/2,(i-1)*dataW/2, j*dataW/2)
            line((i-1)*dataW/2, (j-1)*dataW/2,(i)*dataW/2, (j-1)*dataW/2)
        }        
    }
    sfood.display();
    
    snake.update();
    snake.checkEdges();
    
    if(snakeAlive){
        snake.eatFood();
        snake.updateBody();        
        snake.checkDeath();
    }    
    snake.displayBody();
    allowNext = true
}

function Snake(){
  this.location = createVector(0,0)
  this.velocity = createVector(0,0)
  this.mousePos = createVector(mouseX, mouseY) 
  this.dir = createVector(0,0)
}

Snake.prototype.update = function(){
    this.dir = keyVector;
    this.velocity.add(keyVector.mult(dataW));
    this.location.add(this.velocity)
    this.dir.normalize()
    this.velocity.mult(0)
}

Snake.prototype.checkEdges = function(){
  if(this.location.x > (width-dataW)){
      this.location.x = 0;
  }else if(this.location.x < 0){
      this.location.x = width-dataW
  }
  if(this.location.y >(height-dataW)){
      this.location.y = 0
  }else if(this.location.y < 0){
      this.location.y = height-dataW
  }  
}

Snake.prototype.display = function() {
    fill(175);
    rect(this.location.x,this.location.y,dataW-1,dataW-1);
}

Snake.prototype.updateBody = function() {
    snakeBody.push(this.location.copy())
    if(snakeBody.length>ssize){
        snakeBody.splice(0,1)
    }
}

Snake.prototype.displayBody = function() {
    stroke(150);
    for(var i = ssize-1; i>0; i--){
        var alp = 255/ssize*i;
        fill(165, alp)
        //stroke(255,0,0,100)
        noStroke()
        rect(snakeBody[i-1].x,snakeBody[i-1].y,dataW-1,dataW-1);
    }
    
    fill(0,0,255);
    rect(snakeBody[ssize-1].x,snakeBody[ssize-1].y,dataW-1,dataW-1);
        
    if(!snakeAlive){
        stroke("red")
        fill(random(255),0,0,100);
        ellipse(snakeBody[ssize-1].x+dataW/2,snakeBody[ssize-1].y+dataW/2,dataW+3,dataW+3);
    }
}

Snake.prototype.eatFood = function(){
    if(this.location.dist(sfood.pos)<1){
        ssize++        
        sfood.pos.x = dataW*round(random(cols-1))
        sfood.pos.y = dataW*round(random(rows-1))
        
        frameRate(ceil(lim + snakeBody.length/3*2))
        
        
        console.clear()
        console.log("score: "+(ssize*ssize-1))
    }    
}

Snake.prototype.checkDeath = function(){
    if(ssize>2){
        for(var i = ssize-2; i>0; i--){
            if(snakeBody[ssize-1].dist(snakeBody[i])<1){
                snakeAlive = false;
                noLoop()
                break;
            }
        }
    }
}

function SnakeFood(locx, locy){
    this.pos = createVector(locx, locy)
    this.display = function(){
        fill(255,0,random(255));
        rect(this.pos.x,this.pos.y,dataW,dataW);
    }
}


keyPressed = function(e){
    if(allowNext){     
        if(e.code == "ArrowUp" && (keyVector.y != 1)){
            keyVector = createVector(0,-1)
        }else if(e.code == "ArrowRight" && (keyVector.x != -1)){
            keyVector = createVector(1,0)
        }else if(e.code == "ArrowDown" && (keyVector.y != -1)){
            keyVector = createVector(0,1)
        }else if(e.code == "ArrowLeft" && (keyVector.x != 1)){
            keyVector = createVector(-1,0)
        }   
    }
    allowNext = false
}