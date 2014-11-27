function validarReservarCitasCliente(){
	if(document.getElementById("especialidadesCl").value=="" || document.getElementById("doctorCl").value==""
	|| document.getElementById("fechaCl").value==""){
		alert("Nungún campo de reservar puede estar vacío");
	}else{
		alert("Cita reservada correctamente");
		limpiar(1);
	}
}//fin de la funcion


function validarCancelarCitasCliente(){
	if(document.getElementById("fechacitaCl").value==""){
		alert("Nungún campo de cancelar puede estar vacío");
	}else{
		alert("Cita cancelada correctamente");
		limpiar(2);
	}
}//fin de la funcion

function limpiar(opcion){
	if(opcion==1){
		document.getElementById("especialidadesCl").value="" 
		document.getElementById("doctorCl").value=""
		document.getElementById("fechaCl").value=""
	}
	else if(opcion==2){
		document.getElementById("fechacitaCl").value=""
	}
}