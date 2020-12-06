<?php

    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require_once '../connect_bd.php';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $mensagem = $_POST['mensagem'];
        
        $sql = "INSERT INTO comentarios VALUES (
            
            null,
            '$mensagem',
            null
            );";

        nonquery($sql);
    
        echo json_encode($_POST);

    };


    $sql = "SELECT * FROM produtos";

    
    $result = query($sql);  
    $comentarios = [];


    while ($row = mysqli_fetch_assoc($result)){
        $comentarios [] = $row;
    }


    echo json_encode($comentarios);

?>