<?php
  session_start();
  print_r($_SESSION["items"]);
  echo "<br>";
  print_r($_SESSION["rooms"]);
  echo "<br>";
  $needle = ">>" . $room;
  $ret = array_keys(array_filter($_SESSION["rooms"], function($var) use ($needle){
    return strpos($var, $needle) !== false;
  }));
  print_r($ret);
?>
