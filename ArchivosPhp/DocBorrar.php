<?PHP

$conn = mysqli_connect('localhost', 'root', '', 'health_book') or die("unable to connect");

if(!$conn){
	die("Connection failed: " . mysqli_connect_error());
}//fin del if

$idDoc=$_POST["list2"];

$idDoc=mysql_real_escape_string($conn,$idDoc);

$query = "delete * from doctores where id_doctor=$idDoc";//error

mysqli_close($conn);

?>