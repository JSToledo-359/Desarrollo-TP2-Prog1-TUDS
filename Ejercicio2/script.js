/*Un importador necesita transformar a pesos mercadería que
está valuada en Euro, Dólar, Real, Yen, Yuan, Libra Británica o
Nuevo Sol según sea el caso. Si el precio obtenido en pesos es
mayor a 20.000 adicionarle un 2% de impuestos. Mostrar el
valor obtenido por pantalla.*/ 
 
const euro = 1564.57;
const dolar = 1339.50;
const real = 249.54;
const yen = 8.95;
const yuan = 187.74;
const libra = 1789.00;
const sol = 380.47;

let importe, resultado, opcion;

importe = parseInt (prompt ("Ingrese el valor de de la mercaderia."));
opcion = parseInt(prompt("Ingrese una opcion: "));

switch (opcion){
    case 1:
        resultado = cambio_moneda(euro, importe);
    break;
    
    case 2:
        resultado = cambio_moneda(dolar, importe);
    break;
    
    case 3:
        resultado = cambio_moneda(real, importe);
    break;
    
    case 4:
        resultado = cambio_moneda(yen, importe);
    break;

    case 5:
        resultado = cambio_moneda(yuan, importe);
    break;

    case 6:
        resultado = cambio_moneda(libra, importe);
    break;

    case 7:
        resultado = cambio_moneda(sol, importe);
    break;
}

function cambio_moneda(a,b){
    return (a*b);
}


if (resultado > 20000){
    console.log("El resultado " + resultado.toFixed(2) + " tiene un 2% de impuestos.")
    resultado = resultado * 1.02;
    console.log("El importe final es: " + resultado.toFixed(2));
}
else {
    console.log("El resultado es: " + resultado.toFixed(2));
}
