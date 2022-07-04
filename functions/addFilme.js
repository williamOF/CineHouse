const buscarFilme = require('./buscarFilme')
const salvarF = require('./salvarF')
const salvarNoCatalogo = require('./salvarFilme')
const novoFilme = require('../database/novoFilme.json')
const catalogo = require('../database/catalogo.json')
//exports outras funçoes para adcionar elementos no objeto

const addAtores = require('./addAtores')
const addCodigo = require('./addCodigo')
const addTitulo = require('./addTitulo')

let termnalPoss2 = process.argv[2]

function addAnoLancamento(gerarAno){
    if(termnalPoss2 == 'ano'){
        gerarAno.anoDeLancamento = process.argv[3]
        salvarF(gerarAno)
    }
}
function addDuracao(gerarDuracao){
    if(termnalPoss2 == 'duracao'){
        gerarDuracao.duracao = process.argv[3]
        salvarF(gerarDuracao)
    }
}
function addCartaz(gerarCartaz){
    if(termnalPoss2 == 'cartaz'){
        gerarCartaz.emCartaz = process.argv[3]
        salvarF (gerarCartaz)
    }
}
function salvarTudo(filme){
    if(termnalPoss2 == 'salvar'){

        let novoFilmeCodigo = novoFilme.codigo
        let retornoBusca =  buscarFilme(novoFilmeCodigo)
        
        if(retornoBusca == undefined){
            catalogo.push(novoFilme)
            salvarNoCatalogo(catalogo)
        }else{
            console.error('[ERRO_201] Este Filme já existe em catálogo ou o código informado já foi cadastrado!')
        }
    }

}

// mini menu execução
let menuAddFilme = (dado)=>{
    addAnoLancamento(novoFilme)
    addDuracao(novoFilme)
    addCartaz(novoFilme)
    addAtores(dado)
    addCodigo(dado)
    addTitulo(dado)
    salvarTudo(novoFilme)
    //antes de salvar comparar os filmes dos 2 json por codigo caso seja igual nao salvar 
}
menuAddFilme(termnalPoss2)
