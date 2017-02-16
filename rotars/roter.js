var a = [],
    m = [],
    img;

function preload(){
    img = loadImage("./images/arrow.png");
}


function setup() {
    createCanvas(200,200)
//    img.resize(50, 50)
//    image(img, 0, 0);
    
   // var m = new Mover();
    a = new Attractor();
    b = new Attractor();
}

function draw() {
    a.attract(b)
}
