/**
 * Arreglos JavaScript
 
var nombres = ['Pablo', 'Ale', 'Gustavo', 'Víctor'];
var frutas = new Array ('Pepino', 'Coco', 'Fresa');

console.log(nombres[3]);
console.log(frutas[1]);

console.log(nombres.length); */

/**
 * Operaciones con arreglos
 */
/*
var frutas = ['Uva', 'Fresa', 'Manzana', 'Pera'];

for(i=0; i<= frutas.length -1; i++){
    console.log(frutas[i]);
}

frutas.forEach(function (elemento, indice, array){
    console.log(elemento, indice);
});

frutas.push('Naranja'); //Agregar elementos al final del arreglo
console.log(frutas);

frutas.unshift('Platano'); //Agregar elementos al principio del arreglo
console.log(frutas);

frutas.pop(); //Eliminar elemento del final
console.log(frutas);
frutas.shift(); //Eliminar elemento del principio
console.log(frutas); 

var position = frutas.indexOf('Manzana'); //Obtener la posición de el elemento en el arreglo
console.log(position);

frutas.splice(1,1); //Eliminar un elemento de acuerdo a la posición dada seguido de el número de elementos que se quieren eliminar
console.log(frutas);
*/

/*Arreglo con tipos de elementos distintos

var persona = ['Pablo', 'Durán', 7751038163, 1.69];
console.log(persona); */


/**
 * Objetos Literales



var persona = {
    nombre : 'Pablo',
    apellido : 'Durán',
    gustos : ['Futbol', 'Programación', 'Dibujo'],
    trabajo : 'Instructor',
    casado : true
};

console.log(persona.trabajo);
console.log(persona['trabajo']);

persona.casado = false;
console.log(persona.casado);

*/

/**
 * Objetos con sintáxis Object
 

var persona = new Object;

persona.nombre = 'Pablo';
persona.telefono = 7751038163;
persona.trabajo = 'Front-end dev';
persona.gustos = ['Futbol', 'Games'];

console.log(persona); */

//Objetos y Métodos

var persona = {
    //Propiedades

    nombre : 'Pablo',
    apellido : 'Durán',
    gustos : ['Futbol', 'Programación', 'Dibujo'],
    trabajo : 'Instructor',
    casado : true,
    yearNacimiento : 1997,

    //Métodos

    calcularEdad: function (){
        this.edad = 2021 - this.yearNacimiento;
    }

};

persona.calcularEdad();
console.log(persona);