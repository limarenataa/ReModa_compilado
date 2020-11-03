<?php


include("conexao.php");

//Confere se esses campos de fato existem com conteúdo dentro:
if(isset($_POST['nome']) && isset($_POST['mensagem'])){

    echo "Dados recebidos!";

    $nome = $_POST['nome'];
    $mensagem = $_POST['mensagem'];


    $sql = "insert into comentarios (nome, mensagem) values ('$nome', '$mensagem')";

    $result = $conn->query($sql);

    if ($result){
        echo "Dados Inseridos com sucesso!";
    } else {
        echo "Dados não inseridos";
    }
}
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato - ReModa </title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <!--Início do Menu-->
        <?php
            include_once('menu.html');
        ?>
        <!--Fim do Menu-->
        <h1>Contato</h1>
        <hr>
        <br>
    </header>

    <main>
        <form class="form-contato" method="post" name="form-contato" action="">
            <p class="informacao-contato">Nome: </p>
            <input class="input-contato" name="nome" type="text">
            <br><br>
            <p class="informacao-contato">Mensagem: </p>
            <textarea class="textarea-contato" name="mensagem"></textarea><br>
            <input type="checkbox" name="notificacao" id="notificacao" checked>
            <label for="notificacao">Desejo receber notificações da loja</label><br><br><br>
            <input type="submit" name="submit" value="Enviar">
        </form>

        <section class="formas-contato">
                <div class="email-contato">
                    <img class="img-contato" src="./imagens/gmail.png" alt="Logo gmail">
                    <p>contato@remoda.com<p>
                </div>

                <div class="tel-contato">
                    <img class="img-contato" src="./imagens/whatsapp.png" alt="Logo WhatsApp">
                    <p>(21)90000-0000<p>
                </div>
        </section>

        <?php 
            
            $sql = "select * from comentarios";
            $result = $conn->query($sql);
        
            if($result->num_rows > 0){
                while($rows = $result-> fetch_assoc()){
                    echo "Data: ".$rows['data']."<br>";
                    echo "Nome: ".$rows['nome']."<br>";
                    echo "Mensagem: ".$rows['mensagem']."<br>";
                    echo "<hr>";
                }
            } else{
                echo "Nenhum comentário ainda!";
            }   
        ?>

        <br><br>
    </main>

    <footer class="rodape">
        <div class="footer">
            <h4>Formas de pagamento</h4>
            <img class="imagem-footer" src="./imagens/logos-pagamento.png" alt="Formas de pagamento">
            <!--A descrição da tag alt é importante para acessibilidade visual-->
            <p>ReModa &#10048; &copy; &reg</p>
        </div>
    </footer>
</body>


</html>
