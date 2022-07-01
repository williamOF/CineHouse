const fs = require('fs')
const salvar = require('./salvarFilme')
const catalogo = require('../database/catalogo.json')
const buscarFilme = require('./buscarFilme')

let propriedade = process.argv[2]
let valor = process.argv[3]


let verificarCodigo=(dado)=>{
    if(dado){
        return buscarFilme(dado)
    }
}
function adcionarFilme(catalogo){

   let validação = verificarCodigo(valor)

    if(validação){
        console.error('Este codigo já foi cadastrado')
    }else{
        switch(propriedade){
            case 'codigo':
                catalogo.codigo = valor
            break;
            case 'anoDeLancamento':
              catalogo.anoDeLancamento =valor
            break;
            case 'titulo':
                catalogo.titulo = valor
            break;
           case 'duracao':
                catalogo.duracao = valor
            break;
            case 'emCartaz':
                catalogo.emCartaz = valor
            break;
        }
    }
}

