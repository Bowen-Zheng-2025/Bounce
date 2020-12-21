/*var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function circleFunctionNoClear() {
  var rad = Math.floor(Math.random() * 50) +1;
  var radX = c.width - rad*2;
  var radY = c.height - rad*2;
  var valX = Math.floor(Math.random()*radX) + rad;
  var valY = Math.floor(Math.random()*radY) + rad;
  ctx.beginPath();
  ctx.arc(valX, valY, rad, 0, 2 * Math.PI);
  ctx.stroke();
}

function gotRect(){
  var width = Math.floor(Math.random() * 100);
  var radX = c.width - width;
  var radY = c.height - width;
  var valX = Math.floor(Math.random() * radX);
  var valY = Math.floor(Math.random() * radY);
  ctx.beginPath();
  ctx.rect(valX, valY, width, width);
  ctx.stroke();
}

function circles(){
  var interval = setInterval(step,100);
  var counter = 0;

  function step(){
    if ((counter % 20) == 0) {
      ctx.clearRect(0, 0, c.width, c.height);
    }
    if ((counter % 2) == 0) {
      circleFunctionNoClear();
    }
    else {
      gotRect();
    }
    counter ++;
  }
}

/***********************Step 8/9: Make a Bouncing Ball*************************/
//Also, made it possible for the ball to draw a line using drawLine()
/*  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  function randomizer (min, max){ //made a helper function to generate random numbers between a minimum and a maximum for fun
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomNum (){ //utilized the helper function from before to make this interesting when refreshing page
    var ball = {xPos: 20, yPos: 20, rad: 20, xVel: 1, yVel: 1}; //started a variable and established some keys that will be changed later
    ball.xVel = randomizer(1, 10); //randomlu manipulating my increments for ball movement in the x-direction
    ball.yVel = randomizer(1, 10); //randomly manipulating my increments for ball movement in the y-direction
    ball.rad = randomizer(5,50); //randomly changing the size of the ball
    var numX = c.width-ball.rad; // making sure the ball does not go outside the width boundary
    var numY = c.height-ball.rad; //making sure the ball does not go outside of the height boundary
    var zero = 0+ball.rad; //start coordinate for both the x and y direction, but making sure the ball does not go outside of boundary
    ball.xPos = randomizer(zero, numX); //randomly generating the end coordinate in the x-direction
    ball.yPos = randomizer(zero, numY); //randomly generating the end coordinate in the y-direction

    var lines = [{x:ball.xPos ,y:ball.yPos}]; //object within array for easy manipulation of x and y position in the for loop below
    function drawLine() { //when ball moves, a line will be drawn and stay there
      ctx.beginPath(); //starting circle drawing
      if ((ball.xPos + ball.rad + ball.xVel > c.width) || (ball.xPos + ball.xVel < ball.rad)) { //lines will be drawn at the boundaries to connect with other instances the ball bounces
        lines.push({x: ball.xPos, y: ball.yPos}); //pushing the coordinates when the ball hits the wall for easy retrieval later
      }
      if ((ball.yPos + ball.rad + ball.yVel > c.height) || (ball.yPos + ball.yVel < ball.rad)) { //lines will be drawn at the boundaries to connect with other instances the ball bounces
        lines.push({x: ball.xPos, y: ball.yPos}); //pushing the coordinates when the ball hits the wall for easy retrieval later
      }
      for (var i = lines.length - 1; i >= 0; i--) { //doing everything backwards so it's easier to handle
        if (i == lines.length-1) { //only doing the following for the first time it loops
          ctx.moveTo(ball.xPos, ball.yPos); //gives starting point for the line
          ctx.lineTo(lines[i].x, lines[i].y); //gives the ending point for the line to draw to
        }
        else { //rest of the time will be doing this
          ctx.moveTo(lines[i].x, lines[i].y); //now uses the end coordinates from lineTo as the starting coordinates of the new line
          ctx.lineTo(lines[i+1].x, lines[i+1].y); //+1 uses the next set of coordinates to form the end coordinatesof the new line
        }
      }
      ctx.stroke(); //finishes drawing the circle
    }

    function circles(){
      var interval = setInterval(step,10); //almost like a loop that redraws the circle every 10 milliseconds to give the circle the illusion of moving

      function step(){ //within the circles namespace and is used in the setInterval
        ctx.clearRect(0, 0, c.width, c.height); //since it's a loop, this clears the canvas or else a lot of circles will be draw each time this function loops
        ctx.beginPath(); //starts drawing the cirlcle
        ctx.arc(ball.xPos, ball.yPos, ball.rad, 0, 2 * Math.PI); //gives the x and y coordinates with the radius of the circle parameters to draw the actual circle
        ctx.stroke(); //finishes drawing the circle
        if ((ball.xPos + ball.rad + ball.xVel > c.width) || (ball.xPos + ball.xVel < ball.rad)) { //makes sure that the circle doesn't go out of bounds
          ball.xVel = -ball.xVel; //if circle is on the verge of going out in the x-direction, change the direction
        }
        if ((ball.yPos + ball.rad + ball.yVel > c.height) || (ball.yPos + ball.yVel < ball.rad)) { //makes sure that the circle doesn't go out of bounds
          ball.yVel = -ball.yVel; //if circle is on the verge of going out in the y-direction, change the direction
        }
        ball.xPos += ball.xVel; //keeps incrementing so that the circle's position is changing over time and looks like the circle is moving in the x direction
        ball.yPos += ball.yVel; //keeps incrementing so that the circle's position is changing over time and looks like the circle is moving in the y direction
        drawLine(); //draws the line after the circle
      }
    }
    circles(); //makes the circle appear on the canvas on the homepage
  }
  randomNum(); //makes the circle appear on the canvas on the homepage

/***************Step 10: Replacing the circle with a rectangle*****************/

  /*var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var rect = {xPos: 20, yPos: 20, width: 100, xVel: 1, yVel: 1}; //gives the parameters for drawing the rectangle and movement

  function rectAngle(){
    var interval = setInterval(step,10); //almost like a loop that redraws the circle every 10 milliseconds to give the rectangle the illusion of moving

    function step(){ //this is within the circles namespace.
      ctx.clearRect(0, 0, c.width, c.height); //clears the canvas so that there aren't infinite amount of rectangles on the canvas
      ctx.beginPath(); //starts drawing the rectangle
      ctx.rect(rect.xPos, rect.yPos, rect.width, rect.width); //parameters for drawing the rectangle
      ctx.stroke(); //finish drawing the rectangle
      if ((rect.xPos + rect.width + rect.xVel > c.width) || (rect.xPos == 0)) { //makes sure that the rectangle doesn't go out of bounds in the x direction
        rect.xVel = -rect.xVel; //if it does, change the direction of the movement of the rectangle
      }
      if ((rect.yPos + rect.width + rect.xVel > c.height) || (rect.yPos == 0)) { //makes sure that the rectangle doesn't go out of bounds in the y direction
        rect.yVel = -rect.yVel; //if it does, change the direction of the movement of the rectangle
      }
      rect.xPos += rect.xVel; //keeps incrementing to change the rectangle's position over time in the x direction
      rect.yPos += rect.yVel; //keeps incrementing to change the rectangle's position over time in the y direction
    }
  }

  rectAngle(); //actually draws the rectangle on the canvas

/*******Step 10 of Assignment: Replacing the Rectangle with a Face/Emoji*******/

