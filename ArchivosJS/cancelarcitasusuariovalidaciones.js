function fillComboBoxHoras() {
  var url= "./ArchivosPhp/cancelarcitas3.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                $("#horasCitasUs").html(data);
                console.log(data);
            }
        });
}

function fillComboBoxFechas() {
  var url= "./ArchivosPhp/cancelarcitas2.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                $("#fechasCitasUs").html(data);
                fillComboBoxHoras();
                //console.log(data);
            }
        });
}


function fillComboBox() {
        var url= "./ArchivosPhp/cancelarcitas.php";
        $.ajax({type:"POST", url:url,
            success: function(data)
            {
                 $("#doctoresCitaUs").html(data);
                fillComboBoxFechas();
                //console.log(data);
            }
        });
}

function hacerCancelacion() {
    var r = confirm("¿Desea realmente cancelar la cita?");
    if (r == true) {
      var url= "./ArchivosPhp/cancelarcitas4.php";
        $.ajax({type:"POST", url:url,data: $("#fr").serialize(),
            success: function(data)
            {
                alert("Cita Cancelada correctamente");
                console.log(data);
            }
        });
    } else {
       alert("No se realizaron cambios.");
    }
}

$( document ).ready(function() {
    fillComboBox();
});

function validarCitasUsuario(){
	if(document.getElementById("doctoresCitaUs").value=="" || document.getElementById("fechasCitasUs").value==""
	|| document.getElementById("horasCitasUs").value==""){
		alert("Nungún campo de cancelar cita puede estar vacío");
	}else{
		hacerCancelacion();
		limpiar(1);
	}
}//fin de la funcion

function limpiar(opcion){
	fillComboBox();	
}