var circles = [],
    startRad = 2,
    attempts = 0,
    cont = true,
    baseColors = ["red","yellow","blue","green"]

function setup() {
    createCanvas(1200,600)
    background(0,0,255,50)
    //frameRate(2)
}

function draw() { 
    //background(255,10)
    if(cont){
        findSpace(10); 
        if(circles.length && attempts<500){
            for (var i=0; i<circles.length; i++){

                circles[i].update(i);

                for (var j=0; j<circles.length; j++){
                    if(i!=j){                    
                        circles[i].checkEdge(circles[j]);
                    }
                }

                circles[i].display();
            }
        }
        else{
            noLoop()
        }
    }
}

function mousePressed(){
    cont = !cont;
    console.clear()
    !cont && console.log("paused");
    cont && console.log("resumed")
}

function findSpace(lim){    
    attempts++
    for (var i=lim; i>0; i--){
        var checkCircle = new MyCircle()
        for (var j=0, addthis = false; j<circles.length; j++){
            checkCircle.checkEdge(circles[j]);
        }
        if(checkCircle.canGrow){
            circles.push(checkCircle)            
        }
    }
}


var MyCircle = function(){
    this.rad = 1
    this.CirColor ={r: random(255), g: random(255), b: random(255)}
    this.pos = createVector(random(width), random(height))
    this.canGrow = true
}


MyCircle.prototype.checkEdge = function(other){
    if(this.pos.dist(other.pos)<(this.rad+other.rad)/2 || this.pos.x < this.rad || (this.pos.x + this.rad) > width || this.pos.y<this.rad || (this.pos.y + this.rad) > height){
        this.canGrow = false
    }
}

MyCircle.prototype.update = function(i){
    if(this.canGrow){
        this.rad += 3
    }
}

MyCircle.prototype.display = function(){    
    //noStroke()
    //fill(this.CirColor.r,this.CirColor.g,this.CirColor.b)
    if(this.canGrow){
//        fill(this.CirColor.r,2)
        stroke("red")
        //fill(random(255),random(255),random(255),10)
        //fill(baseColors[round(random(3))])
        fill('yellow')
        ellipse(this.pos.x,this.pos.y,this.rad-3,this.rad-3)
        fill(0,255,0,50)
        ellipse(this.pos.x,this.pos.y,this.rad*0.75,this.rad*0.75)
        rect(width-90,height-50,88,40)
        fill(255,255)
        fill('red')
        text("Attempts: "+(500-attempts), width-85, height-38)
        text("Count: "+circles.length, width-85, height-25)
        text("FrameRate: "+round(frameRate()), width-85, height-12)
    }
}
