var pendulum;
var r = 50;
var gravity = 0.01

function setup() {
    createCanvas(600,600)
    background(51)
    pendulum = new Pendulum()
}

function draw() {
    background(51)
	pendulum.update()
    pendulum.display()
}

var Pendulum = function(){
    this.a = 0.0
    this.aVelocity = 0.0
    this.aAcc = 0.001
}

Pendulum.prototype.update = function(){
    translate(width/2, height/2)
    rotate(this.a)
    this.a += this.aVelocity;
    this.aVelocity += this.aAcc;
    this.aVelocity = constrain(this.aVelocity, 0, .01)
    this.aVelocity = constrain(this.aVelocity, 0, .1)
    this.applyForce(gravity)
}

Pendulum.prototype.display = function(){
    noStroke()
    fill(255)
    var a = frameCount/250*PI
    var x = r*2*cos(a)
    var y = r*2*sin(a)
    rect(x, y, r, r)
}

Pendulum.prototype.applyForce = function(f){
    this.aAcc += f
}