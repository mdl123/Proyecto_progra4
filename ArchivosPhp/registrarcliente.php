<?php 
	$conn=mysqli_connect('localhost','citasmedicasuser','progra4','citasmedicas');
	
	if(mysqli_connect_errno($conn)){
	}else{
	}
	
	$idcliente = $_POST['IdCliente'];
	$nombre = $_POST['NombreUsuario'];
	$apellido = $_POST['ApellidoUsuario'];
	$direccion = $_POST['DirUsuario'];
	$edad = $_POST['EdadUsuario'];
	$tel = $_POST['TelUsuario'];
	$correo = $_POST['CorreoUsuario'];
	$nombreusuario = $_POST['NomUsuario'];
	$contrasena = $_POST['conUsuario'];
	
	$query1 = "SELECT* FROM usuario WHERE idusuario=$idcliente";
	$result1 = mysqli_query($conn,$query1);
	$query2= "SELECT* FROM usuario WHERE username=$nombreusuario";
	$result2 = mysqli_query($conn,$query2);
	
	$contador=0;
	$contador2=0;
	while($row=mysqli_fetch_array($result1)){
		$contador=$contador+1;
	}
	while($row=mysqli_fetch_array($result1)){
		$contador2=$contador2+1;
	}
	if($contador==0 && $contador2==0){
		header('Location: ../ArchivosPhp/LoginPage.html');
	}else if($contador!=0 && $contador2!=0){
		echo "El Número de Identidad y Nombre de usuario ya existen";
	}else if($contador!=0){
		echo "El Número de Identidad ya existe";
	}else if($contador2!=0){
		echo "El Nombre de Usuario ya existe";
	}
	
	
?> 
		