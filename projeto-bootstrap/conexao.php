<?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "remodaphp";


        $conn = mysqli_connect($servername, $username, $password, $database);

        $conn->set_charset("utf8");

        // if(!$conn){
        //     die("A conexão falhou".mysqli_connect_error());
        // } else {
        //     echo "Conexão estabelecida";
        // }
?>