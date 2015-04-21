var itemUrl;
var itemDesc;
var slotsTaken = new Array(0, 0, 0, 0, 0);
var slot;
var currentScreen = 0;
var loading = false;

function clickInit() {
  console.log("Initializing clicks");
  $(".pickup-item").on("click", function() {
      if (slotsTaken[0] == 0) {
        slotsTaken[0] = 1;
        slot = 1;
        var success = true;
      } else if (slotsTaken[1] == 0) {
        slotsTaken[1] = 1;
        slot = 2;
        var success = true;
      } else if (slotsTaken[2] == 0) {
        slotsTaken[2] = 1;
        slot = 3;
        var success = true;
      } else if (slotsTaken[3] == 0) {
        slotsTaken[3] = 1;
        slot = 4;
        var success = true;
      } else if (slotsTaken[4] == 0) {
        slotsTaken[4] = 1;
        slot = 5;
        var success = true;
      } else {
        alert("fail")
      }
      if (success == true) {
        itemUrl = $(this).attr("data-item");
        itemName = $(this).attr("data-name");
        $(this).children().removeClass("hover").addClass("animated fadeOutUp");
        $(this).append("<h3 class='item-name animated fadeOutUp'>" + itemName + "</h3>")
        $(this).css({
          "pointer-events": "none"
        });
        console.log(slot);
        $(".slot-" + slot).html("<div class='item'><img src='assets/img/game/items/" + itemUrl + ".png' alt='Test Sword' class='animated zoomIn'/><div class='delete'><i class='fa fa-trash-o'></i></div></div>");
        console.log(slotsTaken);
        clickInit()
        $.ajax({
          url: "gen/add_item.php?item=" + itemName + "&room=" + $(".room").attr("data-room")
        });
      }
  });
  $(".delete").on("click", function() {
    console.log("removed");
    var deletedItem = $(this).parent().parent().attr("class");
    console.log(deletedItem)
    $("." + deletedItem).html("");
    slotNr = deletedItem.substr(deletedItem.length - 1);
    console.log(slotNr);
    slotsTaken[slotNr - 1] = 0;
    console.log(slotsTaken);
  });
}

if (loading == false) {
  function checkPos() {
    if ($("#character").position().left < 0) {
      loading = true;
      $("#fx").animate({"background-color": "rgba(0, 0, 0, 1)"}, 100);
      $("#character").stop(true, true)
      $("#character").animate({"left": "90%"}, 0);
      currentScreen = currentScreen - 1;
      $.ajax({
        url: "content/room.php?room=" + currentScreen,
        success: function(data) {
          $(".room-container").html(data);
          clickInit();
          $("#fx").animate({"background-color": "rgba(0, 0, 0, 0)"}, 100);
          $(".roomcounter").html(currentScreen);
          reloadAI();
          loading = false;
        }
      });
    }

    if ($("#character").position().left > ($(window).width() - 100)) {
      loading = true;
      $("#fx").animate({"background-color": "rgba(0, 0, 0, 1)"}, 100);
      $("#character").stop(true, true)
      $("#character").animate({"left": "10%"}, 0);
      currentScreen = currentScreen + 1;
      $.ajax({
        url: "content/room.php?room=" + currentScreen,
        success: function(data) {
          $(".room-container").html(data);
          clickInit();
          $("#fx").animate({"background-color": "rgba(0, 0, 0, 0)"}, 100);
          $(".roomcounter").html(currentScreen);
          reloadAI();
          loading = false;
        }
      });
    }
  }
}

function reloadAI() {
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
}
