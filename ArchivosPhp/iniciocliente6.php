<?php 
	session_start();
	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	$idcita = $_POST['citas'];
	$query = "UPDATE citas SET CitaCancelada='1' WHERE id_cita=$idcita";
	$result = mysqli_query($conn,$query);
	
	mysqli_close($conn);	
?> 
		