var Fractal = function(anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal,duration){
  anglechange = document.getElementById('anglechange').value
  console.log(anglechange)
  depth = document.getElementById('depth').value.step="1";
  console.log(depth)
  lineLengthChange = document.getElementById('lineLengthChange').value
   console.log(lineLengthChange)
  lineLengthLimit = document.getElementById('lineLengthLimit').value
   console.log(lineLengthLimit)
  fractalTotal = document.getElementById('fractalTotal').value
   console.log(fractalTotal)
  duration= document.getElementById('duration').value

  var screenWidth = $('body').width()
  var screenHeight = $('body').height()
  var createCanvas = document.createElement("canvas")
  createCanvas.width = screenWidth;
  createCanvas.height = screenHeight;
  createCanvas.id = "canvas";
  createCanvas.background = "#585555";
  document.body.appendChild(createCanvas);
  var elem = document.getElementById('canvas');
  var context = elem.getContext('2d');
  var colors1 = [ getRandomColor(), getRandomColor(),getRandomColor(),getRandomColor()]
  var colorCount= 0;
  var lineLength = 10;
  var angle = 0;
  var canvasx = Math.floor((Math.random() * (screenWidth*.5 -400)) + 400);

  var canvasy = Math.floor((Math.random() * (screenHeight*.5 -400)) + 400);

  var fractalCount = 0;
  var fractalInterval = setInterval(function(){changeTree(anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal)}, duration)
  function changeTree(anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal){
    context.beginPath();
    drawTree(canvasx, canvasy, angle, depth);
    context.closePath();
    context.stroke();
    angle+=anglechange;
    colorCount +=1;
    depth+=1;
    lineLength +=lineLengthChange;
    fractalCount++;
    function drawLine(x1, y1, x2, y2){
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
    }
    function drawTree(x1, y1, angle, depth){
      context.strokeStyle = colors1[colorCount]
      context.lineWidth = 1;
      var deg_to_rad = Math.PI / 14 ;
      if (depth !== 0){
        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * lineLength );
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * lineLength );
        drawLine(x1, y1, x2, y2, depth);
        drawTree(x2, y2, angle - 40, depth - 1);
        drawTree(x2, y2, angle + 40, depth - 1);
      }
      if (colorCount=== 5){colorCount=0};
      if (angle=== 360){angle=0};
      if (lineLength === lineLengthLimit){lineLength=0};

      }
      if (fractalCount===fractalTotal){
        clearInterval(fractalInterval);
        context.fillStyle = "#D0D0D0";
        context.fillRect(0, 0, screenWidth,screenHeight);
        Fractal(anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal,duration);
       }
    }
    function getRandomColor() {
      function c() {
        return Math.floor(Math.random()*250).toString(16)
      }
      return "#"+c()+c()+c();
    }


}
//Fractal(100,2,2,500,550,100);
