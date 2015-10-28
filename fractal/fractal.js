
var Fractal = function(){
  $(document).keydown(function(e){
   if(e.keyCode == 39){
    $('canvasx').attr(canvasx+=50)
  }
    if(e.keyCode == 37){
     $('canvasx').attr(canvasx-=50)
   }
   if(e.keyCode == 38){
     $('canvasy').attr(canvasy-=50)
   }  if(e.keyCode == 40){
     $('canvasy').attr(canvasy+=50)
   }
   if(e.keyCode == 17){
    $('depth').attr(depth+=1)
  }
  })

  //getting value from range input
     coreAngle = parseInt(document.getElementById('coreAngle').value)
     anglechange = parseInt(document.getElementById('anglechange').value)
     depth = parseInt(document.getElementById('depth').value)
     lineThickness = parseInt(document.getElementById('lineThickness').value)
     lineLengthLimit = parseInt(document.getElementById('lineLengthLimit').value)
     fractalTotal = parseInt(document.getElementById('fractalTotal').value)
     duration= parseInt(document.getElementById('duration').value )




 //setting up the canvas
   var screenWidth = $('body').width()
   var screenHeight = $('body').height()
   var createCanvas = document.createElement("canvas")
   createCanvas.width = screenWidth;
   createCanvas.height = screenHeight;
   createCanvas.id = "canvas";
   createCanvas.background = getRandomColor(5);
   var fractaldiv = document.getElementById("fractal")
   fractaldiv.appendChild(createCanvas);
   var elem = document.getElementById('canvas');
   var context = elem.getContext('2d');
   //declaring variables
   var colors1 =[getRandomColor(6),getRandomColor(2),getRandomColor(2),getRandomColor(2)]
   var colorCount= 0;
   if (document.getElementById('zoom').checked) {
           var lineLength=0;
   }
   else{ var lineLength = lineLengthLimit;
             }

   var angle = 0;
   var canvasx = Math.floor((Math.random() * (screenWidth*.5 -200)) + 400);
   var canvasy = Math.floor((Math.random() * (screenHeight*.5 -200)) + 400);
   var fractalCount = 0;
   var fractalInterval = setInterval(function(){changeTree(coreAngle,anglechange,depth, lineThickness,lineLengthLimit,fractalTotal)}, duration)
   //printing a new branch at different angle
  function changeTree(coreAngle,anglechange,depth, lineThickness,lineLengthLimit,fractalTotal){
      context.beginPath();
      drawBranch(canvasx, canvasy, angle, depth);
      context.closePath();
      context.stroke();
      angle-=anglechange;
      colorCount +=1;
      depth+=1;
      fractalCount++;
      if (document.getElementById('zoom').checked) {
           lineLength+=1;
      }
      else{
          lineLength -=1;
      }
             function drawTrunk(x1, y1, x2, y2){
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
          }
        function drawBranch(x1, y1, angle, depth){
          context.strokeStyle = colors1[colorCount];
          context.lineWidth = lineThickness;
          var deg_to_rad = Math.PI / coreAngle ;
          if (depth !== 0){
            var x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * lineLength );
            var y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * lineLength );
            drawTrunk(x1, y1, x2, y2, depth);
            drawBranch(x2, y2, angle - 40, depth - 1);
            drawBranch(x2, y2, angle + 40, depth - 1);
          }
    }
  if (colorCount=== 7){colorCount=0};
  if (document.getElementById('zoom').checked) {
    if (lineLength===lineLengthLimit){lineLength= 0};
    }
  else{ if(lineLength === 0){lineLength=lineLengthLimit};
  }
  if (fractalCount===fractalTotal){
    clearInterval(fractalInterval);
    context.fillRect(0, 0, screenWidth,screenHeight);
    Fractal(coreAngle,anglechange,depth, lineThickness,lineLengthLimit,fractalTotal,duration);
  }
    }
}
//getting a random color
  function getRandomColor(brightness){
    //6 levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
  }

