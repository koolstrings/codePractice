var maxForce = .001

function Bubble(x,y,r){
    this.pos = createVector(x,y)
    this.vel = createVector()
    this.acc = createVector()
    this.size = r
    this.maxSpeed = 4
}

Bubble.prototype.applyForce = function(f){
    this.acc.add(f)
}

Bubble.prototype.applyDir = function(f){
    this.vel.add(f)
}

Bubble.prototype.update = function(){
    this.pos.add(this.vel)
    //this.vel.add(this.acc)
    this.vel.limit(this.maxSpeed)
    //this.acc.mult(0)
}

Bubble.prototype.display = function(i){
    var str
    if(i==0){
        str = 255
    }else{
        str = 100
    }
    //stroke(random(255),random(255),random(255),50);
    //fill(255,10)
    //strokeWeight(this.size)
   ellipse(this.pos.x, this.pos.y,this.size, this.size);
  //  point(this.pos.x, this.pos.y)
}

Bubble.prototype.clusterBehavior = function(j){    
    if(j!=0){
        this.seek(bubble[0])
    }
    for(var i=1; i<bubble.length; i++){
        if(i!=j && j!=0 ){
            this.link(bubble[i-1])            
        }
    }
    
}

Bubble.prototype.seek = function(target){
    var dist = p5.Vector.sub(target.pos, this.pos)
    var d = dist.mag()
    var speed = this.maxSpeed
    var maxAllowed = (target.size + this.size)/2+5
    if(d<100){
        speed = map(d, 0 ,100 ,0 , this.maxSpeed)
        if(d<maxAllowed){
            speed *= -1
        }
    }
    dist.setMag(speed)
    this.applyDir(dist)
}

Bubble.prototype.link = function(target){
    var dist = p5.Vector.sub(target.pos, this.pos)
    var d = dist.mag()
    var speed = this.maxSpeed
    var maxAllowed = (target.size + this.size)/2+5
    if(d<maxAllowed){
        speed = map(d, 0 ,100 ,0 , this.maxSpeed)
            speed *= -.5
            //this.maxSpeed += .1
    }
    dist.setMag(speed)
   // dist.limit(maxForce)
    this.applyDir(dist)
}



