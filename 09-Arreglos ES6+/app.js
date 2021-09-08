/////Arreglos ES6+/////

//const pozole = ['Maíz', 'Pollo', 'Verdura', 'Cebolla', 'Oregano']



//pozole.forEach(function(item, index){
//    console.log(`Indice ${index}: ${item}`)
//})

const pozole = [
    {
        id: 1,
        titulo: 'maíz'
    },
    {
        id: 2,
        titulo: 'pollo'
    },
    {
        id: 3,
        titulo: 'verdura'
    },
    {
        id: 4, 
        titulo: 'oregano'
    }
]

const buscarIngrediente = function(pozole, titulo){
    const index = pozole.findIndex(function(ing, index){
        return ing.titulo === titulo
    })
    return index
}

const filtrarIngredientes = pozole.filter(function(ing, index){
    const ingredeinte = ing.titulo.includes('o')
    return ingredeinte
})

console.log(filtrarIngredientes)




