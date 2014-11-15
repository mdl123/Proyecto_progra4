
function validar(){

var ret="";
	ret += validarNumId()+"\n";
	ret += validarNombreApellido()+"\n";
	ret += validarDirrecion()+"\n";
	ret += validarEdad()+"\n";
	ret += validarTelefono()+"\n";
	ret += validarCorreo()+"\n";
	ret += validarUserName()+"\n";
	ret += validarPassword()+"\n";

	if(ret){
		alert(ret);
	}//fin del if

return true;
}//fin de la funcion





function validarNumId(){

var num=document.forms[0].elements[0];

var ret="";
var cont=0;

var HayError=false;
console.log(num.value);

	if(num.value==""){
		
		HayError=true;
		ret = "El campo Número de Identidad, no puede estar vacio";
	}//fin del if
	else{
	if(num.value.length!=13){
			ret+="El largo del Número de Identidad esta erroneo"+"\n";
			HayError=true;
			
	}//fin del if

	for(var i=0;i<num.value.length;i++){
	if(isNaN(num.value.charAt(i))==true&&cont==0){
		ret+="Caracteres erroneos en el campo Número de Identidad"+"\n"	;
		HayError=true;
		cont=1;
	}//fin del if
	}//fin del for
	}//fin del else
	if(HayError==true){
	num.style.background = 'Red';
	}//fin del if
return ret;
}//fin de la funcion



function validarNombreApellido(){
var nombre=document.forms[0].elements[1];
var apellido=document.forms[0].elements[2];
var HayError=false;
var temp=nombre;
var mensaje="Nombre";
var ret="";
var cont=0;

	for(var i=0;i<=1;i++){
	if(temp.value==""){
		ret+="El campo "+mensaje+ ", no puede esta vacio"+"\n";
		 HayError=true;
	}//fin del if
	for(var i2=0;i2<temp.value.length;i2++){
		if(isNaN(temp.value.charAt(i2))==false&&cont==0){
			ret+="El campo"+mensaje+ " no puede contener números"+"\n";
			HayError=true;
			cont=1;
		}//fin del if
	}//fin del segundo for
	if(HayError==true){
		temp.style.background = 'Red';
	}//fin del if
	temp=apellido;
	mensaje="Apellido";
	cont=1;
	}//fin del primer for
return ret;
}//fin de la funcion


function validarDirrecion(){
var dirrecion=document.forms[0].elements[3];
var ret="";
if(dirrecion.value==""){
ret="El campo Dirreción no puede estar vacío"+"\n";
dirrecion.style.background = 'Red';
}//fin del if
return ret;
}//fin del la funcion


function validarEdad(){
var cont=0;
var edad=document.forms[0].elements[4];
var ret="";
var HayError=false;
if(edad.value==""){
ret="El campo Edad no puede estar vacio";
HayError=true;
}//fin del if

for(var i=0;i<edad.value.length;i++){
	if(isNaN(edad.value.charAt(i))==true&&cont==0){
		HayError=true;
		ret+="El campo Edad solo puede contener números"+"\n";
		cont=1;
	}//fin del if
}//fin del for

if(edad.value.length>3){
HayError=true;
ret+="El campo Edad solo puede contener 3 números a lo mas"+"\n";
}//fin del if

if(HayError==true){
edad.style.background = 'Red';
}//fin del if

return ret;
}//fin de la funcion


function validarTelefono(){
var telefono=document.forms[0].elements[5];
var ret="";
var cont=0;
var HayError=false;
var SoloNum=true;
if(telefono.value==""){
ret="El campo Telefóno no puede estar vacio";
HayError=true;
}//fin del if

for(var i=0;i<telefono.value.length;i++){
	if(isNaN(telefono.value.charAt(i))==true&&cont==0){
		ret+="El campo Telefóno solo puede contener números"+"\n";
		SoloNum=false;
		HayError=true;
		cont=1;
	}//fin del if
}//fin del for

if((telefono.value.length>8) && SoloNum==true){
ret+="El campo telefóno debe contener 8 números, no mas"+"\n";
HayError=true;
}//fin del if

if((telefono.value.length<8) && telefono.value!="" && SoloNum==true){
ret+="El campo telefóno debe tener 8 números, no menos"+"\n";
HayError=true;
}//fin del if
if(HayError==true){
telefono.style.background = 'Red';
}//fin del if
return ret;
}//fin de la funcion

function validarCorreo(){
var correo=document.forms[0].elements[6];
var ret="";
var HayError=false;
var cont=0;
	if(correo.value==""){
		ret="El campo Correo Electronico no puede ir vacío"+"\n";
		HayError=true;
	}//fin del if
	else{
        if(correo.value.indexOf("@")==-1||correo.value.indexOf(".")==-1){
		ret+="El campo Correo Electronico contiene información invalida"+"\n";
		HayError=true;
	}//fin del if
	}//fin del else
	if(HayError==true){
	  correo.style.background = 'Red';
	}//fin del if
return ret;

}//fin de la funcion


function validarUserName(){
var ret="";
var UserName=document.forms[0].elements[7];

	if(UserName.value==""){
	ret="El campo Nombre de Usuario, no puede ir vacío"+"\n";
	UserName.style.background = 'Red';
	}//fin del if

return ret;
}//fin de la funcion

function validarPassword(){
var ret="";
var password=document.forms[0].elements[8];
var HayError=false;
	if(password.value==""){
		ret="El campo Contraseña, no puede ir vacío"+"\n";
		HayError=true;
	}//fin del if
	else{
	if(password.value.length<8){
		ret+="El campo Contraseña debe ser tener al menos 8 letras o números"+"\n";
		HayError=true;
	}//fin del if
	}//fin del else
	if(HayError==true){
		password.style.background = 'Red';
	}//fin del if
return ret;
}//fin de la funcion

