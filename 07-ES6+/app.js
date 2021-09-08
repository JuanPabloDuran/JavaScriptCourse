/*
//ES6 - Variables

var nombre5 = 'Pablo';
var edad = 35;
nombre5 = 'Carlos';
console.log(nombre5);

//ES6 - Variables

const nombre6 = 'Pedro'; //Variable sólo de lectura, no puede mutarse (Constante)
let edad6 = 28; //Variable que puede cambiar su valor
nombre6 = 'Ana';
console.log(nombre6);

//Bloques y alcance de las variables 
//En ES6 el alcance de las variables se limita a el bloque, para obtener las variables que esten dentro de una función se debe usar return
{
    const a = 3;
    let b = 4;
    var c = 5; //Con ES5 las variables pueden llamarse fuera del bloque
}

console.log(c); */


//Template Strings ES6

//let nombre = 'Pablo';
//let apellido = 'Durán';
//const nacimiento = 1997;

/*ES6
function calcularEdad(year){
    return 2021 - year;
}

//ES5
console.log(nombre + ' ' + apellido + ' su edad es ' + calcularEdad(nacimiento));

//ES6
console.log(`${nombre} ${apellido} su edad es ${calcularEdad(nacimiento)}`); */

/*
//Funciones de cadenas ES6

let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
console.log(`${nombreCompleto} `.repeat(5));
console.log(nombreCompleto.includes('P'));
console.log(nombreCompleto.startsWith('Pa'));
console.log(nombreCompleto.endsWith('án'));
*/

/*
//Funciones flecha 

const years = [2000, 2007, 2008, 2009];

//ES5 

var edad = years.map(function(el){
    return 2019 - el;
});

console.log(edad);

//ES6

let edad6 = years.map(el => 2019 - el);
console.log(edad6);

edad6 = years.map((el, index) => `Edad ${index + 1}: ${2019 - el}`);
console.log(edad6);

*/

///Destructuración

//ES5
//var datos = ['Pablo', 25];

//var nombre = datos[0];
//var edad = datos[1];

//ES6

//const [nombre, edad] = ['Pablo', 25];

//console.log(nombre);

/*const persona = {
    nombre: 'Carlos',
    edad: 24
}
const {nombre, edad} = persona;
console.log(nombre);
console.log(edad); */

const calcularMayorEdad = (year) => {
    const edad = new Date().getFullYear() - year;
    const mayoria = edad >= 18 ? true : false;
    return [edad, mayoria];
}

const [edad, mayoria] = calcularMayorEdad(1997);
console.log(edad);
console.log(`Es mayor de edad: ${mayoria}`);