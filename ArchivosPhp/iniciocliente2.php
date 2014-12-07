<?php 
   
	//$conn=mysqli_connect('localhost','root','musica','health_book');
	
    $id = $_POST['especialidades'];

	//$query = "SELECT id_doctor, NombreDoctor, ApellidoDoctor FROM doctores WHERE id_especialidad=$id";
	//$result = mysqli_query($conn,$query);
	
	$valores=array();
	$num=0;
	//while($row=mysqli_fetch_array($result)){
		//$valores[]= $row['id_doctor']."-".$row['NombreDoctor']." ".$row['ApellidoDoctor'];
		//$num=$num+1;
	//}
	
	//if($num==0){
		//$valores[]="No hay doctores disponibles";
	//}
     
	if($id=="1"){
		$valores[]= "1-sandra pablo";
	}else if($id=="2"){
		$valores[]= "2-marcos salo";
		$valores[]="3-layin";
		$valores[]= "4-super";
	}
	
	echo json_encode($valores);
	
	//mysqli_close($conn);
	
?> 
		