/*var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var rect = {xPos: 250, yPos: 125, width: 100, height: 100, xVel: 1, yVel: 5}; //gives the parameters for drawing the rectangle, position, and movement

var myImg = new Image(); //this assists in loading image onto screen
    myImg.onload = function (){
     drawPic();
    };

function drawPic() { //this gets the image using the myImg.src
   myImg.src = "smiley.jpg";
   ctx.drawImage(myImg, rect.xPos, rect.yPos, rect.width, rect.height); //gives parameters for what I want my image to have
 }

function draw() {
  myImg.onload = function () { //function within a function to have the canvas draw the actual image
    ctx.drawImage(myImg, rect.xPos, rect.yPos, rect.width, rect.height); //parameters for drawing the image
  }
  myImg.src = "smiley.jpg"; //the picture I want to use
}

function moveMyImg() { //moves the image now
  ctx.clearRect(0,0, c.width, c.height); //clears the canvas so that image doesn't repeatedly appear after each loop
  drawPic();
  if ((rect.xPos + rect.width + rect.xVel > c.width) || (rect.xPos == 0)) { //makes sure the image doesn't go out of bounds in the x direction
    rect.xVel = -rect.xVel; //if it does, change the direction
  }
  if ((rect.yPos + rect.width + rect.xVel > c.height) || (rect.yPos == 0)) { //makes sure the image doesn't go out of bounds in the y direction
    rect.yVel = -rect.yVel; //if it does, change the direction
  }
  rect.xPos += rect.xVel; //increments the position of the image in the x direction to give the illusion of movement
  rect.yPos += rect.yVel; //increments the position of the image in the y direction to give the illusion of movement
}

setInterval(draw, 10); //actaully draws the image on the canvas
setInterval(moveMyImg, 10); //actually does the loop to make the image move on the canvas
*/
/********************************Final Product*********************************/
//Note: To use this, comment everything else out
/*
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

 var myImg = new Image(); //assists in loading image onto the screen
     myImg.onload = function (){
      drawRect();
    };

var xVel = Math.floor(Math.random() * (6 - 1) + 1);
var yVel = Math.floor(Math.random() * (6 - 1) + 1);
var size = Math.floor(Math.random() * (150 - 50) + 50);
var xPos = Math.floor(Math.random() * (850 - 150) + 150);
var yPos = Math.floor(Math.random() * (350 - 150) + 150);
var rect = {x: xPos, y: yPos, xVel: xVel, yVel: yVel, width: size, height: size};

function drawRect() {
    myImg.src = "smiley.jpg"; //source where my image is at
    ctx.drawImage(myImg, rect.x, rect.y, rect.width, rect.height);
  }

var lines = [{x:(rect.x+(rect.width/2)),y:(rect.y + (rect.height/2))}];

function drawLine() {
  ctx.beginPath();
  for (var i = lines.length - 1; i >= 0; i--) {
    if (i == lines.length-1) {
      ctx.moveTo((rect.x+(rect.width/2)),(rect.y + (rect.height/2)));
      ctx.lineTo(lines[i].x,lines[i].y);
    }
    else {
      ctx.moveTo(lines[i].x, lines[i].y);
      ctx.lineTo(lines[i+1].x,lines[i+1].y);
    }
  }
  ctx.stroke();
}

function draw() {
 ctx.clearRect(0, 0, c.width, c.height);
 drawLine();
 drawRect();
 if((rect.x + rect.xVel > c.width) || (rect.x + rect.xVel < 0) || (rect.x +rect.width + rect.xVel > c.width) || (rect.x + rect.xVel < 0)) {
   rect.xVel = -rect.xVel;
   lines.push({x:(rect.x+(rect.width/2)),y:(rect.y + (rect.height/2))});
 }
 if((rect.y + rect.yVel > c.height) || (rect.y + rect.yVel < 0) || (rect.y+rect.height + rect.yVel > c.height) || (rect.y + rect.yVel < 0)) {
   rect.yVel = -rect.yVel;
   lines.push({x:(rect.x+(rect.width/2)),y:(rect.y + (rect.height/2))});
 }
 rect.x += rect.xVel;
 rect.y += rect.yVel;
}

setInterval(draw, 10);
*/
/*
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
/*var size = (Math.abs(c.width - c.height)) / 10;
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
*/

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
