var Attractor =function(){
    this.pos = p5.Vector.random2D()
    this.velocity = createVector()
    this.acceleration = createVector()
    
    this.attract = function(other){
        this.pos.sub(other.pos)
        var dist = this.pos.copy()
        console.log(dist)
    }
    
}