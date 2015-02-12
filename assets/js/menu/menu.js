var pr;

$(document).ready(function() {
  console.log( "ready!" );
  $(".char-img.o-1").animateSprite({
    fps: 4,
    loop: true,
    animations: {
      walkRight: [1, 2, 3, 4],
      walkLeft: [6, 7, 8, 9]
    },
    complete: function(){
      alert('Sprite animation complete!');
    }
  });
  $(".char-img.o-2").animateSprite({
    fps: 4,
    loop: true,
    animations: {
      walkRight: [11, 12, 13, 14],
      walkLeft: [16, 17, 18, 19]
    },
    complete: function(){
      alert('Sprite animation complete!');
    }
  });
  $(".char-img.o-3").animateSprite({
    fps: 4,
    loop: true,
    animations: {
      walkRight: [21, 22, 23, 24],
      walkLeft: [26, 27, 28, 29]
    },
    complete: function(){
      alert('Sprite animation complete!');
    }
  });
  $(".char-img.o-4").animateSprite({
    fps: 4,
    loop: true,
    animations: {
      walkRight: [31, 32, 33, 34],
      walkLeft: [36, 37, 38, 39]
    },
    complete: function(){
      alert('Sprite animation complete!');
    }
  });
  $(".char-img.o-5").animateSprite({
    fps: 4,
    loop: true,
    animations: {
      walkRight: [41, 42, 43, 44],
      walkLeft: [46, 47, 48, 49]
    },
    complete: function(){
      alert('Sprite animation complete!');
    }
  });
});

function loadGame(char) {
  $("#menu").addClass("animated bounceOut");
  $("#load").addClass("animated zoomInUp");
  pr = 0;

  var loadbar = setInterval(function(){
    $(".load-bar > .inner").css("width",pr + "%");
    pr++;
    if (pr == 100) {
      $("#load").removeClass("animated zoomInUp");
      $("#load").addClass("animated bounceOut");
      clearInterval(loadbar);
      gameInit();
    }
  }, 20)
}

function gameInit() {
  $.get("content/game.php", function(data){
    $("#game").html(data);
    $("#game").addClass("animated flipInX");
  });
}
