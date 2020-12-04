<?php

    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require_once '../connect_bd.php';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome_cliente = $_POST['nome_cliente'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $endereco    = $_POST['endereco'];
        $complemento = $_POST['complemento'];
        $descricao_produto = $_POST['descricao_produto'];
        $preco    = $_POST['preco'];
        $quantidade = $_POST['quantidade'];
        $preco_final = $_POST['preco_final'];

        
        $sql = "INSERT INTO pedidos VALUES (
            
            null,
            '$nome_cliente',
            '$email',
            '$telefone',
            '$endereco',
            '$complemento',
            '$descricao_produto',
            '$preco',
            '$quantidade',
            '$preco_final',
            null
            );";

        nonquery($sql);
    
        echo json_encode($_POST);

    };

