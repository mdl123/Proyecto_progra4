<?php
	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	    echo '<script type="text/javascript">alert("Bad")</script>';
	} //fin del if
	$NombreDoc       = $_POST["NombreDoctor"];
	$ApellidoDoc     = $_POST["ApellidoDoctor"];
	$CelDoc          = $_POST["CelDoctor"];
	$EspecialidadDoc = $_POST["list"];

	$NombreDoc       = mysqli_real_escape_string($conn,$NombreDoc);
	$ApellidoDoc     = mysqli_real_escape_string($conn,$ApellidoDoc);
	$CelDoc          = mysqli_real_escape_string($conn,$CelDoc);
	$EspecialidadDoc = mysqli_real_escape_string($conn,$EspecialidadDoc);


	$sql = "Insert into doctores (id_especialidad, NombreDoctor, ApellidoDoctor, CelularDoctor) values      ($EspecialidadDoc,'$NombreDoc','$ApellidoDoc','$CelDoc')";

	if (mysqli_query($conn, $sql)) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);

?> 