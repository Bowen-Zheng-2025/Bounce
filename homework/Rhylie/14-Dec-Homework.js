var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rl = document.getElementById("rainbowLines");
var rb = document.getElementById("rainbowBall");
/*
var x = c.width / 20; //These 2 variables determine the starting circles location, in this case, the top right of the screen.
var y = c.height / 20;

var dx = 2; //These variables will be used later to change the position of the circle.
var dy = 4; //Changing both of these numbers will also change the speed of the circle (in other words, how many units the circle moves per frame).

var size = (Math.abs(c.width - c.height)) / 10;
if (size == 0) { size = 25; }
var ballSize = Math.floor(Math.random() * size - 5) + 6; //Sets the circle's radius.
*/
var size = (Math.abs(c.width - c.height)) / 10;
if (size == 0) { size = 25; };
var one = Math.floor(Math.random()*13)+2;
var two = Math.floor(Math.random()*11)+4;
 var myImg = new Image();
     myImg.onload = function (){
      drawSqr();
    };
    myImg.src = "phoenixAced.png";

var sqr = {x:c.width / 2, y:c.height / 2, dx:one, dy:two, width:80, height:80};

function drawSqr() {
   var rainbow = rb.checked;

   if (rainbow == true) {
    //code
    myImg.src = "image2.gif";
  }else{
    myImg.src = "phoenixAced.png";
  }
        ctx.drawImage(myImg, sqr.x, sqr.y, sqr.width, sqr.height);
}
  var lines = [{x:(sqr.x+(sqr.width/2)),y:(sqr.y + (sqr.height/2))}];

function lineDraw() {
  ctx.beginPath();
  var rainbow = rl.checked;
  var colors = ["red", "green", "blue", "violet", "pink", "cyan", "yellow", "orange"];
  for (var i = lines.length - 1; i >= 0; i--) {
  if (i == lines.length-1) {
    ctx.moveTo((sqr.x+(sqr.width/2)),(sqr.y + (sqr.height/2)));
    ctx.lineTo(lines[i].x,lines[i].y);
  }
  else {
    ctx.moveTo(lines[i].x, lines[i].y);
    ctx.lineTo(lines[i+1].x,lines[i+1].y);

  }
  if (rainbow == true) {
    //code
  for (var j = 0; j< 10; j++) {
    var color = colors[Math.floor(Math.random()*colors.length)];
  }
  ctx.strokeStyle = color;
  }else{
  ctx.strokeStyle = "black";
  }
  }

  ctx.stroke();
}
function draw() {
 ctx.clearRect(0, 0, c.width, c.height); //Clears the canvas every frame, so a new circle can be drawn.
 lineDraw();
 drawSqr();
 if((sqr.x + sqr.dx > c.width) || (sqr.x + sqr.dx < 0)) { //If the circle's x position exceeds the width of the canvas...
   sqr.dx = -sqr.dx; //Its x direction will be flipped.
   lines.push({x:(sqr.x+(sqr.width/2)),y:(sqr.y + (sqr.height/2))});
 }
 if(((sqr.x +sqr.width) + sqr.dx > c.width) || (sqr.x + sqr.dx < 0)) { //If the circle's x position exceeds the width of the canvas...
   sqr.dx = -sqr.dx; //Its x direction will be flipped.
   lines.push({x:(sqr.x+(sqr.width/2)),y:(sqr.y + (sqr.height/2))});
 }

 if((sqr.y + sqr.dy > c.height) || (sqr.y + sqr.dy < 0)) { //If the circle's y position exceeds the height of the canvas...
   sqr.dy = -sqr.dy; //Its y direction will be flipped.
   lines.push({x:(sqr.x+(sqr.width/2)),y:(sqr.y + (sqr.height/2))});
 }
 if(((sqr.y+sqr.height) + sqr.dy > c.height) || (sqr.y + sqr.dy < 0)) { //If the circle's y position exceeds the height of the canvas...
   sqr.dy = -sqr.dy; //Its y direction will be flipped.
   lines.push({x:(sqr.x+(sqr.width/2)),y:(sqr.y + (sqr.height/2))});
 }

 sqr.x += sqr.dx;
 sqr.y += sqr.dy;
}

setInterval(draw, 35);
