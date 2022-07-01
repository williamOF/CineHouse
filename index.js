const catalogo = require('./database/catalogo.json')
const mostrarFilmes =require('./functions/mostrarFilmes')
const buscarFilme = require('./functions/buscarFilme')
const porEmCartaz =require('./functions/porFilmeEmCartaz')
const tirarDeCartaz = require('./functions/tirarFilmeEmCartaz')


//capturar dados usuario pelo terminal

let capDados = process.argv[2]
let capCodigo = process.argv[3]

//definição para menu de navegação

switch(capDados){
    case 'mostrarFilmes':
        mostrarFilmes()
    break;
    case 'buscarFilme':
        let filmeBuscado = buscarFilme(capCodigo)
        console.table(filmeBuscado)
    break;
    case 'adcionar':

    break;

    case 'porEmCartaz':
        porEmCartaz(capCodigo)
    break;

    case 'tirarDeCartaz':
        tirarDeCartaz(capCodigo)
    break;

    default:
        console.error('Comando nao encontrado')
}