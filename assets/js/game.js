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





$(document).keydown(function(e){
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {

        $('#character').animateSprite('fps', 4);
        $('#character').animateSprite('play', 'walkLeft');

        console.log("left");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        // do something
    }
});


$(document).keydown(function (e) {
  if (!currentKey) {
    currentKey = e.keyCode;
    switch (e.keyCode) {
      case 38:
        charWalk('up');
        break;
      case 39:
        charWalk('right');
        break;
      case 40:
        charWalk('down');
        break;
      case 37:
        charWalk('left');


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
    $('#character').stop(true, true);
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
  charStep++;
  if (charStep == 5) charStep = 1;
  //remove the current class
  //add the new class
  switch (charStep) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
  }
  // Move &

	  switch(dir) {
	    case'front':
		    $('#character').animate({top: '+=32'}, charSpeed);
		  break;
		case'back':
		  if ($('#character').position().top > 0) {
		    $('#character').animate({top: '-=32'}, charSpeed);
		  }
		  break;
		case'left':
		  if ($('#character').position().left > 0) {
        $('#character').animateSprite('play', 'walkLeft');
		    $('#character').animate({left: '-=32'}, charSpeed);

		  }
		  break;
		case'right':

		    $('#character').animate({left: '+=32'}, charSpeed);
		  break;
	  }
}
