/* Sentencias if/else

var nombre = 'Pablo';
var estadoCivil = 'soltero';
var estaCasado = false;

if (estaCasado == true){
    //si es verdadero
    console.log(nombre + ' esta casado');
} else{
    //si es falso
    console.log(nombre + ' esta soltero');
} */

/*Sentencias condicionales

var nombre = 'Pablo';
var edad = 80;

if (edad < 12){
    console.log(nombre + 'Es un chamaco');
}else if ((edad > 11) && (edad < 18)){
    console.log(nombre + 'Es un adolecente');
}else if ((edad > 17) && (edad < 60)){
    console.log(nombre + 'Es un adulto');
}else{
    console.log(nombre + 'Es un anciano');
}*/

/* //Operador ternario

var nombre = 'Pablo';
var edad = 12;

edad >= 18 ? console.log(nombre + ' Es mayor de edad ') : console.log(nombre + ' No es Mayor de edad '); */

/* 

//Sentencias Switch Case

var mes = 2;

switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes no considerado');
        break;
}
*/


/****
 *Sentencias repetitivas - Bucles 
 *Sentencia for
 *Sentencia While
 *Sentencia Do..While
 */

 /*//Sentencia for

 for(var i = 10; i >= 1; i--){
     console.log(i);
 }*/

 /*//Sentencia While
var i = 1;
 while(i <= 10){
     console.log(i);
     i++;
 }*/

 /*//Sentencias Do..While

var i = 1;
do{
    console.log(i);
    i++;
}while(i <= 10)
*/

/***
 * Valores verdaderos y falsos
 

//Valores falsos: undefined,null,0,''
//Valores verdaderos: NOT valores, falses

var edad;

edad = 0;

if(edad){
    console.log('Variable definida');
}else{
    console.log('Variable no definida');
} */

/**
 * Ejercicio de Sentencias
 */

/****
 * Tienes Dos alumnos, Pablo y María
 * Pablo tiene las siguientes calificaciones en el curso: 14, 8, 16.
 * María tiene las siguientes calificaciones en el cusro: 12, 18, 10.
 * 
 * Calcular el promedio de cada alumno, además de inidcar quién tiene el promedio
 * superior, e inidcar si el alumno está aprobado, para ello su promedio debe ser superior a 13.
 */

 var sumaCalificacionPablo = 14 + 8 + 16;
 var sumaCalificacionMaria = 12 + 18 + 10;
 
 var promedioPablo = sumaCalificacionPablo / 3 ;
 var promedioMaria = sumaCalificacionMaria / 3 ;
 
 console.log('El promedio de María es: ' + promedioMaria);
 console.log('El promedio de Pablo es: ' + promedioPablo);
 
 if(promedioMaria > promedioPablo){
     console.log('El promedio de María es mayor');
     if (promedioMaria >= 13){
         console.log('María Aprueba');
     }else{
         console.log('María reprueba');
     }
 }else if(promedioMaria < promedioPablo){
     console.log('El promedio de Pablo es mayor');
     if (promedioPablo >= 13){
         console.log('Pablo Aprueba');
     }else{
         console.log('Pablo reprueba');
     }
 }else if (promedioMaria == promedioPablo){
     console.log('ambos promedios son iguales');
     if ((promedioMaria >= 13) && (promedioPablo >= 13)){
         console.log('Ambos aprueban');
     }else{
         console.log('Ambos reprueban');
     }
 }else{
 
 }
 