<?php

//API
header("Access-Control-Allow-Origin:*");
require_once "../connect_bd.php";

// $result = $conn->query("SELECT * FROM produtos");
// $produtos = [];


$sql = "SELECT * FROM produtos";
$result = query($sql);  // Puxando a função query da pagina connect_bd
$produtos = [];


while ($row = mysqli_fetch_assoc($result)){
    $produtos [] = $row;
}


echo json_encode($produtos);

?>
