<?php  
   $nombre = addslashes(htmlspecialchars($_POST["list-target"]));

  $enlace = mysqli_connect('localhost', 'citasmedicas', 'progra4','health_book');
   if($enlace){
     //echo "Conexion establecida satisfactoriamente, ";
     $Conn = 'DELETE FROM especialidades WHERE NombreEspecialidad = "';
     $Conn.= mysqli_real_escape_string($enlace,$nombre).'" ;';
     $query = @mysqli_query($enlace,$Conn);
     if($query){
         echo "Se ha eliminado correctamente.";
     }else{
         echo "No se pudo eliminar:".mysql_error();
         echo $nombre;
         echo $Conn;
     }
   }else{
     echo "Conexion fallida:".mysql_error();   
   }
   mysqli_close($enlace);
?> 