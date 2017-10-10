var circles = [],
    startCir
    startRad = 2
    attemps = 0
    cont = true

function setup() {
    createCanvas(1600,350)
    //frameRate(2)
}

function draw() { 
    addNew(10);    
    if(circles.length && attemps < 1000 && cont){
        for (var i=0; i<circles.length; i++){
            circles[i].update();
            circles[i].display();
        }
        attemps++
    }
}

function mousePressed(){
    console.log(attemps)
    cont = !cont
}

function addNew(lim){
    for (var i=0; i<lim; i++){        
        var circ = new MyCircle()    
        circles.push(circ)
    }
}


var MyCircle = function(){
    this.rad = 1
    this.CirColor ={r: random(255), g: random(255), b: random(255)}
    this.pos = createVector(random(width), random(height))
    this.canGrow = true
}

MyCircle.prototype.update = function(){
    if(this.canGrow && this.rad<100){
        this.rad += .4
    }
}

MyCircle.prototype.display = function(){    
    noStroke()
    fill(this.CirColor.r,this.CirColor.g,this.CirColor.b,2)
    ellipse(this.pos.x,this.pos.y,this.rad,this.rad)
}
