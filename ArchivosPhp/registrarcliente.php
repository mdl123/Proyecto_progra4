<?php 
	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	
	$idcliente = $_POST['IdCliente'];
	$nombre = $_POST['NombreUsuario'];
	$apellido = $_POST['ApellidoUsuario'];
	$direccion = $_POST['DirUsuario'];
	$edad = $_POST['EdadUsuario'];
	$tel = $_POST['TelUsuario'];
	$correo = $_POST['CorreoUsuario'];
	$nombreusuario = $_POST['NomUsuario'];
	$contrasena = $_POST['conUsuario'];
	
	
	$query1= "SELECT * FROM usuarios WHERE UserNames='$nombreusuario'";
	$result1 = mysqli_query($conn,$query1);
	
	$rowcount1=mysqli_num_rows($result1);
	$valores;
	
	if($rowcount1==0){
		$query2 ="INSERT INTO usuarios (id_usuario,UserNames,UserPassword, NombreUsuario, ApellidoUsuario, FechaNacimiento,
			  TelefonoUsuario, CorreoUsuario, DirrecionUsuario, EsAdmin) VALUES ('$idcliente','$nombreusuario',
			  '$contrasena','$nombre','$apellido', '$edad', '$tel','$correo','$direccion','0')";
		if (mysqli_query($conn, $query2)) {
			$valores = array("dato1"=>"Usuario agregado correctamente");
		} else {
			$valores = array("dato1"=>"El número de identidad no esta disponible");
		}
	}else if($rowcount1>0){
			$valores = array("dato1"=>"El número de usuario no esta disponible");
	}
	echo json_encode($valores);
	
	mysqli_close($conn);
?> 