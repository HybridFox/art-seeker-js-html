<?php
  session_start();
  $room = $_GET["room"];
  $needle = ">>" . $room;
  $ret = array_keys(array_filter($_SESSION["rooms"], function($var) use ($needle){
    return strpos($var, $needle) !== false;
  }));
  if (array_key_exists(0, $ret)) {
    $key = $ret[0];
    $data_array = explode(":", $_SESSION["rooms"][$key]);
    $r_item = $data_array[1];
    $r_position = $data_array[2];
    $r_pickup = $data_array[3];
  } else {
    $item = array(
      "test-salad",
      "test-sword"
    );

    $r_position = rand(5, 90);
    $r_item = $item[array_rand($item)];
    $r_pickup = 0;
    $data = ">>" . $room . ":" . $r_item . ":" . $r_position . ":" . $r_pickup;
    array_push($_SESSION["rooms"], $data);
  }
?>
    <div class="room <?php if ($room == 0) {echo "room-0";} else {echo "room-1";} ?>" data-room="<?php echo $room; ?>">
      <div class="debug">
        <?php
          echo "<pre>";
          print_r($_SESSION["items"]);
          echo "<br>";
          print_r($_SESSION["rooms"]);
          echo "<br>";
          $needle = ">>" . $room;
          $return = array_keys(array_filter($_SESSION["rooms"], function($var) use ($needle){
            return strpos($var, $needle) !== false;
          }));
          print_r($return);
          echo "item: " . $r_item . "<br>";
          echo "position(%): " . $r_position . "<br>";
          echo "picked up?: " . $r_pickup;
          echo "</pre>";
        ?>
      </div>
      <div id="overlay">
        <?php if ($room != 0) { ?>
        <div class="pickup-item <?php if ($r_pickup == 1) { echo "no-pickup"; } ?>" data-item="<?php echo $r_item; ?>" data-name="<?php echo $r_item; ?>" style="left: <?php echo $r_position; ?>%;">
          <?php if ($r_pickup == 0) { ?>
            <img src="assets/img/game/items/<?php echo $r_item; ?>.png" alt="Test Salad" class="hover"/>
          <?php } ?>
        </div>
        <?php } ?>
      </div>
      <?php
        if ($room == 0) {
          echo "<div id='ai'><div class='text-bubble'>Find me the missing pieces of this painting</div></div>";
          echo "<div class='painting'><img src='assets/img/paintings/" . $_SESSION["painting"] . ".png'></div>";
        }
      ?>
    </div>
