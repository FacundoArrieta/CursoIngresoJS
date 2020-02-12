function mostrar()
{
//tomo la edad  

var edad;

edad = (document.getElementById("edad").value);
// si la edad esta dentro del rango
/*if ( edad >= 13 & edad <=17 ){

    alert("Es adolecente");
}*/
// si la edad no esta fuera del rango
if (!( edad <13 || edad >17)){

    alert("es adolecente");
  
  }


}//FIN DE LA FUNCIÓN