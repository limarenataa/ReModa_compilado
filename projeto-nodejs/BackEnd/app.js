const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())


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
        res.json({objetoDados:result}) //Pega os dados que vem do banco e responde em json (res=response)

    })
});



//Enviar dados para o BD




//Criando servidor
app.listen(4000, () => {
  console.log("O servidor subiu na porta 4000");
});



