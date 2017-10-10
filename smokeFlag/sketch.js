var partciles = [],
    cavasHeight = 0,
    cavasWidth = 0;

function setup() {
    createCanvas(cavasWidth, cavasHeight)
    createParticle()
}

function draw() {
    background(255)    
    for(var i = (partciles.length-1); i>=0; i--){
        partciles[i].fly()
        partciles[i].checkLife()
        partciles[i].display()
    }
}


(function(){
    var w  = window,
    d  = w.document,
    de = d.documentElement,
    db = d.body || d.getElementsByTagName('body')[0];
    
    cavasWidth  = w.innerWidth || de.clientWidth || db.clientWidth,
    cavasHeight  = w.innerHeight|| de.clientHeight|| db.clientHeight;
})()