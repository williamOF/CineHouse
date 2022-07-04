const novoFilme = require('../database/novoFilme.json')
const buscarFilme = require('./buscarFilme')
const salvarF = require('./salvarF')

module.exports = verficarCodigo = (cod)=>{   
    if(buscarFilme(cod)){
        console.error('este codigo já existe porvafor tente outro')
    }else{
        addCodigo(novoFilme)
    }
}

let  addCodigo= (nFilme) =>{   
    if(process.argv[2] == 'codigo'){
            nFilme.codigo = process.argv[3]
            salvarF(nFilme)
    }
}