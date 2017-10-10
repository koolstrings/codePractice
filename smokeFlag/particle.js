var Particle = function(x,y,col,blowForce){
    this.initialPos = {x:x,y:y}
    this.pos = createVector(x,y)
    this.col = col
    this.vel = createVector()
    this.life = 255
    this.dir = createVector()
    this.velLimt = round(random(2,7))
    this.getDir()
    this.r = random(5)
    this.f = blowForce
}

Particle.prototype.fly = function(i){
    this.vel.add(this.dir)
    this.vel.limit(this.velLimt/2)
    this.pos.add(this.vel)
    this.dir.mult(0)
    this.updateLife()
    this.applyForce(this.f) 
}

Particle.prototype.getDir = function(){
    var xDir = random()
    var yDir = random(1,3)        
    var flyTo = createVector()
    if(yDir>xDir){
        yDir *= -1
        flyTo.add(createVector(xDir, yDir))
    }
    this.dir.add(flyTo)
}

Particle.prototype.updateLife = function(){
    this.life--
}

Particle.prototype.display = function(){
    var r = this.col.r, g = this.col.g, b = this.col.b, l = this.life, a = this.a;
    
    fill(r,g,b,100)
    
  //  noStroke()
    //stroke(0,255,255,10)
    stroke(r,g,b,100)
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
    
//    fill(255,255,0,80)
//    ellipse(this.pos.x, this.pos.y, this.r, this.r*2)
    
    
    this.r -= .01
}

Particle.prototype.applyForce = function(f){
    this.dir.add(f)
}

Particle.prototype.checkLife = function(){
    if(this.pos.x<0 || this.pos.x>width || this.pos.y<0 || this.pos.y>(this.initialPos.y+random(50)) || this.life<5 || this.r<0){
        this.initialize()
    }
}

Particle.prototype.initialize = function(){
        //this.pos = createVector(this.initialPos.x, this.initialPos.y)
        //this.pos = createVector(mouseX, mouseY)
        this.vel = p5.Vector.random2D()
        this.vel.y *= -1
        this.life = 255
        this.dir = createVector()
        this.dir.mult(0)
        this.getDir()
        this.velLimt = round(random(5))
        this.r = random(5)
        this.a = random(510)
}
