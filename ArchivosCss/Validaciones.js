
function validarRegistroCliente(){
	if(document.getElementById("IdCliente").value=="" || document.getElementById("NombreUsuario").value==""
	|| document.getElementById("ApellidoUsuario").value==""|| document.getElementById("DirUsuario").value==""
	|| document.getElementById("EdadUsuario").value=="" || document.getElementById("TelUsuario").value==""
	|| document.getElementById("CorreoUsuario").value=="" || document.getElementById("NomUsuario").value==""
	|| document.getElementById("conUsuario").value=="") {
		alert("Nungún campo puede estar vacío");	
	}else{
		var ret="";
		ret += validarNumId("IdCliente")+"\n";
		ret += validarEdad()+"\n";
		ret += validarTelefono("TelUsuario")+"\n";
		ret += validarCorreo()+"\n";
		ret += validarPassword()+"\n";

		if(ret!="\n\n\n\n\n"){
			alert(ret);
		}else{
			alert("Información ingresada correctamente");
			limpiar(1);
		}
	}
	
}//fin de la funcion


function validarReservarCitasCliente(){
	if(document.getElementById("especialidadesCl").value=="" || document.getElementById("doctorCl").value==""
	|| document.getElementById("fechaCl").value==""){
		alert("Nungún campo de reservar puede estar vacío");
	}else{
		alert("Cita reservada correctamente");
		limpiar(2);
	}
}//fin de la funcion

function validarCancelarCitasCliente(){
	if(document.getElementById("fechacitaCl").value==""){
		alert("Nungún campo de cancelar puede estar vacío");
	}else{
		alert("Cita cancelada correctamente");
		limpiar(3);
	}
}//fin de la funcion

function validarEspecialidadesUsuario(){
	if(document.getElementById("NombreEspecialidadUs").value=="" || document.getElementById("DescripcionUs").value==""){
		alert("Nungún campo de agregar especialidad puede estar vacío");
	}else{
		alert("Especialidad agregada correctamente");
		limpiar(4);
	}
}//fin de la funcion

function validarEliminarEspecialidadesUsuario(){
	if(document.getElementById("especialidadesUs").value=="" ){
		alert("Nungún campo de eliminar especialidad puede estar vacío");
	}else{
		alert("Especialidad eliminada correctamente");
		limpiar(5);
		
	}
}//fin de la funcion

function validaeDoctoresUsuario(){
	if(document.getElementById("Id_Doctor").value=="" || document.getElementById("NombreDoctor").value==""
	|| document.getElementById("ApellidoDoctor").value=="" || document.getElementById("especialidadesDoctorUs").value==""
	|| document.getElementById("CelDoctor").value==""){
		alert("Nungún campo de agregar doctor puede estar vacío");
	}else{
		var ret="";
		ret += validarNumId("Id_Doctor")+"\n";
		ret += validarTelefono("CelDoctor")+"\n";
		if(ret!="\n\n"){
			alert(ret);
		}else{
			alert("Doctor agregado correctamente");
			limpiar(6);
		}
	}
}//fin de la funcion

function validarEliminarDoctoresUsuario(){
	if(document.getElementById("doctoresUs").value=="" ){
		alert("Nungún campo de eliminar doctor puede estar vacío");
	}else{
		alert("Doctor eliminado correctamente");
		limpiar(7);
	}
}//fin de la funcion

function validarCitasUsuario(){
	if(document.getElementById("doctoresCitaUs").value=="" || document.getElementById("fechasCitasUs").value==""
	|| document.getElementById("horasCitasUs").value==""){
		alert("Nungún campo de cancelar cita puede estar vacío");
	}else{
		alert("Cita Cancelada correctamente");
		limpiar(8);
	}
}//fin de la funcion

function entradaNumeros(e){
	var key=e.keyCode || e.which;
	var teclado=String.fromCharCode(key);
	var numeros="0123456789";
	var especiales="8-37-38-46-39";
	var teclado_especial=false;
    for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true;
		}
	}
    if(numeros.indexOf(teclado)==-1 && !teclado_especial){
		return false;
	}
} 

