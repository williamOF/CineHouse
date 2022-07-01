const catalogo = require('../database/catalogo.json')

module.exports = function buscarFilme(fcodigo){

    function codigoIgualBuscado(filme){
        if(filme.codigo == fcodigo){
            return true
        } else {return false}
    } return catalogo.find(codigoIgualBuscado)
    
}



