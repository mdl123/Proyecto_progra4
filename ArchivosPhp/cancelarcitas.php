<?php 
   $enlace = mysqli_connect('localhost', 'citasmedicas', 'progra4','health_book');
   if($enlace){
     //echo "Conexion establecida satisfactoriamente, ";
     $Conn = 'SELECT * FROM doctores;';
     $query = @mysqli_query($enlace,$Conn);
     if($query){
         while ($row = mysqli_fetch_assoc($query)) {
            echo '<option value="'.$row["id_doctor"].'">'.$row["NombreDoctor"].' '.$row["ApellidoDoctor"].'</option>';
        }
     }else{
         echo "Consulta vacía:".mysql_error();
     }
   }else{
     echo "Conexion fallida:".mysql_error();   
   }
   mysqli_close($enlace);
?> 
		