function entradaLetras(e){
	var key=e.keyCode || e.which;
	var teclado=String.fromCharCode(key);
	var letras="abcdefghijklmnñopqrstuvwxyzéáíóú ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ";
	var especiales="8-37-38-46-39";
	var teclado_especial=false;
    for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true;
		}
	}
    if((letras.indexOf(teclado)==-1 ) && !teclado_especial){
		return false;
	}
}
function entradaCombinada(e){
	var key=e.keyCode || e.which;
	var teclado=String.fromCharCode(key);
	var letras="abcdefghijklmnñopqrstuvwxyz0123456789";
	var especiales="8-37-38-46-39";
	var teclado_especial=false;
    for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true;
		}
	}
    if((letras.indexOf(teclado)==-1 ) && !teclado_especial){
		return false;
	}
}

function validarNumId(campo){

	var num=document.getElementById(campo);
	var ret="";
	var HayError=false;
	console.log(num.value);
    if(num.value.length!=13){
		ret+="El largo del Número de Identidad esta erróneo"+"\n";
		HayError=true;
	}//fin del if
    if(HayError==true){
		num.style.background = 'Red';
	}else{
		num.style.background = 'white'
	}
	return ret;
}//fin de la funcion


function validarEdad(){
	var edad=document.getElementById("EdadUsuario");
	var ret="";
	var HayError=false;
	if(edad.value.length >2  || edad.value.length == 1){
		ret+="La edad debe estar entre: [18-99] "+"\n";
		HayError=true;
	}//fin del if
    if(HayError==true){
		edad.style.background = 'Red';
	}else{
		edad.style.background = 'white'
	}
	return ret;
}//fin de la funcion


function validarTelefono(campo){
	var telefono= document.getElementById(campo);
	var ret="";
	var HayError=false;
	if(telefono.value.length!=8){
		ret+="El campo telefóno debe contener 8 números"+"\n";
		HayError=true;
	}//fin del if

	if(HayError==true){
		telefono.style.background = 'Red';
	}else{
		telefono.style.background = 'white'
	}
	return ret;
}//fin de la funcion

function validarCorreo(){
	var correo=document.getElementById("CorreoUsuario");
	var RegExPattern = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	var ret="";
	var textoEntrada = correo.value;
	var HayError=true;
	if((textoEntrada.match(RegExPattern)) && (textoEntrada.value != "")){
		ret+="El campo Correo Electrónico contiene información inválida"+"\n";
		HayError=false;	
	}//fin del if
	if(HayError==true){
		 correo.style.background = 'Red';
	}//fin del if
	return ret;

}//fin de la funcion



function validarPassword(){
	var ret="";
	var password=document.getElementById("conUsuario");
	var HayError=false;
	if(password.value.length<8){
		ret+="El campo Contraseña debe tener al menos 8 caracteres: letras o números"+"\n";
		HayError=true;
	}//fin del if
	if(HayError==true){
		password.style.background = 'Red';
	}else{
		password.style.background = 'white'
	}
	return ret;
}//fin de la funcion

function limpiar(opcion){
	if(opcion==1){
		document.getElementById("IdCliente").value=""
		document.getElementById("NombreUsuario").value=""
		document.getElementById("ApellidoUsuario").value=""
		document.getElementById("DirUsuario").value=""
		document.getElementById("EdadUsuario").value=""
		document.getElementById("TelUsuario").value=""
		document.getElementById("CorreoUsuario").value=""
		document.getElementById("NomUsuario").value=""
		document.getElementById("conUsuario").value=""
	}else if(opcion==2){
		document.getElementById("especialidadesCl").value="" 
		document.getElementById("doctorCl").value=""
		document.getElementById("fechaCl").value=""
	}else if(opcion==3){
		document.getElementById("fechacitaCl").value=""
	}else if(opcion==4){
		document.getElementById("NombreEspecialidadUs").value=""
		document.getElementById("DescripcionUs").value=""
	}else if(opcion==5){
		document.getElementById("especialidadesUs").value=""
	}else if(opcion==6){
		document.getElementById("Id_Doctor").value=""
		document.getElementById("NombreDoctor").value=""
		document.getElementById("ApellidoDoctor").value=""
		document.getElementById("especialidadesDoctorUs").value=""
		document.getElementById("CelDoctor").value=""
	}else if(opcion==7){
		document.getElementById("doctoresUs").value="" 
	}else if(opcion==8){
		document.getElementById("doctoresCitaUs").value=""
		document.getElementById("fechasCitasUs").value=""
		document.getElementById("horasCitasUs").value=""
	}
}

