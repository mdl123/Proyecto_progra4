
function validarRegistroCliente(){
	if(document.getElementById("IdCliente").value=="" || document.getElementById("NombreUsuario").value==""
	|| document.getElementById("ApellidoUsuario").value==""|| document.getElementById("DirUsuario").value==""
	|| document.getElementById("EdadUsuario").value=="" || document.getElementById("TelUsuario").value==""
	|| document.getElementById("CorreoUsuario").value=="" || document.getElementById("NomUsuario").value==""
	|| document.getElementById("conUsuario").value=="") {
		alert("Nungún campo puede estar vacío");	
	}else{
		var ret="";
		ret += validarNumId()+"\n";
		ret += validarEdad()+"\n";
		ret += validarTelefono()+"\n";
		ret += validarCorreo()+"\n";
		ret += validarPassword()+"\n";

		if(ret!="\n\n\n\n\n"){
			alert(ret);
		}else{
			alert("Información ingresada correctamente");
		}
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



function validarNumId(){

	var num=document.getElementById("IdCliente");
	var ret="";
	var HayError=false;
	console.log(num.value);
    if(num.value.length!=13){
		ret+="El largo del Número de Identidad esta erróneo"+"\n";
		HayError=true;
	}//fin del if
    if(HayError==true){
		num.style.background = 'Red';
	}//fin del if
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
	}//fin del if
	return ret;
}//fin de la funcion


function validarTelefono(){
	var telefono= document.getElementById("TelUsuario");
	var ret="";
	var HayError=false;
	if(telefono.value.length>8){
		ret+="El campo telefóno debe contener 8 números"+"\n";
		HayError=true;
	}//fin del if

	if(HayError==true){
		telefono.style.background = 'Red';
	}//fin del if
	return ret;
}//fin de la funcion

function validarCorreo(){
	var correo=document.getElementById("CorreoUsuario");
	var ret="";
	var HayError=false;
	var cont=0;
	if(correo.value.indexOf("@")==-1||correo.value.indexOf(".")==-1){
		ret+="El campo Correo Electrónico contiene información inválida"+"\n";
		HayError=true;
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
	}//fin del if
	return ret;
}//fin de la funcion

