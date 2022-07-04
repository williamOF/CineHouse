const buscarFilme = require('./buscarFilme')
const preSave = require('./preSave')
const filme = require('../database/teste.json')


let prop = process.argv[2]

// help menu 

if(prop == 'help'){
    console.log('Lista de Comandos : \n codigo 999 \n ano 9999 \n titulo nomeDoFilmeAqui \n duracao 120 \n cartaz true or false \n atores nomeutores')
}else{
    addCodigo(filme)
    addAnoLancamento(filme)
    addTitulo(filme)
    addDuracao(filme)
    addCartaz(filme)
    addAtores(filme)
   
}





function addCodigo(gerarFilme){
    let lerCod = process.argv[3]
    if(prop == 'codigo'){
        let resultadoPesquisa = buscarFilme(lerCod)
        if(resultadoPesquisa == undefined ){
            gerarFilme.codigo = lerCod
            preSave(gerarFilme)
        }else{
            console.error('este codigo já existe porvafor tente outro')
        }
    }
}

function addAnoLancamento(gerarAno){
    let lerVal = process.argv[3]
    if(prop == 'ano'){
        gerarAno.anoDeLancamento = lerVal
        preSave(gerarAno)
    }
}
function addTitulo (gerarTitulo){
    let lerVal = process.argv[3]
    if(prop == 'titulo'){

        let arrNomes = []

        for(let i in lerVal){
           if(i > 2){
            let nomes = process.argv[i]
            if(nomes != undefined){
                arrNomes.push(nomes)
            }
           }
        }

        let titulo = arrNomes.toString()
        let titulof =  titulo.replace(/,/g," ")

        gerarTitulo.titulo = titulof
        preSave(gerarTitulo)
    }
}
function addDuracao(gerarDuracao){
    let lerVal = process.argv[3]
    if(prop == 'duracao'){
        gerarDuracao.duracao = lerVal
        preSave(gerarDuracao)
    }
}
function addCartaz(gerarCartaz){
    let lerVal = process.argv[3]
    if(prop == 'cartaz'){
        gerarCartaz.emCartaz = lerVal
        preSave (gerarCartaz)
    }
}

function addAtores (gerarTitulo){

    let array = []

    for (let i = 2 ; i<process.argv.length ; i++){
        let par = i % 2 ==0
        if(par){
          let nomeSobrenome = process.argv[i] + ' ' + process.argv[i+1]
         if(nomeSobrenome != undefined){
            array.push(nomeSobrenome)
         }
        }
    }
    console.log(array)
    
 }