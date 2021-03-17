
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//modelo da tabela
const Contato = new Schema({
    nome: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    
    mensagem: {
        type: String,
        required: true
    }

})

mongoose.model('contato', Contato)

