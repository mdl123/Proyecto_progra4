<?php 
   $nombre = addslashes(htmlspecialchars($_POST["NameEspeciality"]));
   $descripcionE = addslashes(htmlspecialchars($_POST["DescEspeciality"]));
   
   $enlace = mysqli_connect('localhost', 'root', 'progra4','employees');
?> 
		