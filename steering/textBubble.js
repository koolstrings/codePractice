

function TextBubble(x,y){
    this.pos = createVector(random(width), random(height))
    this.tatgetPos = createVector(x,y)
    this.acc = createVector()
    this.vel = p5.Vector.random2D();
    this.fill = {r:random(255),g:random(255),b:random(255)}
    this.r = 0;
    this.maxSpeed = 10;
    this.maxForce = 1;
}

TextBubble.prototype.activity = function(){
    var reach = this.attract(this.tatgetPos)
    var mouse = createVector(mouseX,mouseY)
    var flee = this.flee(mouse)
    
    reach.mult(1)
    flee.mult(5)
    
    this.applyForce(reach)
    this.applyForce(flee)
    
}

TextBubble.prototype.applyForce = function(f){
    this.acc.add(f)
}

TextBubble.prototype.update = function(){
    this.pos.add(this.vel)
    this.vel.add(this.acc)
    this.acc.mult(0)
}

TextBubble.prototype.display = function(){
    //stroke(255);
    strokeWeight(this.r);
    fill(this.fill.r, this.fill.r, )
    point(this.pos.x, this.pos.y);
}

TextBubble.prototype.attract = function(target){
    var attraction = p5.Vector.sub(target, this.pos)
    var d = attraction.mag();    
    var speed = this.maxSpeed    
    if(d<100){
        speed = map(d, 0, 100, 0, this.maxSpeed)
    }
    attraction.setMag(speed)
    var steer = p5.Vector.sub(attraction,this.vel)
    //steer.limit(this.maxforce);
    steer.normalize()
    
    if(d<8){
        this.r = 8-d
        steer.mult(speed)   
    }
    return steer        
}

TextBubble.prototype.flee = function(from){
    var dis = p5.Vector.sub(from, this.pos)
    var f = dis.mag();
    
    if(f<50){
        dis.setMag(this.maxSpeed)
        dis.mult(-1)
        var fear = p5.Vector.sub(dis, this.vel);
        //fear.limit(this.maxForce);
        fear.normalize()
        return fear
    }else{
        return createVector()
    }
}