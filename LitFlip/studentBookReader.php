<?php $book = $_GET['book']
$reader = "studentBookReader.html";
header( "Location: $reader?Book=$book" );
exit;
?>
