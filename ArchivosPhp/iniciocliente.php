<?php 

	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	
	$query = "SELECT id_especialidades, NombreEspecialidad FROM especialidades";
	$result = mysqli_query($conn,$query);
	
	
	$valores=array();

	while($row=mysqli_fetch_array($result)){
		$valores[]= $row['id_especialidades']."-".$row['NombreEspecialidad'];
	}
	
	

		
	echo json_encode($valores);
	
	mysqli_close($conn);	
?> 
		