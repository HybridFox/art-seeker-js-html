<?php
  $room = $_GET["room"];
?>
    <div class="room <?php if ($room = 0) {echo "room-0";} else {echo "room-1";} ?>">
      <div id="overlay">
        <div class="pickup-item" data-item="test-salad" data-name="Test Salad \o/" style="left: 10%;">
          <img src="assets/img/game/items/test-salad.png" alt="Test Salad" class="hover"/>
        </div>
      </div>
    </div>
