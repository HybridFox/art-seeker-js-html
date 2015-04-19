var aiDir = "right";
var walkInterval;
var aiWalkDuration = 11000;

function loadAI() {
  $("#ai").animateSprite({
    fps: 4,
    loop: true,
    animations: {
      walkRight: [51, 52, 53, 54]
    },
    complete: function(){
      alert('Sprite animation complete!');
    }
  });

  walkInterval = setInterval(function(){ $('#ai').animate({left: '+=20'}, 200); }, 200);
  $('#ai').removeClass("turn-left");
  $('#ai').addClass("turn-right");
  aiDir = "left";

  setInterval(
    function(){
      clearInterval(walkInterval);
      $("#ai").stop(true);
      if (aiDir == "right") {
        walkInterval = setInterval(function(){ $('#ai').animate({left: '+=20'}, 200); }, 200);
        $('#ai').removeClass("turn-left");
        $('#ai').addClass("turn-right");
        aiDir = "left";
      } else if (aiDir == "left") {
        walkInterval = setInterval(function(){ $('#ai').animate({left: '-=20'}, 200); }, 200);
        $('#ai').removeClass("turn-right");
        $('#ai').addClass("turn-left");
        aiDir = "right";
      }
    }, aiWalkDuration
  );
}
