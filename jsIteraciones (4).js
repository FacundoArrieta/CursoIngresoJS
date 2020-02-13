function mostrar()

/*
al presionar el botón pedir un número entre 0 y 9 inclusive.
*/

{
var numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero > 9 || numero <0 || isNaN(numero)){
	
	numero = parseInt(prompt("Error. ingrese un número entre 0 y 9."));
	}
	

	document.getElementById("Numero").value;
	
}

}//FIN DE LA FUNCIÓN