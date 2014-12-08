<?php 
	$$conn=mysqli_connect('localhost','citasmedicas','progra4','health_book');
	
	$id=$_POST['doctores'];
	$fecha =$_POST['fecha'];
	$listahoras = array("00:00", "01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00"
						,"13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00");
    	$valores=array();
	$query = "SELECT Hora_cita FROM citas WHERE id_doctor=$id AND Fecha_cita='$fecha' AND CitaCancelada='0'";
	$result = mysqli_query($conn,$query);
	
	if(mysqli_num_rows($result)==0){
		echo json_encode($listahoras);
	}else{
		while($row=mysqli_fetch_array($result)){
			for($i=0;$i<24;$i++){
				if($listahoras[$i]==$row['Hora_cita']){
					$listahoras[$i]="";
					break 1;
				}
			}
		}
		for($i=0;$i<24;$i++){
			if($listahoras[$i]!=""){
				$valores[]=$listahoras[$i];
			}
		}
		if(sizeof($valores)==0){
			$valores[]="No hay hora";
		}
		echo json_encode($valores);
	}
	
?> 
		