var currentKey;
var TimerWalk;
var charStep = 2; //1=1st foot, 2=stand, 3=2nd foot, 4=stand
var charSpeed = 40;
window.addEventListener('keydown', function (e) {
  // space and arrow keys
  if ([32,
  37,
  38,
  39,
  40].indexOf(e.keyCode) > - 1) {
    e.preventDefault();
  }
}, false);

$(document).keydown(function (e) {
  if (!currentKey) {
    currentKey = e.keyCode;
    switch (e.keyCode) {
      case 39:
        charWalk('right');
        $("#character").animateSprite('resume');
        break;
      case 37:
        charWalk('left');
        $("#character").animateSprite('resume');
        break;
    }
  }
});

$(document).keyup(function (e) {
  //don't stop the walk if the player is pushing other buttons
  //only stop the walk if the key that started the walk is released
  if (e.keyCode == currentKey) {
    currentKey = false;
    clearInterval(TimerWalk);
    $('#character').animateSprite('stop')
  }
});
function charWalk(dir) {
  //adjust from lang to code
  if (dir == 'up') dir = 'back';
  if (dir == 'down') dir = 'front';
  processWalk(dir);
  TimerWalk = setInterval(function () {
    processWalk(dir);
  }, charSpeed);
}
function processWalk(dir) {
  checkPos();
   switch(dir) {
    case'left':
      if ($('#character').position().left > 0) {
        $('#character').animate({left: '-=20'}, charSpeed);
        $('#character').removeClass("turn-right");
        $('#character').addClass("turn-left");
      }
      break;
    case'right':
        $('#character').animate({left: '+=20'}, charSpeed);
        $('#character').removeClass("turn-left");
        $('#character').addClass("turn-right");
      break;
    }
}
