/*Realizar un programa que ingrese precios, calcule sobre estos,
un aumento del 20% para aquellos menores de 60 pesos, 15%
menores a 100 pesos y 10% para el resto. Mostrar el precio
actualizado como así también el aumento aplicado y el
porcentaje que se aplicó. Permitir el ingreso de precios hasta
que le usuario lo determine. Todos los cálculos hacerlos dentro
de un procedimiento.*/

let precio1, precio2, bandera = 1;

do{
    precio1 = parseFloat(prompt("Ingrese el precio: "));

        if(precio1 <= 60){
            console.log("El precio es: " + precio1);
            precio2 = calculo(precio1, 1.2);
            console.log("El precio actualizado es: "+ precio2.toFixed(2) +" Con un 20% de aumento.")
        }
        else if (precio1 > 60 && precio1 <= 100){
            console.log("El precio es: " + precio1);
            precio2 = calculo(precio1, 1.15);
            console.log("El precio actualizado es: "+ precio2.toFixed(2) +" Con un 15% de aumento.")
        }
        else{
            console.log("El precio es: " + precio1);
            precio2 = calculo(precio1, 1.1);
            console.log("El precio actualizado es: "+ precio2.toFixed(2) +" Con un 10% de aumento.")
        }

        bandera = parseInt(prompt("Ingresar otro precio? 1 = SI y 0 = NO"));

}while(bandera == 1)

    console.log("terminó el programa");//Termina

function calculo(a, b){
return (a * b);
}