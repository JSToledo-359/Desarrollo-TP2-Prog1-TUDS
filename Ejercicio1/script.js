/*Realizar un programa que, ingresado dos cadenas de
caracteres, mediante un procedimiento se retorne dichas
cadenas concatenadas. */

let char1, char2, resultado;

char1 = prompt ("Ingrese la primera cadena: ");
char2 = prompt ("Ingrese la segunda cadena: ");

resultado = concatenar (char1, char2);

console.log(resultado);

function concatenar (txt1, txt2){
    return (txt1 + " " + txt2);
}