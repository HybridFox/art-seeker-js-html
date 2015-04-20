<?php
  session_start();
  $painting = array(
    "1",
    "1",
    "1"
  );
  $_SESSION["painting"] = $painting[array_rand($painting)];
  $_SESSION["items"] = array();
  $_SESSION["rooms"] = array();
?>
