
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
					var json=$.parseJSON(data);
					alert(json.dato1);
					if(json.dato1=="Usuario agregado correctamente"){
						alert("Ahora puedes entrar con tu usuario y contraseña");
						document.location.href='../LoginPage.html';
					}
				}
			});
		
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

function entradaFecha(e){
	var key=e.keyCode || e.which;
	var teclado=String.fromCharCode(key);
	var numeros="0123456789";
	var letras="-"
	var especiales="8-37-38-46-39";
	var teclado_especial=false;
    	for(var i in especiales){
		if(key==especiales[i]){
			teclado_especial=true;
		}
	}
    	if(numeros.indexOf(teclado)==-1 && letras.indexOf(teclado)==-1  && !teclado_especial){
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
		ret+="El largo del Número de Identidad deber ser de 13 dígitos"+"\n";
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
	if(edad.value.length !=10 || edad.value.charAt(4)!='-' || edad.value.charAt(7)!='-'){
		ret+="Fecha de Nacimiento incorrecta"+"\n";
		HayError=true;
	}else{
		var unionaño = edad.value.charAt(0)+edad.value.charAt(1)+edad.value.charAt(2)+edad.value.charAt(3);
		var año = parseInt(unionaño);
		if(año>1996 || año<1910){
			ret+="El rango del año es: 1910-1996 "+"\n";
			HayError=true;
		}
		if(edad.value.charAt(5)!='0'){
			var mes = parseInt(edad.value.charAt(5)+edad.value.charAt(6));
			if(mes>12 || mes<10){
				ret+="El rango del mes es: 01-12"+"\n";
				HayError=true;
			}
		}
		if(edad.value.charAt(8)!='0'){
			var dia = parseInt(edad.value.charAt(8)+edad.value.charAt(9));
			if(dia>31 || dia<10){
				ret+="El rango del día es: 01-31"+"\n";
				HayError=true;
			}
		}
	}
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
	   ret+="El campo Correo electrónico contiene información incorrecta"+"\n";
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
		ret+="El campo contraseña debe tener al menos 8 caracteres: letras o números"+"\n";
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

