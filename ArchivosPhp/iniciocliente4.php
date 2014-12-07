<?php 

	//$conn=mysqli_connect('localhost','root','musica','health_book');
	$iddoctor = $_POST['doctores'];
	$fecha = $_POST['fecha'];
	$hora =$_POST['horas'];
	//$user = $_SESSION["usuario"];
	$iduser;
	$valores=array();
	
	/*
	$query ="SELECT id_usuario FROM usuarios WHERE UserNames='$user'";
	$result=mysqli_query($conn, $query);
	
	//while($row=mysqli_fetch_array($result)){
		$iduser=$row['id_usuario'];
	//}
	
	$query2 ="INSERT INTO citas (id_usuario,id_doctor,Fecha_cita,Hora_cita,CitaCancelada) VALUES ($iduser,$iddoctor,'$fecha',
			  '$hora','0')";
	mysqli_query($conn, $query2);
	
	
	*/
	
/*
	$query3 ="SELECT C.id_cita, D.NombreDoctor, D.ApellidoDoctor, E.NombreEspecialidad FROM citas C 
			 JOIN doctores D on C.id_doctor=D.id_doctor 
			 JOIN especialidades E on D.id_especialidad=E.id_especialidad
			 WHERE C.id_doctor=$iddoctor AND C.Fecha_cita='$fecha' AND C.Hora_cita='$hora'";
	$result3=mysqli_query($conn, $query3);
	
	//while($row=mysqli_fetch_array($result3)){
		$valores[]=$row['id_cita'].'^'.$row['NombreDoctor'].' '.$row['ApellidoDoctor'].'   '.$row['NombreEspecialidad'].'   '.$fecha.'   '.$hora;
	//}
	
	
	
	*/

		$valores[]= "1^".$fecha."   ".$hora;
	
		echo json_encode($valores);
	
	//mysqli_close($conn);	
?> 
		