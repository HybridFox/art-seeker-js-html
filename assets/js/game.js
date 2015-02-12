function clickInit() {
  var itemName;
  var slotsTaken = 1;
  console.log("Initializing clicks");
  $(".pickup-item").on("click", function() {
    $(this).children().removeClass("hover").addClass("animated fadeOutUp");
    $(this).css({
      "pointer-events": "none"
    });
    itemName = $(this).attr("data-item");
    $(".slot.o-" + slotsTaken).html("<div class='item'><img src='assets/img/game/items/" + itemName + ".png' alt='Test Sword' class='animated zoomIn'/></div>")
    slotsTaken++;
  });
}
