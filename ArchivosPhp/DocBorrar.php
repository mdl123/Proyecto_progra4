<?PHP

	$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');

	if(!$conn){
		die("Connection failed: " . mysqli_connect_error());
	}//fin del if

	$idDoc=$_POST["list2"];

	$query = "delete from doctores where id_doctor=$idDoc";//error
	mysqli_query($conn, $query);

	mysqli_close($conn);

?>