<?php

    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require_once '../connect_bd.php';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $descricao_produto = $_POST['descricao_produto'];
        $preco    = $_POST['preco'];
        $quantidade = $_POST['quantidade'];
        $preco_final = $_POST['preco_final'];
        $nome_cliente = $_POST['nome_cliente'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $endereco    = $_POST['endereco'];
        $complemento = $_POST['complemento'];

    
        $sql = "INSERT INTO pedidos VALUES (
            
            null,
            '$descricao_produto',
            '$preco',
            '$quantidade',
            '$preco_final',
            1
            
            );";
             
        nonquery($sql);

        
        $sql2 = "INSERT INTO clientes VALUES (

            null,
            '$nome_cliente',
            '$email',
            '$telefone',
            '$endereco',
            '$complemento'

        );";

        nonquery($sql2);

        echo json_encode($_POST);

    }

