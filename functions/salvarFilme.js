const fs = require('fs')
const path = require ('path')

module.exports = (filmes) => {
    
    let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
    let json = JSON.stringify(filmes, null, 4);
    fs.writeFileSync(arquivo, json);

};


