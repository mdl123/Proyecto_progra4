
$(function(){
	$("#RegistrarCliente_button").click(function(){
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
			var url="../ArchivosPhp/registrarcliente.php";
			$.ajax({type:"POST", url:url,data: $("#fr").serialize(),
				success: function(data)
				{
					$("#info").val(data);
				}
			});
			limpiar(1);
		}
	}
});

});//fin de la funcion


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
	var HayError=false;
	if((textoEntrada.match(RegExPattern))){
			
	}else{
	   ret+="El campo Correo Electrónico contiene información inválida"+"\n";
	   HayError =true;
	}
	if(HayError==true){
		 correo.style.background = 'Red';
	}else{
		correo.style.background = 'white'
	}
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
	document.getElementById("IdCliente").value=""
	document.getElementById("NombreUsuario").value=""
	document.getElementById("ApellidoUsuario").value=""
	document.getElementById("DirUsuario").value=""
	document.getElementById("EdadUsuario").value=""
	document.getElementById("TelUsuario").value=""
	document.getElementById("CorreoUsuario").value=""
	document.getElementById("NomUsuario").value=""
	document.getElementById("conUsuario").value=""
	
}

