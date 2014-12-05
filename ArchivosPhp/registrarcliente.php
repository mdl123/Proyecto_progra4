<?php 
	$conn=mysqli_connect('localhost','root','musica','health_book');
	
	if(mysqli_connect_errno($conn)){
	}else{
	}
	
	$idcliente = $_POST['id_usuario'];
	$nombre = $_POST['NombreUsuario'];
	$apellido = $_POST['ApellidoUsuario'];
	$direccion = $_POST['DirrecionUsuario'];
	$edad = $_POST['FechaNacimiento'];
	$tel = $_POST['TelefonoUsuario'];
	$correo = $_POST['CorreoUsuario'];
	$nombreusuario = $_POST['UserNames'];
	$contrasena = $_POST['UserPassword'];
	
	$query1 = "SELECT* FROM usuario WHERE id_usuario=$idcliente";
	$result1 = mysqli_query($conn,$query1);
	$query2= "SELECT* FROM usuario WHERE UserNames=$nombreusuario";
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
		echo "todocheque";
	}else if($contador!=0 && $contador2!=0){
		echo "El Número de Identidad y Nombre de usuario ya existen";
	}else if($contador!=0){
		echo "El Número de Identidad ya existe";
	}else if($contador2!=0){
		echo "El Nombre de Usuario ya existe";
	}
	
	
?> 
		