$( document ).ready(function() {
    var url="./ArchivosPhp/iniciocliente.php";
	$.ajax({type:"POST", url:url,data: $("#fr").serialize(),
		success: function(data)
		{
			var json=$.parseJSON(data);
			$num =0;
			while(json[$num]){
				var partes = json[$num].split("-");
				$('#especialidades').append('<option value='+partes[0]+'>'+partes[1]+'</option>');
				$num=$num+1;
			}
		
		}
	});
	var url="./ArchivosPhp/iniciocliente5.php";
	$.ajax({type:"POST", url:url,data: $("#fr").serialize(),
		success: function(data)
		{
			var json=$.parseJSON(data);
			$num =0;
			var fechaactual = new Date();
			var añoactual = fechaactual.getFullYear();
			var mesactual= fechaactual.getMonth()+1;
			var diaactual = fechaactual.getDate();
			var horaactual = fechaactual.getHours()+1;
			if(parseInt(mesactual)<10){
				mesactual="0"+fechaactual.getMonth()+1;
			}
			if(parseInt(diaactual)<10){
				diaactual="0"+fechaactual.getDate();
			}
			while(json[$num]){
				var partes = json[$num].split("^");
				var partes2 = partes[1].split("/");
				var añocampo = parseInt(partes2[2].charAt(0)+partes2[2].charAt(1)+partes2[2].charAt(2)+partes2[2].charAt(3));
				var mescampo;
				var diacampo;
				if(partes2[2].charAt(5)!='0'){
					mescampo=parseInt(partes2[2].charAt(5)+partes2[2].charAt(6));
				}else{
					mescampo=parseInt(partes2[2].charAt(6));
				}
				if(partes2[2].charAt(8)!='0'){
					diacampo=parseInt(partes2[2].charAt(8)+partes2[2].charAt(9));
				}else{
					diacampo=parseInt(partes2[2].charAt(9));
				}
				var hayerror=false;
				if(añocampo<parseInt(añoactual)){
					hayerror=true;
				}
				if(mescampo<parseInt(mesactual) && añocampo==parseInt(añoactual)){
					hayerror=true;
				}
				if(diacampo<parseInt(diaactual) && mescampo==parseInt(mesactual) && añocampo==parseInt(añoactual)){
					hayerror=true;
				}
				if(hayerror==false){
					if(partes2[3].charAt(0)!=0){
						var horavalor = parseInt(partes2[3].charAt(0)+partes2[3].charAt(1));
						if(!(horavalor<parseInt(horaactual) && (partes2[2]==(añoactual+"-"+mesactual+"-"+diaactual)))){
							$('#citas').append('<option value='+partes[0]+'>'+partes[1]+'</option>');
						}
					}else{
						var horavalor = parseInt(partes2[3].charAt(1));
						if(!(horavalor<parseInt(horaactual) && (partes2[2]==(añoactual+"-"+mesactual+"-"+diaactual)))){
							$('#citas').append('<option value='+partes[0]+'>'+partes[1]+'</option>');
						}
					}
				}
				$num=$num+1;
			}
		
		}
	});
});

function cambiar(){
	while(document.getElementById("doctores").length>0){
		document.getElementById("doctores").remove(0);
	}
	while(document.getElementById("horas").length>0){
		document.getElementById("horas").remove(0);
	}
	document.getElementById("fecha").value="";
	var url="./ArchivosPhp/iniciocliente2.php";
	$.ajax({type:"POST", url:url,data: $("#fr").serialize(),
		success: function(data)
		{
			var json=$.parseJSON(data);
			if(json[0]!="No hay doctores disponibles"){
				$num =0;
				while(json[$num]){
					var partes = json[$num].split("-");
					$('#doctores').append('<option value='+partes[0]+'>'+partes[1]+'</option>');
					$num=$num+1;
				}
			}else{
				alert("No hay doctores disponibles para la especialidad seleccionada");
			}
		
		}
	});
	
}//fin de la fncion

function nodoctores(){
	if(document.getElementById("doctores").length==0){
		$('#doctores').append('<option value="no">Debe seleccionar un doctor</option>');
		document.getElementById("fecha").value="";
	}else if(document.getElementById("doctores").value=="no"){
		document.getElementById("fecha").value="";
		
	}
}

function cambiar2(){
	document.getElementById("fecha").value="";
}

