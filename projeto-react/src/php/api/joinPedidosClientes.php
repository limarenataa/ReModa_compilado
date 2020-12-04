<?php

    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    require_once '../connect_bd.php';

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        // echo json_encode(array("msg" => "Método GET Efetuado"));
        $sql = "SELECT *
                FROM 
                    pedidos
                JOIN
                    clientes
                on fk_idcliente = idcliente;
                ";
        
        $resultado = query($sql);
        $pedidosClientes = [];
        
        while ($row = mysqli_fetch_assoc($resultado)){
            $pedidosClientes [] = $row;
        }

        echo json_encode($pedidosClientes);
    };

?>