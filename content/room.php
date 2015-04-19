<?php
  $room = $_GET["room"];
  $item = array(
    "test-salad",
    "test-sword"
  );
  $r_array = $item[array_rand($item)];
?>
    <div class="room <?php if ($room == 0) {echo "room-0";} else {echo "room-1";} ?>">
      <div id="overlay">
        <div class="pickup-item" data-item="<?php echo $r_array; ?>" data-name="Test Salad \o/" style="left: <?php echo rand(0, 100); ?>%;">
          <img src="assets/img/game/items/<?php echo $r_array; ?>.png" alt="Test Salad" class="hover"/>
        </div>
      </div>
      <?php
        if ($room == 0) {
          echo "<div id='ai'></div>";
        }
      ?>
    </div>
