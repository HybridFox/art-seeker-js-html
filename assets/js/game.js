var itemUrl;
var itemDesc;
var slotsTaken = 1;

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

function checkPos() {
  if ($("#character").position().left < 0) {
  }
  if ($("#character").position().left > ($(window).width() - 200)) {
    $("#fx").animate({"background-color": "rgba(0, 0, 0, 1)"}, 100);
    $.get("content/room.php?room=1", function(data) {
      $(".room-container").html(data);
      $("#character").stop(true, true)
      $("#character").animate({"left": "100px"}, 1);
      clickInit();
      $("#fx").animate({"background-color": "rgba(0, 0, 0, 0)"}, 100);
    });
  }
}
