<?php
  session_start();
  if (isset($_GET["item"])) {
    array_push($_SESSION["items"], $_GET["item"]);
  }
?>
