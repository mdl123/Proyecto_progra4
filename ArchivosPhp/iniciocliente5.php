<?php 

	//$conn=mysqli_connect('localhost','root','musica','health_book');
	//$user = $_SESSION["usuario"];
	$iduser;
	$valores=array();
	
	/*
	$query ="SELECT id_usuario FROM usuarios WHERE UserNames='$user'";
	$result=mysqli_query($conn, $query);
	
	//while($row=mysqli_fetch_array($result)){
		$iduser=$row['id_usuario'];
	//}
	
	$query2 ="SELECT C.id_cita, C.Fecha_cita, C.Hora_cita, D.NombreDoctor, D.ApellidoDoctor, E.NombreEspecialidad FROM citas C 
			 JOIN doctores D on C.id_doctor=D.id_doctor 
			 JOIN especialidades E on D.id_especialidad=E.id_especialidad
			 WHERE C.id_usuario=$iduser";
	$result2=mysqli_query($conn, $query2);
	
	//while($row=mysqli_fetch_array($result2)){
		$valores[]=$row['id_cita'].'^'.$row['NombreDoctor'].' '.$row['ApellidoDoctor'].'  '.$row['NombreEspecialidad'].'  '.$row['Fecha_cita'].'  '.
				   $row['Hora_cita'];
	//}
	*/
	
	$valores[]= "3^"."Denisse"." Carbajal"."  Pediatra"."  2014-12-07"."  04:00";
	$valores[]= "4^"."Luis"." less"."  General"."  2014-12-08"."  05:00";
    echo json_encode($valores);
	
	//mysqli_close($conn);	
?> 