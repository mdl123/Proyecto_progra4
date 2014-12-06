<?php
   $id = addslashes(htmlspecialchars($_POST["doctoresCitaUs"]));
   $fecha = addslashes(htmlspecialchars($_POST["fechasCitasUs"]));

   $enlace = mysqli_connect('localhost', 'root', '','health_book');
   if($enlace){
     //echo "Conexion establecida satisfactoriamente, ";
     $Conn = 'SELECT * FROM citas where id_doctor = ';
     $Conn.= mysqli_real_escape_string($enlace,$id).' and Fecha_cita = "';
     $Conn.= mysqli_real_escape_string($enlace,$fecha).'";';    
     $query = @mysqli_query($enlace,$Conn);
     if($query){
         while ($row = mysqli_fetch_assoc($query)) {
            echo '<option value="'.$row["Hora_cita"].'">'.$row["Hora_cita"].'</option>';
        }
     }else{
         echo "Consulta vacía:".mysql_error();
     }
   }else{
     echo "Conexion fallida:".mysql_error();   
   }
   mysqli_close($enlace);
?> 