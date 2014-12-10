function insertIntoDB (){
        var url= "./ArchivosPhp/DocInsertar.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                alert("Doctor agregado correctamente");
                fillComboBox();
                console.log(data);
            }
        });
}




function fillComboBox2() {
        var url= "./ArchivosPhp/EspecLLenar.php";
        $.ajax({type:"POST", url:url,
            success: function(data)
            {
                 $("#list").html(data);
                //console.log(data);
            }
        });
}



function fillComboBox() {
        var url= "./ArchivosPhp/DocLLenar.php";
        $.ajax({type:"POST", url:url,
            success: function(data)
            {
                 $("#list2").html(data);
                //console.log(data);
            }
        });
}

function deleteDoc(){
        var url= "./ArchivosPhp/DocBorrar.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                alert("Doctor eliminado satisfactoriamente.");
                fillComboBox();
                console.log(data);
            }
        });
}

$( document ).ready(function() {
	fillComboBox2();
    	fillComboBox();
    
});

function validarDoctoresUsuario(){
	if(document.getElementById("Id_Doctor").value=="" || document.getElementById("NombreDoctor").value==""
	|| document.getElementById("ApellidoDoctor").value=="" || document.getElementById("list").value==""
	|| document.getElementById("CelDoctor").value==""){
		alert("Nungún campo de agregar doctor puede estar vacío");
	}
	else{
		var ret="";
		ret += validarNumId("Id_Doctor")+"\n";
		ret += validarTelefono("CelDoctor")+"\n";
		if(ret!="\n\n"){
			alert(ret);
		}else{
        		insertIntoDB();
			limpiar(1);
		}
	}//fin del else grande
		
}//fin de la funcion

function validarEliminarDoctoresUsuario(){
	if(document.getElementById("list2").value=="" ){
		alert("Nungún campo de eliminar doctor puede estar vacío");
	}else{
        	deleteDoc();
	}
}//fin de la funcion

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


function validarNumId(campo){

	var num=document.getElementById(campo);
	var ret="";
	var HayError=false;
	console.log(num.value);
    if(num.value.length!=13){
		ret+="El Número de Identidad debe tener 13 dígitos"+"\n";
		HayError=true;
	}//fin del if
    if(HayError==true){
		num.style.background = 'Red';
	}else{
		num.style.background = 'white'
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

function limpiar(opcion){
	if(opcion==1){
		document.getElementById("Id_Doctor").value=""
		document.getElementById("NombreDoctor").value=""
		document.getElementById("ApellidoDoctor").value=""
		document.getElementById("CelDoctor").value=""
	}else if(opcion==2){
		document.getElementById("doctoresUs").value="" 
	}
}



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

