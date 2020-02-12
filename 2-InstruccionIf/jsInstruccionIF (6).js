function mostrar()
{
//tomo la edad  
var edad;

edad = (document.getElementById("edad").value);

//1ra opcion

/*if (edad <13) {
    alert("Niño");
}

else if (edad <= 17) {
    alert("Adolecente");
}
else if (edad <= 65){
    alert("Adulto");
}
else{
    alert("Anciano")
}*/

//2da opcion

/*if (edad <13) {
    alert("Niño");
}

else if (edad <= 17) {
    alert("Adolecente");
}
else{
    alert("Adulto");
}*/

//3ra opcion

if (edad <13) {

    alert("Niño");

}

else if (!( edad <13 || edad >17)){

    alert("es adolecente");
  
}
else{
    alert("Adulto")
}


}//FIN DE LA FUNCIÓN