
  function quiz(){

  var ans = prompt(" Wanna play mock vapor lizards? You can answer with yeah or yes or yeppers" );
           if(ans == "yes"||ans == "yeppers"||ans == "yeah"){alert (" ok so mock mocks lizards, vapor surrounds the mocker in a kind of ...vapor and lizards inhales vapor. I hope you got it!");
            mpl();
         }

           else {alert("Well you're no fun!");}


  function mpl(){
           var comChoice = Math.random();
            var ans2 = prompt ("Are you mocking me, are you vapor-y or are you a lounge lizard?")
            if (ans2 == "mock" && comChoice <=.33){alert ("TIE TIE BABY");
            }
            else if (ans2== "vapor" && comChoice <= .33){ alert ("You vaporized that mocking heap of 1s and 0s!");}
            else if (ans2 == "lizard" && comChoice <= .33){ alert ("The nerdbox mocked you you silly lizard!");}
             else if (ans2 == "mock" && comChoice <= .66){ alert ("Mocking doesn't always win! R-O-B-O-T vaporizes you!");}
              else if (ans2 == "vapor" && comChoice <= .66){ alert ("Ticky ticky tie tie");}
               else if (ans2 == "lizard" && comChoice <= .66){ alert ("You just inhaled the digital vaporman!");}
                else if (ans2 == "mock" && comChoice <= .99){ alert ("You mocked that silly lizard");}
                 else if (ans2 == "vapor" && comChoice <= .99){ alert ("You have been inhaled by the electric lizard");}
                  else if (ans2 == "lizard" && comChoice <=.99){ alert ("Well-matched lizard man (or woman)");}
                  else{alert ("You're cheating! I need mock, vapor or lizard");}

                }

playAgain();
function playAgainAgain(){
  var answer = prompt("Wanna go again? (yes or no)");
if (answer == "yes"){
  mpl();playAgain();
}
else{ alert("Yeah I get it! I'm getting sleepy too. Thanks for playing!");
}

}



function playAgain(){
  var answer = prompt("Wanna go again? (yes or no)");
if (answer == "yes"){
  mpl();playAgainAgain();
}
else{ alert("Yeah I get it! I'm getting sleepy too. Thanks for playing!");
}

}
}



 function intro(){
          var hi =  document.getElementById('introduction');
          hi.style.display = 'initial';}
 function shake(){
          var hi =  document.getElementById('introduction');
          hi.style.display = 'none';
          var img = document.getElementById('p1');
          img.style.display = 'initial';
          left = document.getElementById("middle");
          left.style.backgroundColor = "#bfbfbf";
          left = document.getElementById("header");
          left.style.backgroundColor = "#000000";
          left = document.getElementById("nav");
          left.style.backgroundColor = "#ffffff";
          left = document.getElementById("right");
          left.style.backgroundColor = "#494949";
          left = document.getElementById("left");
          left.style.backgroundColor = "#494949";
          left = document.getElementById("h1");
          left.style.color = "white";
          left = document.getElementById("button");
          left.style.backgroundColor = "#ffffff";
          left = document.getElementById("button1");
          left.style.backgroundColor = "#ffffff";
          left = document.getElementById("button2");
          left.style.backgroundColor = "#ffffff";
          left = document.getElementById("butright");
          left.style.backgroundColor = "#ffffff";
          left = document.getElementById("butleft");
          left.style.backgroundColor = "#ffffff";

           }


sliderInt = 1;
sliderNext =2;
$(document).ready(function(){
$('#slider > #p1').fadeIn(50);
startSlide();
});
 function startSlide(){
count = $('#slider > img').size();
loop =setInterval(function(){
if (sliderNext > count){
  sliderNext = 1;
  sliderInt = 1;
};

$('#slider > img').fadeOut(400);
$('#slider > img#p' + sliderNext).fadeIn(50);
sliderInt = sliderNext;
sliderNext = sliderNext + 1;


},5000);

 }

 function prev(){
var newSlide = sliderInt-1;
showSlide(newSlide);

 }

 function next(){
var newSlide = sliderInt+1;
showSlide(newSlide);

 }


function stopLoop(){
window.clearInterval(loop);


}

function showSlide(id){
  stopLoop();
  if (id > count){
  id=1;}
  else if(id < 1){
id= count;
}

$('#slider > img').fadeOut(100);
$('#slider > img#p' + id).fadeIn(300);
sliderInt = id;
sliderNext = id + 1;
startSlide();


}




