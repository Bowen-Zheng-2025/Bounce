/***********************Step 8/9: Make a Bouncing Ball*************************/
//Also, made it possible for the ball to draw a line using drawLine()
  var c = document.getElementById("myCanvas");
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

  var c = document.getElementById("myCanvas");
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

var c = document.getElementById("myCanvas");
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

/********************************Final Product*********************************/
//Note: To use this, comment everything else out
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

 var myImg = new Image(); //assists in loading image onto the screen
     myImg.onload = function (){
      drawRect();
    };

var xVel = Math.floor(Math.random() * (6 - 1) + 1); //fun quirk to change the velocity/movement speed of my object in the x direction
var yVel = Math.floor(Math.random() * (6 - 1) + 1); //fun quirk to change the velocity/movement speed of my object in the y direction
var size = Math.floor(Math.random() * (150 - 50) + 50); //fun quirk to change the image's size
var xPos = Math.floor(Math.random() * (850 - 150) + 150); //fun quirk to change the position of my object in the x direction
var yPos = Math.floor(Math.random() * (350 - 150) + 150); //fun quirk to change the position of my object in the y direction
var rect = {x: xPos, y: yPos, xVel: xVel, yVel: yVel, width: size, height: size}; //master variable: gives all the parameters to change movement, position, and size of the image

function drawRect() {
    myImg.src = "smiley.jpg"; //source where my image is at
    ctx.drawImage(myImg, rect.x, rect.y, rect.width, rect.height);
  }

var lines = [{x:(rect.x+(rect.width/2)),y:(rect.y + (rect.height/2))}]; //variable that I'm storing the coordinates for when the image bounces

function drawLine() {
  ctx.beginPath(); //starts drawing
  for (var i = lines.length - 1; i >= 0; i--) {
    if (i == lines.length-1) {
      ctx.moveTo((rect.x+(rect.width/2)),(rect.y + (rect.height/2))); //draws the start of the line
      ctx.lineTo(lines[i].x,lines[i].y); //ending point for the end of the line to draw to
    }
    else {
      ctx.moveTo(lines[i].x, lines[i].y); //draws the start of the line
      ctx.lineTo(lines[i+1].x,lines[i+1].y); //ending point for the end of the line to draw to
    }
  }
  ctx.stroke(); //finish drawing the line
}

function draw() {
 ctx.clearRect(0, 0, c.width, c.height); //clears the canvas so that images won't continue to remain on the canvas
 drawLine(); //draws the line following the image
 drawRect(); //draws the fun image on the canvas
 if((rect.x + rect.xVel > c.width) || (rect.x + rect.xVel < 0) || (rect.x +rect.width + rect.xVel > c.width) || (rect.x + rect.xVel < 0)) { //checks if it goes out of bounds in x direction
   rect.xVel = -rect.xVel; //if hit boundary, go opposite direction
   lines.push({x:(rect.x+(rect.width/2)),y:(rect.y + (rect.height/2))}); //push the coords to when the object hits the wall so it can draw the line
 }
 if((rect.y + rect.yVel > c.height) || (rect.y + rect.yVel < 0) || (rect.y+rect.height + rect.yVel > c.height) || (rect.y + rect.yVel < 0)) { //checks if it goes out of bounds in y direction
   rect.yVel = -rect.yVel; //if hit boundary, go opposite direction
   lines.push({x:(rect.x+(rect.width/2)),y:(rect.y + (rect.height/2))}); //push the coords to when the object hits the wall so it can draw the line
 }
 rect.x += rect.xVel; //continually increment the position of the object in the x direction to give illusion of the image moving
 rect.y += rect.yVel; //continually increment the position of the object in the y direction to give illusion of the image moving
}

setInterval(draw, 10); //actually implements everything
