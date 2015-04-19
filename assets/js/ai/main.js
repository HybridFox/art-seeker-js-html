var aiDir = "right";
var walkInterval;

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

  setInterval(
    function(){
      clearInterval(walkInterval);
      $("#ai").stop(true);
      console.log(aiDir);
      if (aiDir == "right") {
        walkInterval = setInterval(function(){ $('#ai').animate({left: '+=20'}, charSpeed); }, 40);
        $('#ai').removeClass("turn-left");
        $('#ai').addClass("turn-right");
        aiDir = "left";
      } else if (aiDir == "left") {
        walkInterval = setInterval(function(){ $('#ai').animate({left: '-=20'}, charSpeed); }, 40);
        $('#ai').removeClass("turn-right");
        $('#ai').addClass("turn-left");
        aiDir = "right";
      }
    }, 3000
  );
}
