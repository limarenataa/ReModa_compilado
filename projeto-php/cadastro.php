<html>
    <head>
        <title>Cadastro</title>
    </head>
    <body>
    <form class="form-contato" method="post" name="form-contato" action="">
            
    <p class="informacao-contato">Nome: </p>
            <input class="input-contato" name="nome" type="text">
            <br><br>
            <p class="informacao-contato">Telefone: </p>
            <input class="input-contato" name="telefone" type="tel">
            <br><br>
            <p class="informacao-contato">Endereço: </p>
            <input class="input-contato" name="endereco" type="text">
            <br><br>
            <input type="checkbox" name="notificacao" id="notificacao" checked>
            <label for="notificacao">Desejo receber notificações da loja</label><br><br><br>
            <input type="submit" name="submit" value="Enviar">
        </form>
    </body>
</html>

<?php


include("conexao.php");

//Confere se esses campos de fato existem com conteúdo dentro:
if(isset($_POST['nome']) && isset($_POST['telefone']) && isset($_POST['endereco'])){

    echo "Dados recebidos!";

    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $endereco = $_POST['endereco'];

    $sql = "insert into pedidos (nome_cliente, endereco, telefone) values ('$nome', '$endereco', '$telefone')";

    $result = $conn->query($sql);

    if ($result){
        echo "Dados Inseridos com sucesso!";
        header("Refresh:3;connect.php");
    } else {
        echo "Dados não inseridos";
    }
}
?>

<?php         
    $sql = "select * from pedidos";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        while($rows = $result-> fetch_assoc()){
            echo "Nome: ".$rows['nome_cliente']."<br>";
            echo "Endereço: ".$rows['endereco']."<br>";
            echo "Telefone: ".$rows['telefone']."<br>";
            echo "<hr>";
        }
    } else{
            echo "Nenhum comentário ainda!";
    }   
?>


