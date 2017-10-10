
var h = 75;
var x = 0;
var y = 0;

function setup() {
    createCanvas(1250, 650);
}

function draw(){
    background(51)
    fill(255, 30)
    ellipse(width/2, height/2, 25, 25)
    ellipse(mouseX, mouseY, 25, 25)
    var d = dist(mouseX, mouseY, width/2, height/2)/2
    
    x = width/2 + (d<h ? sin(acos(d/h))*h :h)*( mouseX < width/2 ? -1 : 1 )
    y = height/2 + (d<h ? d : h)*( mouseY < height/2 ? -1 : 1 )
    
    ellipse(x, y, 25, 25)
    console.log(d)
    
}
