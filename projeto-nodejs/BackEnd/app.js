const express = require("express");
const app = express();
const cors = require('cors')
const port = "4000";

app.use(cors()) //se não tiver o cors, não funciona

app.use(express.json()) 
app.set('view engine', 'ejs');


//Puxar dados do BD
app.get("/", (req, res, next) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'remoda'
    }); 

    connection.query("SELECT * FROM produtos",  (error, result)  => {
        res.json(result) //Pega os dados que vem do banco e responde em json (res=response)

    })
});


app.get("/pedidos", (req, res, next) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'remoda'
    }); 

    connection.query("SELECT * FROM dadospedido",  (error, result)  => {
        res.json(result) //Pega os dados que vem do banco e responde em json (res=response)

    })
});



//Enviando dados para o BD
app.post('/pedidos', (req, res) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'remoda'
    }) ;


    let dadosCliente = []
    //joga os dados para dentro do array da variavel let dados
    dadosCliente.push({

        nomecliente: req.body.nomecliente,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        complemento: req.body.complemento
    })

    //colocando os dados recebidos dentro da nossa tabela
    connection.query('INSERT INTO clientes SET ?', dadosCliente, () => {
        dadosCliente = [] //zerando array
        return res.json({message:"Dados enviados para tabela clientes com sucesso"})
    })

    let dadosPedido = []
    dadosPedido.push({

        idcliente: req.body.idcliente,
        descricao_produto: req.body.descricao_produto,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        preco_final: req.body.preco_final
    })

    //colocando os dados recebidos dentro da nossa tabela
    connection.query('INSERT INTO pedidos SET ?', dadosPedido, () => {
        dadosPedido = [] //zerando array
        return res.json({message:"Dados enviados para tabela pedidos com sucesso"})
    })
})



//Criando servidor
app.listen(port, () => {
  console.log(`O servidor subiu na porta ${port}`);
});



