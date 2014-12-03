<?php 

$conn=mysqli_connect('localhost','citasmedicasuser','progra4','citasmedicas');
	
	if(mysqli_connect_errno($conn)){
	}
	else{
	}//fin del else

		$nombreDoc = $_POST['NombreDoctor'];
		$apellidoDoc = $_POST['ApellidoDoctor'];
		$especialidadDoc = $_POST['especialidadesDoctorUs'];
		$celDoc = $_POST['CelDoctor'];
		
		$query0="SELECT id_especialidades from especialidades where NombreEspecialidad=$especialidadDoc";
$result = mysqli_query($conn,$query1);
$temp;

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $temp=$row["id_especialidades"];
    }
} 

		$query1= "INSERT INTO doctores(id_especialidad,NombreDoctor,ApellidoDoctor,CelularDoctor) VALUES ($temp,$nombreDoc,$apellidoDoc,$celDoc)";

$conn->close();

?> 
			