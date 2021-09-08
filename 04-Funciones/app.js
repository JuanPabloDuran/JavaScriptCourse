/*

function bienvenido(){
    return 'Hola mundo';
}
var mensaje = bienvenido();
console.log(mensaje);

//Partes de una función
//Parámetros(argumento), código, salida(Retorno)

function cuadradoNumero(num){
    var result = num * num;
    return result;
}
var num = 3;
var valor = cuadradoNumero(num);
console.log(valor);

//Función que convierte de grados Fahrenheit a Celsius
// 32F = 0C, 68F = 20C
// C = (F - 32) * 5/9

function convertirGrados (gradosF){
    var celsius = (gradosF - 32) * 5/9;
    return celsius;
}

var tempUno = convertirGrados(32);
var tempDos = convertirGrados(68);

console.log(tempUno);
console.log(tempDos); */

/*

Calcular edad de una persona

function calcularEdad(yearNacimiento){
    return 2021 - yearNacimiento;
}

var edad = calcularEdad(1997);
console.log(edad); */

/***
 * Ejercicio 3
 * 
 * Calcular cuántos años le falta a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos de entrada a la función la fecha de nacimiento y su nombre.
 * 
 * Solución:
 

function tiempoRestante(yearNacimiento, nombrePersona){

    var edadActual = 2021 - yearNacimiento;
    var tiempoJubilacion = 65 - edadActual;
    return nombrePersona + ' Te faltan ' + tiempoJubilacion + ' años para jubilarte ';

}

console.log(tiempoRestante(1997, 'Juan Pablo')); */

/*Funciones como expresiones
//Argumento Undefined
var nombre;
var prueba =  function(n){
    return 'prueba' + n;
}

console.log(nombre);

//Argumento Nulo

var a;
a = null;

var valorNulo = function(a){
    return a;
}

console.log(valorNulo(a)); */

/*

//Argumentos por default

var sumar = function(a, b, c = 3){
    return a + b + c;
}

console.log(sumar(10, 4, 6));

//Plantillas de cadenas (template string)

var nombre = 'Pablo';

console.log(`El nombre es: ${nombre}`);n  */

/****
 * Ejercicio 4
 * Implementar una funcón que nos permita evaluar el
 * porcentaje de respuestas positivas y negativas en un exámen
 * La función debe recibir el nombre y la cantidad de respuestas 
 * positivas y negativas
 * 
 * La función debe calcular el porcentaje que resperenta cada 
 * tipo de respuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona
 * A(> 90%), B(70%), C(45% - 69%), D(<45%)
 */

function socreExam(numPreguntasPostivas, numPreguntasNegativas, nombre){

    var scorePositivo = (numPreguntasPostivas *100) / 100;
    var scoreNegativo = (numPreguntasNegativas *100) / 100;
    console.log(`${nombre} tiene ${scoreNegativo} % de preguntas negativas y ${scorePositivo} % de preguntas positivas`);

    if (scorePositivo >= 90){
        console.log(`${nombre} tiene calificación A`);
    } else if((scorePositivo < 90) && (scorePositivo >= 70)){
        console.log(`${nombre} tiene calificación de B`);
    } else if((scorePositivo < 70) && (scorePositivo >= 45)){
        console.log(`${nombre} tiene calificación de C`);
    }else{
        console.log(`${nombre} tiene calificación de D`);
    }
}

socreExam(44, 56, 'Pablo');