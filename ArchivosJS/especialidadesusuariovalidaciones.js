function insertIntoDB (){
        var url= "./ArchivosPhp/especialidades.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                alert("Especialidad agregada correctamente");
                console.log(data);
            }
        });
}

function validarEspecialidadesUsuario(){
	if(document.getElementById("NombreEspecialidadUs").value=="" || document.getElementById("DescripcionUs").value==""){
		alert("Nungún campo de agregar especialidad puede estar vacío");
	}else{
        insertIntoDB();
		limpiar(1);
	}
}//fin de la funcion

function validarEliminarEspecialidadesUsuario(){
	if(document.getElementById("especialidadesUs").value=="" ){
		alert("Nungún campo de eliminar especialidad puede estar vacío");
	}else{
		alert("Especialidad eliminada satisfactoriamente.");
		limpiar(2);
		
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

function limpiar(opcion){
	if(opcion==1){
		document.getElementById("NombreEspecialidadUs").value=""
		document.getElementById("DescripcionUs").value=""
	}else if(opcion==2){
		document.getElementById("especialidadesUs").value=""
	}
}