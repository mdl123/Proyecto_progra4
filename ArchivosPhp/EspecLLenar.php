<?php   
	$enlace=mysqli_connect('localhost','citasmedicas','progra4','health_book');
   	if($enlace){
        	$Conn = 'SELECT * FROM especialidades;';
     		$query = @mysqli_query($enlace,$Conn);
     		if($query){
			while ($row = mysqli_fetch_assoc($query)) {
			    echo '<option value="'.$row["id_especialidades"].'">'.$row["NombreEspecialidad"].'</option>';
			}
    		}else{
			 echo "Consulta vacía:".mysqli_error();
		}
   	}else{
    		 echo "Conexion fallida:".mysqli_error();   
  	}
   	mysqli_close($enlace);
?> 