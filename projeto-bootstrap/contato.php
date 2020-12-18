<?php


include("conexao.php");

//Confere se esses campos de fato existem com conteúdo dentro:
if(isset($_POST['nome']) && isset($_POST['mensagem'])){

    // echo "Dados recebidos!";

    $nome = $_POST['nome'];
    $mensagem = $_POST['mensagem'];


    $sql = "insert into comentarios (nome, mensagem) values ('$nome', '$mensagem')";

    $result = $conn->query($sql);

    // if ($result){
    //     echo "Dados Inseridos com sucesso!";
    // } else {
    //     echo "Dados não inseridos";
    // }
}
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato - ReModa </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <!--Início do Menu-->
        <?php
            include_once('menu.html');
        ?>
        <!--Fim do Menu-->
    </header>

    <main>
    
    <br>
    <h1>Contato</h1>
    <hr>
    <br>
        
        <div class="container">

            <form method="post" action="">
                <div class="form-group">
                    <label for="name">Nome: </label>
                    <input type="text"  name="nome" class="form-control" id="name" aria-describedby="inputName">
                    <small id="inputName" class="form-text text-muted">Por favor, preencher com o nome completo</small>
                </div>
                <div class="form-group">
                    <label for="msg">Mensagem: </label>
                    <textarea class="form-control" name="mensagem" id="msg" rows="6"></textarea>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input"  name="notificacao" id="check" checked>
                    <label class="form-check-label" for="check">Desejo receber notificações da loja</label>
                </div>
                <br>
                <button type="submit" name="submit" class="btn btn-dark btn-contato">Enviar</button>
            </form>

        </div>

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

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </main>

    <footer class="rodape bg-dark">
        <div class="info-footer">
            <h4>Formas de pagamento</h4>
            <img class="imagem-footer" src="./imagens/logos-pagamento.png" alt="Formas de pagamento">
            <!--A descrição da tag alt é importante para acessibilidade visual-->
            <p>ReModa &#10048; &copy; &reg</p>
        </div>
    </footer>
</body>


</html>
