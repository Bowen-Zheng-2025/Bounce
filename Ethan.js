var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



var x = 10;
var y = 10;
var dx = 2;
var dy = -2;
var ballRadius = 10;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
}

function bounce() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    drawBall();

    if(x + dx > myCanvas.width-ballRadius || x + dx < ballRadius) {
       dx = -dx;
   }
   if(y + dy > myCanvas.height-ballRadius || y + dy < ballRadius) {
       dy = -dy;
   }
    x += dx;
    y += dy;
}

setInterval(bounce, 10);
