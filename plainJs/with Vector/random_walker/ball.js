var rad = 15;
var width = 600;
var height = 400;
var color = 0;
var count = 0;

function Ball(){
    this.velocity = new vector(rad,rad);
    this.location = new vector(rad,rad);
}

Ball.prototype.move = function(){    
    this.location.add(this.velocity)
}

Ball.prototype.checkEdge = function(){
    if(this.location.x > width){
        this.location.x = width-rad
    }else if(this.location.x < rad){
        this.location.x = rad;
    }
    if(this.location.y > height){
        this.location.y = height-rad
    }else if(this.location.y < rad){
        this.location.y = rad;
    }
}

Ball.prototype.display = function(){ 
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.globalAlpha = .08
    ctx.fillRect(0,0,600,400)
    ctx.globalAlpha = random(10)/10
    //ctx.strokeStyle= 'red';
    ctx.fillStyle= 'rgb('+random(color)+','+random(color)+','+random(color)+')';
    //ctx.fillStyle= 'rgb('+color+','+color+','+color+')';
    //ctx.fillStyle= 'red';
    ctx.arc(this.location.x,this.location.y,random(rad),0,6.286);
    //ctx.stroke();
    ctx.fill();
    if(color<125){
        color = 125
    }else{
      color = (color+1)%255;  
    }
    //color = (color+1)%255;
}

Ball.prototype.update = function(){
    this.velocity = new vector(rad,rad)
    var v1 = new vector(random(1),random(1));
    var v2 = new vector(random(1),random(1));
    v1.sub(v2)    
    this.velocity.multVector(v1)
}