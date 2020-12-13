  var c = document.getElementById("myCanvas");
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
  // Note to future self: I put everything else in the 14-Dec-Homework.js folder.
  var rect = {xPos: 20, yPos: 20, width: 100, xVel: 1, yVel: 1};

  function rectAngle(){
    var interval = setInterval(step,10);

    function step(){ //this is within the circles namespace.
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.rect(rect.xPos, rect.yPos, rect.width, rect.width);
      ctx.stroke();
      if ((rect.xPos + rect.width + rect.xVel) > c.width) {
        rect.xVel = -rect.xVel;
      }
      if (rect.xPos == 0) {
        rect.xVel = -rect.xVel;
      }
      if ((rect.yPos + rect.width + rect.xVel) > c.height) {
        rect.yVel = -rect.yVel;
      }
      if (rect.yPos == 0) {
        rect.yVel = -rect.yVel;
      }
      rect.xPos += rect.xVel;
      rect.yPos += rect.yVel;
    }
  }

  var ball = {xPos: 20, yPos: 20, rad: 20, xVel: 1, yVel: 2};
  var lines = [{x:ball.xPos ,y:ball.yPos}];
  function drawLine() {
    ctx.beginPath();
    if ((ball.xPos + ball.rad + ball.xVel > c.width) || (ball.xPos + ball.xVel < ball.rad)) {
      lines.push({x:ball.xPos, y:ball.yPos});
    }
    if ((ball.yPos + ball.rad + ball.yVel > c.height) || (ball.yPos + ball.yVel < ball.rad)) {
      lines.push({x:ball.xPos ,y:ball.yPos});
    }
    for (var i = lines.length - 1; i >= 0; i--) {
      if (i == lines.length-1) {
        ctx.moveTo(ball.xPos,ball.yPos);
        ctx.lineTo(lines[i].x,lines[i].y);
      }
      else {
        ctx.moveTo(lines[i].x, lines[i].y);
        ctx.lineTo(lines[i+1].x, lines[i+1].y);
      }
    }
    ctx.stroke();
  }

  function circles(){
    var interval = setInterval(step,1);

    function step(){ //this is within the circles namespace.
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.arc(ball.xPos, ball.yPos, ball.rad, 0, 2 * Math.PI);
      ctx.stroke();
      if ((ball.xPos + ball.rad + ball.xVel > c.width) || (ball.xPos + ball.xVel < ball.rad)) {
        ball.xVel = -ball.xVel;
      }
      if ((ball.yPos + ball.rad + ball.yVel > c.height) || (ball.yPos + ball.yVel < ball.rad)) {
        ball.yVel = -ball.yVel;
      }
      ball.xPos += ball.xVel;
      ball.yPos += ball.yVel;
      drawLine();
    }
  }

  circles();
