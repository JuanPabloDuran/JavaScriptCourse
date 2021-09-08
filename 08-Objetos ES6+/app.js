/*let libroa = {
    titulo : 'Mi Libro',
    autor : 'Dross',
    paginas : 450,
    publicado : true
}

let librob = {
    titulo : 'La fiesta de la blasfemia',
    autor : 'Dross',
    paginas : 700,
    publicado : false
}

console.log(libroa.autor);
console.log(`${libroa.titulo} tiene ${libroa.paginas} páginas y su autor es ${libroa.autor}`);

let getResumen = (libro) => {
    return {
        resumen : `${libro.titulo} y su autor es ${libro.autor}`,
        resumenPaginas : `El libro ${libro.titulo} tiene ${libro.paginas} páginas`
    }
}

let libroaResumen = getResumen(libroa);
let librobResumen = getResumen(librob);

console.log(librobResumen.resumen);
console.log(libroaResumen.resumenPaginas);
*/

/*
let persona = {
    nombre : 'Pablo',
    edad : 24,
    ciudad : 'Hidalgo'
}

persona.edad = 23;
console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`);*/
/*
let persona = {
    nombre : 'Pablo',
    edad : 30,
    sueldo : 1200
}
let cambioSueldo = (person, monto) => {
    person.sueldo = person.sueldo + monto;
    console.log(person);
}

console.log(persona);
cambioSueldo(persona, 500); */

///Objeto String///

/*
const getPersonaDatos = () => {
    const respuesta = [
        {
        codigo : 100,
        data : {
            persona : {
                nombre : 'Pablo',
                direccion : {
                estado : 'Hidalgo',
                pais : 'México'
                }
            }
        }
    },
    {
        codigo : 500,
        data : {
            persona : {
                nombre : 'Juan',
                direccion : {
                estado : 'Guadalajara',
                pais : 'México'
                }
            }
        }
    },
    {
        codigo : 100,
        data : {
            persona : {
                nombre : 'ElmaCana',
                direccion : {
                estado : 'Mexico',
                pais : 'México'
                }
            }
        }
    }
]
    return respuesta
}


for ( const { codigo : status, data : { persona : {nombre : nom}}} of getPersonaDatos()){
    console.log(nom);
}
*/

