const catalogo = require('../database/catalogo.json')
const findMovie = require('./buscarFilme')
const salvar = require('./salvarFilme')

module.exports = function tirarFilmeEmCartaz(filme){

    let filmeValue = findMovie(filme)
    filmeValue.emCartaz = false
    console.table(catalogo)
    salvar(catalogo)
    
}





