<?php

header("Access-Control-Allow-Origin:*");
function query ($sql) {
        
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "remoda";

//Conexão com o BD
    $conn = mysqli_connect($servername, $username, $password, $database);
    $conn->set_charset("utf8");
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);
    return $result;

    }

    function nonquery($sql) {
        
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "remoda";

        $conn = mysqli_connect($servername, $username, $password, $database);
        $conn->set_charset("utf8");
        $resultado = mysqli_query($conn, $sql);
        mysqli_close($conn);

        }

    





