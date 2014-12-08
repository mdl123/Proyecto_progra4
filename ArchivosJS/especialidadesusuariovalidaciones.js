function insertIntoDB (){
        var url= "./ArchivosPhp/especialidades.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                alert("Especialidad agregada correctamente");
                fillComboBox();
                //console.log(data);
            }
        });
}

function fillComboBox() {
        var url= "./ArchivosPhp/especialidades2.php";
        $.ajax({type:"POST", url:url,
            success: function(data)
            {
                 $("#list-target").html(data);
                //console.log(data);
            }
        });
}

function deleteEspeciality (){
        var url= "./ArchivosPhp/especialidades3.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                alert("Especialidad eliminada satisfactoriamente.");
                fillComboBox();
                console.log(data);
            }
        });
}

$( document ).ready(function() {
    fillComboBox();
  });

function validarEspecialidadesUsuario(){
	if(document.getElementById("NombreEspecialidadUs").value=="" || document.getElementById("DescripcionUs").value==""){
		alert("Nungún campo de agregar especialidad puede estar vacío");
	}else{
        insertIntoDB();
		limpiar(1);
	}
}//fin de la funcion

function validarEliminarEspecialidadesUsuario(){
	if(document.getElementById("list-target").value=="" ){
		alert("Nungún campo de eliminar especialidad puede estar vacío");
	}else{
        deleteEspeciality ();
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
		document.getElementById("list-target").value=""
	}
}