function mostrar() {
    /*al seleccionar un mes informar.
    si es Enero: "que comiences bien el año!!!."
    si es Marzo: "a clases!!!."
    si es Julio: "se vienen las vacaciones!!!."
    si es Diciembre: "Felices fiesta!!!." */
    //tomo la edad  
    var mes = document.getElementById("mes").value;

    switch (mes) {
        case "Enero":

            alert("Que comiences bien el año");

            break;

        case "Marzo":

            alert("A clases!!!");

            break;

        case "Julio":

            alert("Se vienen las vacaciones!!!");

            break;

        case "Diciembre":

            alert("Felices fiestas!!!")

            break;
        //si yo quiero decir que a ese mes no lo tuve en cuenta
        default:

            alert("A ese mes no lo tuve en cuenta");
    }
}//FIN DE LA FUNCIÓN