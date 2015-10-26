
var Fractal = function(coreAngle,anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal,duration){
   coreAngle = parseInt(document.getElementById('coreAngle').value)
   console.log("angle is " + coreAngle);
  anglechange = parseInt(document.getElementById('anglechange').value)
    console.log("anglechange:"+ anglechange);
  depth = parseInt(document.getElementById('depth').value)
    console.log("depth :" + depth);
  lineLengthChange = parseInt(document.getElementById('lineLengthChange').value)
    console.log("lineLengthChange  " + lineLengthChange);
  lineLengthLimit = parseInt(document.getElementById('lineLengthLimit').value)
    console.log("lineLengthLimit: " + lineLengthLimit);
  fractalTotal = parseInt(document.getElementById('fractalTotal').value)
    console.log("fractalTotal: " + fractalTotal);
  duration= parseInt(document.getElementById('duration').value )

  var screenWidth = $('body').width()
  var screenHeight = $('body').height()
  var createCanvas = document.createElement("canvas")
  createCanvas.width = screenWidth;
  createCanvas.height = screenHeight;
  createCanvas.id = "canvas";
  createCanvas.background = 'black';
  document.body.appendChild(createCanvas);
  var elem = document.getElementById('canvas');
  var context = elem.getContext('2d');
  var colors1 =[getRandomColor(3),getRandomColor(3),getRandomColor(3),getRandomColor(3),getRandomColor(3)]

  var colorCount= 0;
  var lineLength = 10;
  var angle = 0;
  var canvasx = Math.floor((Math.random() * (screenWidth*.5 -400)) + 400);

  var canvasy = Math.floor((Math.random() * (screenHeight*.5 -400)) + 400);

  var fractalCount = 0;
  var fractalInterval = setInterval(function(){changeTree(coreAngle,anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal)}, duration)
  function changeTree(coreAngle,anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal){
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
      context.strokeStyle = colors1[colorCount];
      context.lineWidth = 1;
      var deg_to_rad = Math.PI / coreAngle ;
      if (depth !== 0){
        var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * lineLength );
        var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * lineLength );
        drawLine(x1, y1, x2, y2, depth);
        drawTree(x2, y2, angle - 40, depth - 1);
        drawTree(x2, y2, angle + 40, depth - 1);
      }


      }
      if (colorCount=== 7){colorCount=0};
      if (angle=== 360){angle=0};
      if (lineLength === lineLengthLimit){lineLength=0};
      if (fractalCount===fractalTotal){
        clearInterval(fractalInterval);
        context.fillStyle = "black";
        context.fillRect(0, 0, screenWidth,screenHeight);
        Fractal(coreAngle,anglechange,depth, lineLengthChange,lineLengthLimit,fractalTotal,duration);
       }
    }
  function getRandomColor(brightness){
    //6 levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
  }




}
//Fractal(100,2,2,500,550,100);
