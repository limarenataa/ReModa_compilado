const express = require('express');
const app = express()

const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json()) 
app.use(cors());

//models
require('./src/models/Produtos')
const Produtos = mongoose.model('produtos')

require('./src/models/Contato')
const Contato = mongoose.model('contato') 


//conexão db
require('./src/db/connect')


//criando rota e puxando do bd GET
app.get('/produtos', async (req, res) => {
 
    const produtosResponse = await Produtos.find() 
    const produtosJson = await produtosResponse

    return res.json(produtosJson)
})



app.post('/contato', async (req, res) => {
    console.log(req.body);
    const novoContato = new Contato({
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.mensagem
    });
    novoContato.save()

    res.json({message: "Nova mensagem", contato: novoContato})
    
}) 


//Criando servidor
app.listen(3333)