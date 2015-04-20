<?php
  session_start();
  $room = $_GET["room"];
  $needle = ">>" . $room;
  $ret = array_keys(array_filter($_SESSION["rooms"], function($var) use ($needle){
    return strpos($var, $needle) !== false;
  }));
  if (array_key_exists(0, $ret)) {
    $nkey = array_search('>>' . $room, $_SESSION["rooms"]);
    $key = $ret[0];
    $data_array = explode(":", $_SESSION["rooms"][$key]);
    $r_item = $data_array[1];
    $r_position = $data_array[2];
  } else {
    $item = array(
      "test-salad",
      "test-sword"
    );

    $r_position = rand(5, 90);
    $r_item = $item[array_rand($item)];
    $data = ">>" . $room . ":" . $r_item . ":" . $r_position;
    array_push($_SESSION["rooms"], $data);
  }
?>
    <div class="room <?php if ($room == 0) {echo "room-0";} else {echo "room-1";} ?>">
      <div class="debug">
        <?php
          echo "<pre><code>";
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
          echo "position(%): " . $r_position;
          echo "</code></pre>";
        ?>
      </div>
      <div id="overlay">
        <?php if ($room != 0) { ?>
        <div class="pickup-item" data-item="<?php echo $r_item; ?>" data-name="<?php echo $r_item; ?>" style="left: <?php echo $r_position; ?>%;">
          <img src="assets/img/game/items/<?php echo $r_item; ?>.png" alt="Test Salad" class="hover"/>
        </div>
        <?php } ?>
      </div>
      <?php
        if ($room == 0) {
          echo "<div id='ai'><div class='text-bubble'>Find me the missing pieces of this painting</div></div>";
          echo "<div class='painting'><img src='assets/img/paintings/" . $r_painting . ".png'></div>";
        }
      ?>
    </div>
