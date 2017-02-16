var ball;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
    
ball = new Ball();
moveBall();

function clearBackground(){
    ctx.beginPath();
    ctx.fillStyle="white";
    ctx.globalAlpha=0.5;  
    ctx.fillRect(0,0,600,400);
}

function moveBall(){
    window.requestAnimationFrame(moveBall);
    //clearBackground();
    ball.update()
    ball.checkEdge();   
    ball.move(); 
    ball.display()   
}