//localStorage.setItem('nombreUsuario', 'Pablo') //Agregar datos al LocalStorage
//console.log(localStorage.getItem('nombreUsuario')) //Visualizar datos guardados 

//localStorage.removeItem('nombreUsuario') //Eliminar datos del LocalStorage

//localStorage.clear() //Remover todos los datos del LocalStorage


///JSON///

const usuario = {
    nombre: 'Pablo',
    edad: 30
} //Objeto usuario


const usuarioJSON = JSON.stringify(usuario) //Convertir un objeto a formato JSON

localStorage.setItem('usuario', usuarioJSON)

const userJSON = localStorage.getItem('usuario')

usuario2 = JSON.parse(userJSON) //Regresar el archivo JSON a un objeto
console.log(`Nombre: ${usuario2.nombre}, Edad: ${usuario2.edad}`)
