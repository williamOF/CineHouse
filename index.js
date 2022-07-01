const catalogo = require('./database/catalogo.json')
const mostrarFilmes =require('./functions/mostrarFilmes')
const buscarFilme = require('./functions/buscarFilme')
const porEmCartaz =require('./functions/porFilmeEmCartaz')


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
        console.table(catalogo)
    break;
    case 'tirarDeCartaz':
        
    break;

    default:
        console.error('Comando nao encontrado')
        console.log('comandos válidos: \n node index.js mostrarFilmes \n node index.js buscarFilme codigo')
}