
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var rad = 50;
  var xVal = rad;
  var yVal = rad;
  var xVelocity = 3;
  var yVelocity = 3;

  function circleFunctionNoClear() {
    context.beginPath();
    context.arc(xVal, yVal, rad, 0, 2 * Math.PI);
    context.stroke();
  }

  function circleBounce(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    circleFunctionNoClear();
    if (xVal+xVelocity+rad > canvas.width) {
      xVal = -xVelocity;
    }
    if (yVal+yVelocity+rad > canvas.height) {
      yVal = -yVelocity;
    }
    xVal += xVelocity;
    yVal += yVelocity;
  }
  setInterval(circleBounce, 100);
