<?php 
    session_start();
	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	$user = $_SESSION["usuario"];
	$iduser;
	$valores=array();
	
	
	$query ="SELECT id_usuario FROM usuarios WHERE UserNames='$user'";
	$result=mysqli_query($conn, $query);
	
	while($row=mysqli_fetch_array($result)){
		$iduser=$row['id_usuario'];
	}
	
	$query2 ="SELECT id_cita, Fecha_cita, Hora_cita, NombreDoctor, ApellidoDoctor, NombreEspecialidad FROM citas C 
			 JOIN doctores D ON C.id_doctor=D.id_doctor 
			 JOIN especialidades E ON D.id_especialidad=E.id_especialidades
			 WHERE id_usuario='$iduser' AND CitaCancelada='0'";
	$result2=mysqli_query($conn, $query2);
	
	while($row=mysqli_fetch_array($result2)){
		$valores[]=$row['id_cita'].'^'.$row['NombreDoctor'].' '.$row['ApellidoDoctor'].'/'.$row['NombreEspecialidad'].'/'.$row['Fecha_cita'].'/'.$row['Hora_cita'];
	}
	

    	echo json_encode($valores);
	
	mysqli_close($conn);	
?> 