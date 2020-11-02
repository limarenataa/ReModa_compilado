<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "remoda";

        $conn = mysqli_connect($servername, $username, $password, $database);

        if(!$conn){
            die("A conexão falhou".mysqli_connect_error());
        } else {
            echo "Conexão estabelecida";
        }



        $sql = "select * from pedidos";
        $result = mysqli_query($conn, $sql);
        
        while($row = mysqli_fetch_assoc($result))
    {
        printf ("%s (%s)", $row["idpedidos"], $row["nome_cliente"]);
       
        echo "<hr>";
    }
    
    mysqli_close($conn);
    ?>

<a href="cadastro.php">Cadastro cliente</a>


</body>
</html>

