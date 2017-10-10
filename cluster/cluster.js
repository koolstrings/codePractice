var bubble = [],
    count = 50

function setup() {
    createCanvas(screen.availWidth/1.3, screen.availHeight/1.5, 20);    
    for(var i=0; i<count; i++){
        var rad = round(random(10,30))
        bubble.push(new Bubble(random(width),random(height),rad))
    }
}


function draw(){    
    background(51)
    for(var i=0; i<count; i++){
        bubble[i].clusterBehavior(i)
        bubble[i].update()
        bubble[i].display()    
    } 
}