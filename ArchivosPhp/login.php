<?php 
	$conn=mysqli_connect('localhost','citasmedicasuser','progra4','citasmedicas');
	
	if(mysqli_connect_errno($conn)){
	}
	else{
	}//fin del else
	
	$nombreUsuario= $_POST['nomUsuario'];
	$passUsuario=  $_POST['conUsuario'];

	$query1 = "SELECT* FROM usuarios WHERE UserNames=$nombreUsuario";
	$result1 = mysqli_query($conn,$query1);
	$query2 = "SELECT* FROM usuarios WHERE UserPassword=$passUsuario";
	$result2 = mysqli_query($conn,$query2);
	
	
	$contador=0;
	$contador2=0;
	while($row=mysqli_fetch_array($result1)){
		$contador=$contador+1;
	}
	while($row=mysqli_fetch_array($result1)){
		$contador2=$contador2+1;
	}
	if($contador!=0 && $contador2!=0){
		header('Location: ../LoginPage.html');
		//inicializando las variables de sesion
		$_SESSION["usuario"]=$nombreUsuario;
		$_SESSION["pass"]=$passUsuario;
	}

	if($contador==0 || $contador2==0){
		echo '<script type="text/javascript">alert("Nombre de usuario y/o contraseña equivocada"); </script>';

	}//fin del if
		
?> 