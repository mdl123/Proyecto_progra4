<?php
   $nombre = addslashes(htmlspecialchars($_POST["NameEspeciality"]));
   $descripcionE = addslashes(htmlspecialchars($_POST["DescEspeciality"]));
   
   $enlace = mysqli_connect('localhost', 'root', '','health_book');
   if($enlace){
     echo "Conexion establecida satisfactoriamente, ";
     $Conn = 'INSERT INTO especialidades (NombreEspecialidad,DescripcionEspecialidad) VALUES ("'.mysqli_real_escape_string($enlace,$nombre).'","'.mysqli_real_escape_string($enlace,$descripcionE).'");';
     $query = @mysqli_query($enlace,$Conn);
     if($query){
         echo "Insercion exitosa.";
     }else{
         echo "Insercion fallida:".mysql_error();
     }
   }else{
     echo "Conexion fallida:".mysql_error();   
   }
   mysqli_close($enlace);
?> 
		