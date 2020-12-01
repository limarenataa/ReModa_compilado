<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "remoda";

//Conexão com o BD
    $conn = mysqli_connect($servername, $username, $password, $database);
    $conn->set_charset("utf8");

// Verificação  da conexão com o BD
    if(!$conn){
        die("A conexão falhou".mysqli_connect_error());
    } else {
        echo "Conexão estabelecida";
    }


