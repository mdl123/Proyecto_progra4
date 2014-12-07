<?php
   $id = addslashes(htmlspecialchars($_POST["doctoresCitaUs"]));
   $fecha = addslashes(htmlspecialchars($_POST["fechasCitasUs"]));
   $hora = addslashes(htmlspecialchars($_POST["horasCitasUs"]));

   $enlace = mysqli_connect('localhost', 'citasmedicas', 'progra4','health_book');
   if($enlace){
     //echo "Conexion establecida satisfactoriamente, ";
     $Conn = "UPDATE citas SET CitaCancelada = '1' WHERE id_doctor = ";
     $Conn.= mysqli_real_escape_string($enlace,$id).' and Fecha_cita = "';
     $Conn.= mysqli_real_escape_string($enlace,$fecha).'" and Hora_cita = "';   
     $Conn.= mysqli_real_escape_string($enlace,$hora).'";';    
     $query = @mysqli_query($enlace,$Conn);
     if($query){
         echo "Cancelada correctamente".$Conn;
     }else{
         echo "Consulta vacía:".mysql_error();
     }
   }else{
     echo "Conexion fallida:".mysql_error();   
   }
   mysqli_close($enlace);
?> 