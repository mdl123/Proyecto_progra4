<?php 
    session_start();
	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	$iddoctor = $_POST['doctores'];
	$fecha = $_POST['fecha'];
	$hora =$_POST['horas'];
	$user = $_SESSION["usuario"];
	$iduser;
	$valores=array();
	
	$query ="SELECT id_usuario FROM usuarios WHERE UserNames='$user'";
	$result=mysqli_query($conn, $query);
	
	while($row=mysqli_fetch_array($result)){
		$iduser=$row['id_usuario'];
	}
         
	//$iduser='0801199414344';
	
	$query2 ="INSERT INTO citas (id_usuario,id_doctor,Fecha_cita,Hora_cita,CitaCancelada) VALUES ('$iduser',$iddoctor,'$fecha',
			  '$hora','0')";
	if(!mysqli_query($conn, $query2)){
		$valores[]=$iduser.' '.mysqli_error($conn);
	}
	
	$query3 ="SELECT id_cita, NombreDoctor, ApellidoDoctor, NombreEspecialidad FROM citas C 
			 JOIN doctores D ON C.id_doctor=D.id_doctor 
			 JOIN especialidades E ON D.id_especialidad=E.id_especialidades
			 WHERE C.id_doctor=$iddoctor AND Fecha_cita='$fecha' AND Hora_cita='$hora'";
	$result3=mysqli_query($conn, $query3);
	$num=0;
	while($row=mysqli_fetch_array($result3)){
		$valores[]=$row['id_cita'].'^'.$row['NombreDoctor'].' '.$row['ApellidoDoctor'].'/'.$row['NombreEspecialidad'].'/'.     $fecha.'/'.$hora;
		$num=$num+1;
        }
	
	if($num==0){	
		$valores[]='No se pudo recuperar cita';
        }
	echo json_encode($valores);
	mysqli_close($conn);	
?> 
		