function cambiar3(){
	while(document.getElementById("horas").length>0){
		document.getElementById("horas").remove(0);
	}
	if(document.getElementById("fecha").value!="" && document.getElementById("fecha").value.length==10){
		$num =0;
		var fechaactual = new Date();
		var añoactual = fechaactual.getFullYear();
		var mesactual= fechaactual.getMonth()+1;
		var diaactual = fechaactual.getDate();
		var horaactual = fechaactual.getHours()+1;
		if(parseInt(mesactual)<10){
			mesactual="0"+fechaactual.getMonth()+1;
		}
		if(parseInt(diaactual)<10){
			diaactual="0"+fechaactual.getDate();
		}
		var fechacampo = document.getElementById("fecha").value;
		var añocampo = parseInt(fechacampo.charAt(0)+fechacampo.charAt(1)+fechacampo.charAt(2)+fechacampo.charAt(3));
		var mescampo;
		var diacampo;
		if(fechacampo.charAt(5)!='0'){
			mescampo=parseInt(fechacampo.charAt(5)+fechacampo.charAt(6));
		}else{
			mescampo=parseInt(fechacampo.charAt(6));
		}
		if(fechacampo.charAt(8)!='0'){
			diacampo=parseInt(fechacampo.charAt(8)+fechacampo.charAt(9));
		}else{
			diacampo=parseInt(fechacampo.charAt(9));
		}
		var hayerror=false;
		if(añocampo<parseInt(añoactual) || añocampo>2020){
			hayerror=true;
		}
		if(mescampo<parseInt(mesactual) && añocampo==parseInt(añoactual)){
			hayerror=true;
		}
		if(diacampo<parseInt(diaactual) && mescampo==parseInt(mesactual) && añocampo==parseInt(añoactual)){
			hayerror=true;
		}
		if(hayerror==false){
			var url="./ArchivosPhp/iniciocliente3.php";
			$.ajax({type:"POST", url:url,data: $("#fr").serialize(),
				success: function(data)
				{
					var json=$.parseJSON(data);
					if(json[0]!="No hay hora"){
						
						while(json[$num]){
							if(json[$num].charAt(0)!=0){
								var horavalor = parseInt(json[$num].charAt(0)+json[$num].charAt(1));
								if(!(horavalor<parseInt(horaactual) && (fechacampo==(añoactual+"-"+mesactual+"-"+diaactual)))){
									$('#horas').append('<option value='+json[$num]+'>'+json[$num]+'</option>');
								}
							}else{
								var horavalor = parseInt(json[$num].charAt(1));
								if(!(horavalor<parseInt(horaactual) && (fechacampo==(añoactual+"-"+mesactual+"-"+diaactual)))){
									$('#horas').append('<option value='+json[$num]+'>'+json[$num]+'</option>');
								}
							}
							
							$num=$num+1;
						}
						
					}else{
						$('#horas').append('<option value="no">No hay hora disponible para esta fecha</option>');
					}
				
				}
			});
		}
	}
}//fin de la funcion


function validarReservarCitasCliente(){
	if(document.getElementById("especialidades").value=="" || document.getElementById("doctores").value=="no" || document.getElementById("doctores").value==""
	|| document.getElementById("fecha").value=="" || document.getElementById("horas").value=="" || document.getElementById("horas").value=="no"){
		alert("Nungún campo de reservar puede estar vacío");
		formatofecha();
	}else{
		formatofecha();
		var url="./ArchivosPhp/iniciocliente4.php";
		$.ajax({type:"POST", url:url,data: $("#fr").serialize(),
		success: function(data)
			{
				var json=$.parseJSON(data);
				var partes = json[0].split("^");
				$('#citas').append('<option value='+partes[0]+'>'+partes[1]+'</option>');
				$num=$num+1;
					
				
		
			}
		});
		alert("Cita reservada correctamente");
		limpiar(1);
		
	}
}//fin de la funcion


function validarCancelarCitasCliente(){
	if(document.getElementById("citas").value==""){
		alert("No hay citas que cancelar");
	}else{
		var url="./ArchivosPhp/iniciocliente6.php";
		$.ajax({type:"POST", url:url,data: $("#fr").serialize(),
			success: function(data)
			{
		    }
		});
		$("#citas option:selected").remove();
		alert("Cita cancelada correctamente");
	}
}//fin de la funcion

function formatofecha(){
	var hayerror=false;
	var fecha = document.getElementById('fecha');
	if(fecha.value.length!=10 || fecha.value.charAt(4)!='-' || fecha.value.charAt(7)!='-'){
		alert("La fecha es incorrecta. Ingrese: aaaa-mm-dd");	
		hayerror=true;
	}
	if(hayerror){
		fecha.style.background ="red";
	}else{
		fecha.style.background ="white";
	}
}//fin de la funcion

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

function limpiar(opcion){
	if(opcion==1){
		while(document.getElementById("horas").length>0){
			document.getElementById("horas").remove(0);
		}
		while(document.getElementById("doctores").length>0){
			document.getElementById("doctores").remove(0);
		}
		document.getElementById("fecha").value="";
	}
	
}
