const novoFilme = require('../database/novoFilme.json')
const salvarF = require('./salvarF')

module.exports = addAtores =(dado)=>{
    if(dado == 'atores'){
        processarAtores(novoFilme)
    }}

function processarAtores (arrAtores){
        let array = []

        for (let i = 3 ; i<process.argv.length ; i++){
            let indiciePar = i % 2 ==0

            if(indiciePar){
                let nome = process.argv[i-1]
                let sobrenome = process.argv[i]
    
             if(sobrenome != undefined){
                let nomeSobrenome = nome + ' ' + sobrenome
                array.push(nomeSobrenome)
             }} }
        arrAtores.atores = array
        salvarF(arrAtores)
    }