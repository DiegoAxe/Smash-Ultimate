function mostrarResultados(){ //Funcion que se ejecutara al presionar el boton
    const Precio = 59.99; //La constante del precio del producto
    var Nombre, Correo, Subtotal, Iva, Total, formCantidad; 
    Nombre = document.getElementById("Nombre").value; //El valor del input "Nombre"
    Correo = document.getElementById("Correo").value; // El valor del input "Correo"
    formCantidad = document.getElementById("Cantidad").value; //El valor del input "Cantidad"

    Subtotal = Precio * formCantidad; 
    Iva = Subtotal * 0.13; 
    Total = Subtotal + Iva;
    Subtotal = Subtotal.toFixed(2);  //Limita los decimales de la variable Subtotal a solo 2
    Iva = Iva.toFixed(2); //Limita los decimales de la variable Iva a solo 2
    Total = Total.toFixed(2);  //Limita los decimales de la variable Total a solo 2

    if (Nombre !=0 && Correo !=0 && formCantidad !=0) {
        document.getElementById("Resultados").style.height = "fit-content"; //Aumentara el tamaño del Div "Resultados"
        document.getElementById("Resultados").style.padding = "20px 0 70px 20px"; //Aumentara el padding del Div "Resultados"
        document.getElementById("Resultados").style.border = "1px solid blue"; //Dara estilo a los bordes del Div "Resultados"
        document.getElementById("Resultados").innerHTML="<p id='title'>Cotizado: </p><p>Su nombre es: " + Nombre  //Escribira en el Div "Resultados"
        + "<br>Su correo es: " + Correo
        + "<br>Su subtotal es: $" + Subtotal 
        + "<br>Su iva es: $" + Iva 
        + "<br>Su total es: $" + Total +"</p>"
        + "<br><a id='Tienda' href='https://www.amazon.com/-/es/Super-Smash-Bros-Ultimate-Nintendo-Switch/dp/B07DMFRNF9?th=1' target='_blank'> ¡QUIERO COMPRARLO!</a>"; //Diseñara un "boton"
    }
}
