/*Examinar DOM
console.dir(document.URL);
*/

/*getElementById

//console.log(document.getElementById('header-title'));

var titleHeader = document.getElementById('header-title');
//console.log(titleHeader);
var mainHeader = document.getElementById('main-header');
//console.log(mainHeader);

titleHeader.textContent = 'Funka'; //Cambiar texto 

titleHeader.innerText = 'Funka';

titleHeader.innerHTML = '<h3>Funka</h3>'; //Cambiar estructura HTML

*/

/*getElementsByClassName

var items = document.getElementsByClassName('list-group-item');

console.log(items[3]);

items[0].textContent = 'Funka';
*/

/*getElementsByTagName


var item = document.getElementsByTagName ('li');

item[0].textContent = 'Funka de nuevo';

*/

/*

//querySelector

var header = document.querySelector('#main-header');

header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');

input.value = 'Funka';

var submit = document.querySelector('input[type="submit"]');

submit.value = 'funka';

var item = document.querySelector('.list-group-item');

item.style.color = 'red';

*/

/*

querySelectorAll

var items = document.querySelectorAll('.list-group-item');

items[2].style.color = 'red';
 

var title = document.querySelectorAll('.title');

console.log(title);

title[0].textContent = 'Hola'; */

/*
//ParentNode

var itemList = document.querySelector('#items');
var main = itemList.parentNode;
main.style.backgroundColor = '#f4f4f4';

//ParentElement

var itemList = document.querySelector('#items');
var main = itemList.parentElement;
main.style.backgroundColor = '#f4f4f4';

*/
/*
var itemList = document.querySelector('#items');

//ChilNodes
console.log(itemList.childNodes);

//Children
console.log(itemList.children);

//firstChild/elementChild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

//lastChild/elementChild
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
*/
/*
var itemList = document.querySelector('#items');

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling); */


/*
//createElement
//tagName

var nuevoDiv = document.createElement('div');
nuevoDiv.className = 'nuevoDiv';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title', 'Funka');




//createTextNode

var nuevoNodo = document.createTextNode('Hello World');
nuevoDiv.appendChild(nuevoNodo);
console.log(nuevoDiv);

var contenedor = document.querySelector('header .container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);

contenedor.insertBefore(nuevoDiv, h1); */

//agregar evento a un botón de html
/*document.getElementById('botón').addEventListener('click', function(){
    document.getElementById('header-title').textContent = 'Hola!';
})*/


//Agregar elementos

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//Evento submit
form.addEventListener('submit', agregarItem);

//Evento click
lista.addEventListener('click', eliminarElemento);

//Evento Keyboard
filtro.addEventListener('keyup', filtrarItem);


//Función Agregar
function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var boton = document.createElement('button');
    boton.className = 'btn btn-danger bt-sm float-right eliminar';
    boton.appendChild(document.createTextNode('X'));
    
    li.appendChild(boton);

    lista.appendChild(li);
     
}

//Eliminar elementos

function eliminarElemento(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Deseas eliminar el elemento?')){
        var li = e.target.parentElement;
        lista.removeChild(li);
        }
    } 
} 

//Filtrar elementos

function filtrarItem(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}