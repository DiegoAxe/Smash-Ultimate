function mostrarResultados(){
    const Precio = 59.99;
    var Nombre, Correo, Subtotal, Iva, Total, formCantidad;
    Nombre = document.getElementById("Nombre").value;
    Correo = document.getElementById("Correo").value;
    formCantidad = document.getElementById("Cantidad").value;

    Subtotal = Precio * formCantidad;
    Iva = Subtotal * 0.13;
    Total = Subtotal + Iva;
    Iva = Iva.toFixed(2); 
    Total = Total.toFixed(2); 

    if (Nombre !=0 && Correo !=0 && formCantidad !=0) {
        document.getElementById("Resultados").style.height = "fit-content";
        document.getElementById("Resultados").style.padding = "20px 0 70px 20px";
        document.getElementById("Resultados").style.border = "1px solid blue";
        document.getElementById("Resultados").innerHTML="<p id='title'>Cotizado: </p><p>Su nombre es: " + Nombre 
        + "<br>Su correo es: " + Correo
        + "<br>Su subtotal es: $" + Subtotal 
        + "<br>Su iva es: $" + Iva 
        + "<br>Su total es: $" + Total +"</p>"
        + "<br><a id='Tienda' href='https://www.amazon.com/-/es/Super-Smash-Bros-Ultimate-Nintendo-Switch/dp/B07DMFRNF9?th=1' target='_blank'> ¡QUIERO COMPRARLO!</a>";
    }
}