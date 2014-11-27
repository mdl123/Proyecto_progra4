function validarCitasUsuario(){
	if(document.getElementById("doctoresCitaUs").value=="" || document.getElementById("fechasCitasUs").value==""
	|| document.getElementById("horasCitasUs").value==""){
		alert("Nungún campo de cancelar cita puede estar vacío");
	}else{
		alert("Cita Cancelada correctamente");
		limpiar(1);
	}
}//fin de la funcion

function limpiar(opcion){
	document.getElementById("doctoresCitaUs").value=""
	document.getElementById("fechasCitasUs").value=""
	document.getElementById("horasCitasUs").value=""
	
}