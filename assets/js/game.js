function clickInit() {
  var itemUrl;
  var itemDesc;
  var slotsTaken = 1;
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
    slotsTaken++;
  });
}

function checkPos() {
  if ($("#character").position().left < 0) {
    alert("switch");
  }
  if ($("#character").position().left > ($(window).width() - 50)) {
    $.get("content/room.php?room=1", function(data){
      alert("test");
      $(".room-container").html(data);
      clickInit();
    });
  }
}
