<?php
  session_start();
  if (isset($_GET["item"])) {
    if (isset($_GET["room"])) {
      array_push($_SESSION["items"], $_GET["item"]);
      $needle = ">>" . $_GET["room"];
      $ret = array_keys(array_filter($_SESSION["rooms"], function($var) use ($needle){
        return strpos($var, $needle) !== false;
      }));
      $key = $ret[0];
      $data_array = explode(":", $_SESSION["rooms"][$key]);
      $data_array[3] = 1;
      $new_array = $data_array[0] . ":" . $data_array[1] . ":" . $data_array[2] . ":" . $data_array[3];
      $_SESSION["rooms"][$key] = $new_array;
    }
  }
?>
