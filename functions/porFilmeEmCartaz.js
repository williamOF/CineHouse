const catalogo = require('../database/catalogo.json')
const findMovie = require('./buscarFilme')
const salvar = require('./salvarFilme')

module.exports= function PorEmCartaz(filme){

    let filmeValue = findMovie(filme)
    filmeValue.emCartaz = true
    salvar(catalogo)
    console.table(catalogo)

}





