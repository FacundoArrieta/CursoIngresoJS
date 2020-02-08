function mostrar()
{
//tomo la edad  
var edad;

edad = (document.getElementById("laEdad").value);

if( edad >= 13 & edad <=17 ){

    alert("Es adolecente");
}

else if ( edad >= 18){

    alert("Es mayor de edad");
    }

}//FIN DE LA FUNCIÓN