
var playing = false;
var score;
var trialsleft;
var step; 
var action; 
var fruits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; //for fruits

$(function () {
  
  $("#front").show();
  $("#startReset").click(function () {
    if (playing == true) {
      
      location.reload(); //reload page
    } else {
      
      $("#front").hide();
      $("#score").show();
      playing = true;
      
      score = 0;
      $("#scoreValue").html(score);

     

      $("#trialsleft").show();
      trialsleft = 3;
      addhearts();

     
      $("#gameOver").hide();

      
      $("#startReset").html("Reset Game");

      
      startAction();
    }
  });
  
  $("#fruit1").mouseover(function () {
    score++; 
    $("#scoreValue").html(score);

    
    $("#slicesound")[0].play();

    
    clearInterval(action);

    
    $("#fruit1").hide("explode", 500);

  
    setTimeout(startAction, 500);
  });

  
  function addhearts() {
    $("#trialsleft").empty();
    for (i = 0; i < trialsleft; i++) {
      $("#trialsleft").append(
        '<img src="https://raw.githubusercontent.com/Saumya-07/Fruit-Slicer/master/images/wrong.png" , class="life">'
      );
    }
  }

  function startAction() {
    $("#fruit1").show();

    chooseRandom();
    $("#fruit1").css({
      left: Math.round(550 * Math.random()),
      top: -50,
    });
    step = 1 + Math.round(5 * Math.random());
    action = setInterval(function () {
      $("#fruit1").css("top", $("#fruit1").position().top + step);

      if ($("#fruit1").position().top > $("#fruitcontainer").height() - 50) {
        if (trialsleft > 1) {
          $("#fruit1").show();
          chooseRandom();
          $("#fruit1").css({
            left: Math.round(550 * Math.random()),
            top: -50,
          });
          step = 1 + Math.round(5 * Math.random());

          trialsleft--;
          addhearts();
        } else {
          playing = false;
          $("#score").hide();
          $("#startreset").html("Start Game");
          $("#gameOver").show();
          $("#gameOver").html(
            "<p>Game Over!</p><p>Your score is " + score + "</p>"
          );
          $("#trialsleft").hide();
          stopAction();
        }
      }
    }, 10);
  }

  function chooseRandom() {
    $("#fruit1").attr(
      "src",
      "https://raw.githubusercontent.com/Saumya-07/Fruit-Slicer/master/images/" +
        fruits[Math.round(9 * Math.random())] +
        ".png"
    );
  }
  function stopAction() {
    clearInterval(action);
    $("#fruit1").hide();
  }
});
