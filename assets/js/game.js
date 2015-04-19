var itemUrl;
var itemDesc;
var slotsTaken = 1;
var currentScreen = 0;
var loading = false;

function clickInit() {
  console.log("Initializing clicks");
  $(".pickup-item").on("click", function() {
    itemUrl = $(this).attr("data-item");
    itemName = $(this).attr("data-name");
    $(this).children().removeClass("hover").addClass("animated fadeOutUp");
    $(this).append("<h3 class='item-name animated fadeOutUp'>" + itemName + "</h3>")
    $(this).css({
      "pointer-events": "none"
    });
    $(".slot.o-" + slotsTaken).html("<div class='item'><img src='assets/img/game/items/" + itemUrl + ".png' alt='Test Sword' class='animated zoomIn'/></div>")
    console.log(slotsTaken);
    slotsTaken++;
  });
}

if (loading == false) {
  function checkPos() {
    if ($("#character").position().left < 0) {
      loading = true;
      $("#fx").animate({"background-color": "rgba(0, 0, 0, 1)"}, 100);
      $("#character").stop(true, true)
      $("#character").animate({"left": "80%"}, 0);
      $.ajax({
        url: "content/room.php?room=" + currentScreen,
        success: function(data) {
          $(".room-container").html(data);
          clickInit();
          currentScreen = currentScreen - 1;
          $("#fx").animate({"background-color": "rgba(0, 0, 0, 0)"}, 100);
          $(".roomcounter").html(currentScreen);
          loading = false;
        }
      });
    }
    if ($("#character").position().left > ($(window).width() - 100)) {
      loading = true;
      $("#fx").animate({"background-color": "rgba(0, 0, 0, 1)"}, 100);
      $("#character").stop(true, true)
      $("#character").animate({"left": "10%"}, 0);
      $.ajax({
        url: "content/room.php?room=" + currentScreen,
        success: function(data) {
          $(".room-container").html(data);
          clickInit();
          currentScreen = currentScreen + 1;
          $("#fx").animate({"background-color": "rgba(0, 0, 0, 0)"}, 100);
          $(".roomcounter").html(currentScreen);
          loading = false;
        }
      });
    }
  }
}
