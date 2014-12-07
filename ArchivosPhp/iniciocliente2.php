<?php 
   
	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	
    	$id = $_POST['especialidades'];

	$query = "SELECT id_doctor, NombreDoctor, ApellidoDoctor FROM doctores WHERE id_especialidad=$id";
	$result = mysqli_query($conn,$query);
	
	$valores=array();
	$num=0;
	while($row=mysqli_fetch_array($result)){
		$valores[]= $row['id_doctor']."-".$row['NombreDoctor']." ".$row['ApellidoDoctor'];
		$num=$num+1;
	}
	
	if($num==0){
		$valores[]="No hay doctores disponibles";
	}
     
	echo json_encode($valores);
	
	mysqli_close($conn);
	
?> 
		