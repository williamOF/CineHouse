const novoFilme = require('../database/novoFilme.json')
const salvarF = require('./salvarF')


module.exports = addTitulo = (dado)=>{
    if(dado == 'titulo'){
        processarTitulo(novoFilme)
    }
}

let  processarTitulo = (novoTitulo)=>{
        let arrTitulo = []

        for(let i = 3 ; i< process.argv.length; i++){
            arrTitulo.push(process.argv[i])
        }

        let arrTituloString = arrTitulo.toString()
        let tituloFormatado =  arrTituloString.replace(/,/g," ")

        novoTitulo.titulo = tituloFormatado
        salvarF(novoTitulo)
}