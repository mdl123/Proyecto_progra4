<?php
echo '<script type="text/javascript">alert("Bad ends")</script>';
$conn = mysqli_connect('localhost', 'root', '', 'health_book') or die("unable to connect");
echo '<script type="text/javascript">alert("Bad ends")</script>';
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
	 echo '<script type="text/javascript">alert("Bad ")</script>';
} //fin del if
$NombreDoc       = $_POST["NombreDoctor"];
$ApellidoDoc     = $_POST["ApellidoDoctor"];
$CelDoc          = $_POST["CelDoctor"];
$EspecialidadDoc = $_POST["list"];


$NombreDoc       = mysqli_real_escape_string($conn,$NombreDoc);
$ApellidoDoc     = mysqli_real_escape_string($conn,$ApellidoDoc);
$CelDoc          = mysqli_real_escape_string($conn,$CelDoc);
$EspecialidadDoc = mysqli_real_escape_string($conn,$EspecialidadDoc);



$sql = "Insert into doctores (id_especialidad,NombreDoctor,ApellidoDoctor,CelularDoctor) values($EspecialidadDoc,'$NombreDoc','$ApellidoDoc','$CelularDoc')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
	 echo '<script type="text/javascript">alert("Exito")</script>';
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	 echo '<script type="text/javascript">alert("Bad 2")</script>';
}

mysqli_close($conn);

?> 