var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



var myImg = new Image();
var myImgPos = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
}

myImg.src = "https://cdn.discordapp.com/attachments/786972098996076564/788086951387332658/artworks-000665544928-bnkinw-t500x500.png";

var x = 0;
var y = 0;
var dx = 50;
var dy = -50;


function bounce() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.drawImage(myImg, x, y, myImgPos.width, myImgPos.height);


    if(x + dx > myCanvas.width-50 || x + dx < 0) {
       dx = -dx;
   }
   if(y + dy > myCanvas.height-50 || y + dy < 0) {
       dy = -dy;
   }
    x += dx;
    y += dy;
}


setInterval(bounce, 100);
