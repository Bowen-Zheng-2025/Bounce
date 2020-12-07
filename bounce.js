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

function circles(){ // fancy loop i should use for the animation part of the bouncing ball. circle center + radius +1 is out of bounds
  var interval = setInterval(step,100);
  var counter = 0;

  function step(){ //this is within the circles namespace.
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


circles();
