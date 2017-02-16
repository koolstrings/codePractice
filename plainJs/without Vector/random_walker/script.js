var x=random(300),
    y=random(500),
    xSpeed=random(3)-random(3),
    ySpeed=random(3)-random(3),
    ball;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
playBall();

function playBall(){
    window.requestAnimationFrame(playBall);
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.globalAlpha=0.5;  
    ctx.fillRect(-10,-10,800,600);
    // Turn transparency on
    ctx.closePath();
    ctx.beginPath();
    ctx.globalAlpha = 1
    ctx.strokeStyle= 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    ctx.fillStyle= 'red';
    ctx.arc(x,y,10,0,6.286);
    ctx.fill();
    //ctx.stroke();
    x = x+xSpeed;
    y=y+ySpeed;
    
    xSpeed=random(3)-random(3),
    ySpeed=random(3)-random(3);
}

function random(num){
    return Math.round(Math.random()*num)
}
