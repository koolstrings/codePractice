var count = 50

function createParticle(){
    for(var i = 0; i<count; i++){     
        setInterval(function(){ 
                 
        var gr = random(255);
        var col = {r:0,g:0,b:0,a:50};
        var flagBand = random();
                    
        var xPos = mouseX;
        var yPos = mouseY;
             
        var blowForce;
        
        if(flagBand > .5){
            col = getColors(255,140,0,5)
            blowForce = createVector(4,3)
            yPos += 15.5
            xPos += 11
        }else if(flagBand>.48 && flagBand<.5){
            col = getColors(0,0,255,10)
            blowForce = createVector(3,3)
            yPos += 19
            xPos += 9
        }else{
            col = getColors(0,255,0,255)
            blowForce = createVector(2,3)
            yPos += 20
            xPos += 3
        }          
            
        var newPartcile = new Particle(xPos, yPos, col, blowForce)
        
        partciles.push(newPartcile)
        checkParticleSize()  
        },100*i*i)
    }
}

function checkParticleSize(){
    if(partciles.length>count){
        partciles.splice(0,1)
    }
}

function getColors(r,g,b,a){    
    var col = {
        r:r,
        g:g,
        b:b,
        a:a
    }
    return col
}