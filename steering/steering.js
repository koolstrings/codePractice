var myFont;
var textBubble = []
function preload() {
  myFont = loadFont('assets/CaveatBrush-Regular.ttf')
}

function setup() {
    createCanvas(screen.availWidth/1.3, screen.availHeight/1.5);
    fill('#ED225D');
    textFont(myFont);
    textSize(300);
    //text('Pawan', 150, 250);
    
    var textPoints = myFont.textToPoints("Happy B'Day Anshuman!!", 150, 250, 192, {
        sampleFactor: 0.25
    })
    
    for(var i = 0; i<textPoints.length; i++){
        var pt = textPoints[i]
        textBubble.push(new TextBubble(pt.x, pt.y))
    }
}

function draw(){    
    background(51)
    for(var i = 0; i<textBubble.length; i++){
        textBubble[i].activity()
        textBubble[i].update()
        textBubble[i].display()
    }
}
