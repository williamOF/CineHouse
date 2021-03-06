const buscarFilme = require('./buscarFilme')
const salvarF = require('./salvarF')
const salvarNoCatalogo = require('./salvarFilme')
const novoFilme = require('../database/novoFilme.json')
const catalogo = require('../database/catalogo.json')
const addAtores = require('./addAtores')
const addCodigo = require('./addCodigo')
const addTitulo = require('./addTitulo')

let termnalPoss2 = process.argv[2]

let addAnoLancamento =(gerarAno)=>{
    if(termnalPoss2 == 'ano'){
        gerarAno.anoDeLancamento = process.argv[3]
        salvarF(gerarAno)
    }
}
let addDuracao=(gerarDuracao)=>{
    if(termnalPoss2 == 'duracao'){
        gerarDuracao.duracao = process.argv[3]
        salvarF(gerarDuracao)
    }
}
let addCartaz=(gerarCartaz)=>{
    if(termnalPoss2 == 'cartaz'){
        gerarCartaz.emCartaz = process.argv[3]
        salvarF (gerarCartaz)
    }
}
let salvarTudo=(filme)=>{
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
    if(termnalPoss2 == 'limpar'){
        let vazio ={}
        filme = vazio
        salvarF(filme)
    }
}
let mostrarNovoFilme = (filme) =>{
    if(process.argv[2] == 'm')
    console.log(filme)
}


let ajuda = (dado) =>{
    if(dado == 'ajuda'){
        console.log('LISTA DE COMANDO\n -> codigo valorAqui \n -> ano valorAqui\n -> titulo valorAqui\n -> duracao valorAqui\n -> cartaz valorAqui\n -> atores valorAqui\n -> salvar \n -> limpar "limpa os dados do novoFilme"\n -> m "mostra O filme Que Está Sendo Criado No Momento "')
    }
}

// mini menu execução
module.exports= menuAddFilme = (dado)=>{ 
    addAnoLancamento(novoFilme)
    addDuracao(novoFilme)
    addCartaz(novoFilme)
    addAtores(dado)
    addCodigo(dado)
    addTitulo(dado)
    salvarTudo(novoFilme)
    ajuda(dado)
    mostrarNovoFilme(novoFilme)
}

