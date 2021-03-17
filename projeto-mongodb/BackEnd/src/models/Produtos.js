
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//modelo da tabela
const Produto = new Schema({

    categoria: {
        type: String,
        required: true
    },
    descricao_produto: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    preco_final: {
        type: Number,
        required: true
    },

})

//'produtos' vai ser o nome da tabela que ele vai criar e Usuario é o paramentro necessário para a sua criação. 
mongoose.model('produtos', Produto)

