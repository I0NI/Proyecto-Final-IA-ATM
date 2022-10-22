/* Andy Aquino 0909-22-1669
Ioni Rodas 0909-22-7492 */

function login() {

var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;
	if (user=="0909221669" && pass=="2022"){
		window.location="RetiroCajero.html";
		return false;
}
	else {
		alert("ERROR, usuario o contraseña incorrectos");
		return false;
	}

}

function NuevoPin() {
var user2=document.getElementById("username2").value;
var pass2=document.getElementById("pinN").value;

	if (user2=="2022" && pass2>=0){
		window.location="InicioCajero.html";
		return false;
}
	else {
		alert("ERROR, PIN incorrecto");
		return false;
	}
}


function regresar(){
window.location="InicioCajero.html"
}

function PIN(){
window.location="PinCajero.html"
}


function retirarQ(cuenta1,TotalRetiro){

    this.cuenta1 = cuenta1;
    this.TotalRetiro = TotalRetiro;

if (document.getElementById("retirar").value == 0) {
	alert("Ingresa la cantidad a retirar por favor!");
    }
  
    else {

  	var TotalRetiro = parseInt(document.getElementById("retirar").value)
  	var cuenta1 = parseInt(document.getElementById("ac1").value);
  	document.getElementById("ac1").value = ( cuenta1 - TotalRetiro);
  	alert("Retiro Exitoso, tome su dinero")
	}
  

}

function retirarD(cuenta2,TotalRetiro){

	this.cuenta2 = cuenta2;
	this.TotalRetiro= TotalRetiro;

if (document.getElementById("retirar").value == 0 ) {
	alert("Ingresa la cantidad a retirar por favor!");
	}   

	else {

  	var TotalRetiro = parseInt(document.getElementById("retirar").value)
  	var cuenta2 = parseInt(document.getElementById("ac2").value);
  	document.getElementById("ac2").value = ( cuenta2 - TotalRetiro);
  	alert("Retiro Exitoso, tome su dinero")
  	return false
	}
}