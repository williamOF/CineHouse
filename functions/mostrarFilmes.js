const catalogo = require('../database/catalogo.json')

module.exports = mostrarFilmes =>{
    return console.table(catalogo)
}