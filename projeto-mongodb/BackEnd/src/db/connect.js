//Fazendo a conexão entre node e mongoDB

const mongoose = require('mongoose');

function connect() {
    mongoose
        .connect("mongodb://localhost/remoda", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Conectado com o banco 'remoda' ")
        }).catch((error) => {
            console.log(`Erro ao tentar a conexão ${error}`) //.catch serve para se der algum erro
        });
}

module.exports = connect()